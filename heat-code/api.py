from flask import Flask, jsonify, render_template, url_for, flash, request
from datetime import datetime, timedelta
import time
import sys
sys.path.append('../')
import Filetesting


app = Flask(__name__)
@app.route('/time')
def getcurrenttime():
    return {'time':time.time()}


@app.route('/docker')
def getnewcurrenttime():
    Filetesting.run_DOCKER()
    #with open "dockerwork/src/" as file:
    text_file = open("dockerwork/src/output.txt", "r")
    data = text_file.read()
    text_file.close()
    print((str("hi")))
    #print(jsonify(str(data)))
   # print(type(jsonify(str(data))))
    return jsonify(str(data))

@app.route("/senduserdata", methods=["POST"], strict_slashes=False)
def add_articles():
    data = request.get_json()
    with open("dockerwork/src/userCode.txt","w") as file:
        file.write(data["userCode"])
        #print("the data is "+ str(data["userCode"]))
        

    return "success"
@app.route("/problem", methods=["POST"], strict_slashes=False)
def add_problem():
    data = request.get_json()
    print(type(data))
    print(str(data))
    with open("dockerwork/src/problemId.txt","w") as file:
        file.write(str(data["problemId"]))
        
       
        

    return "success"

@app.route("/savetime", methods=["POST"], strict_slashes=False)
def save_time():
    data = time.time()
    with open("dockerwork/src/time.txt","w") as file:
        file.write(data["time"])

    return "success"

@app.route("/printtime")
def print_time():
    text_file = open("dockerwork/src/time.txt", "r")
    data = text_file.read()
    text_file.close()
    new_time = (time.time() - data).totalminutes()
    
    return jsonify(str(new_time))
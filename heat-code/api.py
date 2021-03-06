from flask import Flask, jsonify, render_template, url_for, flash, request
from datetime import datetime, timedelta
import time
import sys
sys.path.append('../')
import Filetesting


app = Flask(__name__)
@app.route('/time')
def get_Current_Time():
    return {'time':time.time()}

#this function is used to call docker, as well as return all of its inputs and outputs
@app.route('/docker')
def run_Docker():
    #this is used to run docker, as well as opening the file that docker outputs to and returning the values given
    Filetesting.run_DOCKER()
    #this is the part that opens and stores the file output
    text_file = open("dockerwork/src/output.txt", "r")
    data = text_file.read()
    text_file.close()
  
    return jsonify(str(data))

#this is the portion that takes the usercode and writes it to a text file when called
@app.route("/senduserdata", methods=["POST"], strict_slashes=False)
def add_Articles():
    data = request.get_json()
    with open("dockerwork/src/userCode.txt","w") as file:
        file.write(data["userCode"])

    return "success"


#this function and route stores the id of the problem into a txt file for use later
@app.route("/problem", methods=["POST"], strict_slashes=False)
def add_Problem():
    data = request.get_json()
    with open("dockerwork/src/problemId.txt","w") as file:
        file.write(str(data["problemId"]+1))

    return "success"


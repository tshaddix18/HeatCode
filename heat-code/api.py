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

    with open("dockerwork/src/output.txt") as filt:
        newstring = filt.read()

    return jsonify(newstring)

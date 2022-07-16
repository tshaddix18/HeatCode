from flask import Flask, render_template, url_for, flash, request
from datetime import datetime, timedelta
import time


app = Flask(__name__)
@app.route('/time')
def getcurrenttime():
    return {'time':time.time()}

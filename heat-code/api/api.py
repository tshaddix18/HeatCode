from flask import Flask, render_template, url_for, flash, request
from datetime import datetime, timedelta
import time


app = Flask(__name__)
@app.route('/code')
def get_currenttime():
    return {'time':time.time()}
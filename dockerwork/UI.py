
from flask import Flask, render_template, url_for, flash, request
import requests
from datetime import datetime, timedelta
import Filetesting
from time import sleep
import os
from forms import registerform

app = Flask(__name__)

# WHEN DEPLOYING PUBLICLY, GENERATE A NEW ONE AND MAKE IT AN ENVIRONMENT VARIABLE OR SOMETHING INSTEAD,
#   OTHERWISE THIS KEY IS USELESS FOR PREVENTING SECURITY RISKS
app.config['SECRET_KEY'] = '1c54243c5e2a20c2fbcccee5f28ff349'


def test_url(self):
    with app.app_context(), app.test_request_context():
        self.assertEqual('/', url_for('root.home'))



# Home page route
#methods=['POST', 'GET']
@app.route("/")
@app.route("/home",methods=['POST', 'GET'])
def home():
    form = registerform()
    

    if request.method == 'GET':
        try:
            print("posted!")
            url = request.form["username"]
           # r = form.username.gettext()
            r = requests.get(url)
            
            
            
        except:
            print("error!")
        try:
            with open("src/test.py",'w') as file:
                 for string in r.text:
                    file.write(string)
            Filetesting.run_DOCKER()
        except:
            print("nope")
  
    return render_template("home.html", title='home',form = form)

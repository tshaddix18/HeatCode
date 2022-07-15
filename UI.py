
from flask import Flask, render_template, url_for, flash, request
from datetime import datetime, timedelta
from time import sleep


app = Flask(__name__)

# WHEN DEPLOYING PUBLICLY, GENERATE A NEW ONE AND MAKE IT AN ENVIRONMENT VARIABLE OR SOMETHING INSTEAD,
#   OTHERWISE THIS KEY IS USELESS FOR PREVENTING SECURITY RISKS
app.config['SECRET_KEY'] = '1c54243c5e2a20c2fbcccee5f28ff349'


def test_url(self):
    with app.app_context(), app.test_request_context():
        self.assertEqual('/', url_for('root.home'))



# Home page route
@app.route("/")
@app.route("/home")
@app.route("/index.html")
def home():
    return render_template("home.html")

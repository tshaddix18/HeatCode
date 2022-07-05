from flask_wtf import FlaskForm
from wtforms import TextAreaField, PasswordField, SubmitField
from wtforms.validators import  InputRequired,Length, EqualTo

class registerform(FlaskForm):
    username = TextAreaField('Username',validators=[InputRequired()])
    Submit = SubmitField('Sign up')
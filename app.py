from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

app=Flask(__name__)

UPLOAD_FOLDER = '/static/images/'
app.config.from_object(Config)



db= SQLAlchemy(app)


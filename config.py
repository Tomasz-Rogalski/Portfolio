import os

BASE_DIR = os.path.dirname(os.path.abspath(__name__))

class Config:
  DEBUG=True
  SECRET_KEY = 'myportkey'
  SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'database.sqlite')
  TEMPLATES_AUTO_RELOAD = True
  UPLOAD_FOLDER = '/static/images/'
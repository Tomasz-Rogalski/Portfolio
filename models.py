from app import db
import re

def slugify(string):
  pattern = r'[^\w+]'
  return re.sub(pattern, '-', string)

class Page(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  slug = db.Column(db.String(200), unique=True)
  title = db.Column(db.String(100))
  subtitle = db.Column(db.String(100), default='default sub')
  description = db.Column(db.Text, default='default description')
  body = db.Column(db.Text, default='default body')
  URL = db.Column(db.String(100))
  github = db.Column(db.String(100))


  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.generate_slug()

  def generate_slug(self):
    self.slug = slugify(self.title)

  def __rep__(self):
    return f'<id: {self.id}, title: {self.title}'


class Image(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  filename = db.Column(db.String(100))
  data = db.Column(db.LargeBinary)

  page_id = db.Column(db.Integer, nullable=False)

  title = db.Column(db.String(100))
  author = db.Column(db.String(100))
  description = db.Column(db.String(300))
  


    


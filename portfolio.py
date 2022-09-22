from app import app
from flask import render_template, request
from models import Page, Image
from app import db


@app.route('/PL/index')
def index():
    return render_template('index.html')

@app.route('/PL/<slug>', methods=['GET'])
def page(slug):
    page = Page.query.filter(Page.slug==slug).first()
    if page.description:
        tags = page.description.splitlines()
    else:
      tags=' '
    if page.body:
      paragraphs = page.body.splitlines()
    images = Image.query.filter(Image.page_id==page.id).all()

    return render_template('page.html', page=page, images=images, paragraphs=paragraphs, tags=tags)   


if __name__=='__main__':
  app.run()
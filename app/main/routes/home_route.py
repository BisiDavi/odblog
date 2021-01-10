from ... import blueprint
from flask import render_template, url_for
from flask import session
from app.main.business.session_business import SessionBusiness
from app.main.business.home_business import HomeBusiness


@blueprint.route("/")
def index():
    SessionBusiness.check_session()
    return HomeBusiness.get_home()

@blueprint.route("/lifestyle")
def lifestyle_page():
    SessionBusiness.check_session()
    return render_template("lifestyle.html", session_data=session["profile"])

@blueprint.route("/saved-posts")
def saved_post():
    SessionBusiness.check_session()
    return render_template("saved.html", session_data=session["profile"])

@blueprint.route("/world")
def world_post():
    SessionBusiness.check_session()
    return render_template("world.html", session_data=session["profile"])

@blueprint.route("/about-us")
def about_page():
    SessionBusiness.check_session()
    return render_template("about.html", session_data=session["profile"])

@blueprint.route("/videos")
def video_page():
    SessionBusiness.check_session()
    return render_template("videos.html", session_data=session["profile"])

@blueprint.route("/contact-us")
def contact_page():
    SessionBusiness.check_session()
    return render_template("contact.html", session_data=session["profile"])

@blueprint.route("/contribute")
def contribute():
    SessionBusiness.check_session()
    return render_template("contribute.html", session_data=session["profile"])

@blueprint.route("/promotion")
def promotion():
    SessionBusiness.check_session()
    return render_template("promotion.html", session_data=session["profile"])

@blueprint.route("/login")
def login():
    SessionBusiness.check_session()
    return render_template("login.html")

@blueprint.route("/register")
def register():
    SessionBusiness.check_session()
    return render_template("register.html")

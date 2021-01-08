from flask import Blueprint

blueprint = Blueprint("main", __name__)

from .main.routes import error_route, home_route

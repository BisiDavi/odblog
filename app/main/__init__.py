import os
from flask import Flask
from .config import config_by_name
from app.main.config import Config
from flask_cors import CORS
from app import blueprint


# instantiate the extensions
cors = CORS()


def create_app(env_name="dev"):
    app = Flask(__name__, static_url_path="", static_folder="static")
    app.config.from_object(config_by_name[env_name])
    app.register_blueprint(blueprint)
    app.app_context().push()

    extensions(app)

    # set up extensions

    return app


def extensions(app):
    """
    Register 0 or more extensions (mutates the app passed in).

    :param app: Flask application instance
    :return: None
    """
    cors.init_app(app)

    # patch_request_class(app, 30 * 1024 * 1024)

    return None

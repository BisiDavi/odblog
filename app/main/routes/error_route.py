from flask import render_template
from ... import blueprint


@blueprint.app_errorhandler(404)
def page_not_found(e):
    return render_template("page-404.html"), 404


@blueprint.app_errorhandler(500)
def internal_server_error(e):
    return render_template("page-500.html"), 500


@blueprint.errorhandler(403)
def access_forbidden(error):
    return render_template("page-403.html"), 403

from flask import session, request
from flask import current_app, render_template


class HomeBusiness:
    @staticmethod
    def get_home():
        # r = requests.get(current_app.config["URL_API_DOMAIN"] + "app/get_home?language=1&mode=1")
        # data_json = r.json()
        data_json = {}
        print(data_json)
        return render_template("index.html", data_json=data_json, session_data=session["profile"])
from flask import session

class SessionBusiness:
    @staticmethod
    def check_session():
        if not session.get("profile"):
            session["profile"] = {
                "language": '1',
                "dark_mode": True,
                "access_token": '',
            }
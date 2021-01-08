import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    URL_API_DOMAIN = os.environ.get("URL_API_DOMAIN")


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False


class TestingConfig(Config):
    DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig, prod=ProductionConfig, testing=TestingConfig
)

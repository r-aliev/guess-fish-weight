from django.apps import AppConfig
import os


class ApiConfig(AppConfig):
    import pickle

    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    CURRENT_DIR = os.path.dirname(__file__)
    model_file = os.path.join(CURRENT_DIR, 'weight-prediction.model')

    model = pickle.load(open(model_file, 'rb'))

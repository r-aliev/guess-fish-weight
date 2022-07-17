from django.apps import AppConfig


class ApiConfig(AppConfig):
    import pickle

    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    path = 'api/weight-prediction.model'

    model = pickle.load(open(path, 'rb'))

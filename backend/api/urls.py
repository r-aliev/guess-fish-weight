from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path("fishes/", views.getFishes, name="fishes"),
]

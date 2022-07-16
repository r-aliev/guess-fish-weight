from django.shortcuts import render
from rest_framework.response import Response

from rest_framework.decorators import api_view
from .models import Fish
from .serializers import FishSerializer


# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    return Response('Ca va!')

@api_view(['GET'])
def getFishes(request):
    fishes = Fish.objects.all()
    serializer = FishSerializer(fishes, many=True)
    return Response(serializer.data)

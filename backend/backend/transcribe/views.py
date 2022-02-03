from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class TranscribeViewSet(APIView):
    def get(self, request):
        print(request.data)
        return Response({"message": "Hello World"})

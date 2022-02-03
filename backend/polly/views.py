from email import message
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class PollyViewSet(APIView):
    def get(self, request):
        data = request.data             # Data passed in body
        print(data)
        return Response({"message": "All good get"})

    def post(self, request):
        data = request.data             # Data passed in body
        print(data)
        return Response({"message": "All good post"})
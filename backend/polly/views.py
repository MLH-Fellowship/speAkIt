from email import message
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . serializers import SnippetSerializer
from rest_framework import serializers

class PollyViewSet(APIView):
    def get(self, request):
        data = request.data             # Data passed in body
        print(data)
        return Response({"message": "All good get"})

    def post(self, request):
        serializer = SnippetSerializer(data=request.data.get('user'))
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
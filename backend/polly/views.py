from email import message
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . serializers import SnippetSerializer
from rest_framework import serializers
from . aws_polly import PollyService
from rest_framework.renderers import JSONRenderer

class PollyViewSet(APIView):
    def __init__(self, bucket_name="speakit123125467") -> None:
        self.bucket = bucket_name
        self.polly_service = PollyService()
        self.polly_service.create_bucket(self.bucket)

    def get(self, request):
        data = request.data             # Data passed in body
        # audio_url = self.polly_service.retrieve_audio_url(bucket=self.bucket, identifier="testing1234")
        return Response({"message": "All good get"})

    def post(self, request):

        user_input = request.data["user_text"]
        identifier = request.data["identifier"]
        print(user_input, identifier)
        # polly_post = self.polly_service.use_polly(user_input, self.bucket, identifier)
            
        return Response({"message": "working"})
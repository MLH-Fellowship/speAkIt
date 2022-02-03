from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import environ
import boto3

env = environ.Env()
environ.Env.read_env()

transcribe_client = boto3.client('transcribe', aws_access_key_id=env(
    'AWS_ACCESS_KEY_ID'), aws_secret_access_key=env('AWS_SECRET_ACCESS_KEY'))


class TranscribeViewSet(APIView):

    def get(self, request):
        id = request.GET.get('id')
        return Response({"message": env('AWS_SECRET_ACCESS_KEY')})
    """
    The post method should receive the following JSON (example)
    {
        "s3_url": "https://s3.amazonaws.com/bucket/file.mp3",
        "language_code": "en-US",
        "original_text": "Testint speAkIt"
    }

    The API will respond with a JSON object with the following fields:
    {
        "status": "success",
        "transcription": "Testint speAkIt",
        "confidence": 0.9,
        "language_code": "en-US"
    }
    """

    def post(self, request):
        # TODO - create the request
        return Response({"message": env('AWS_SECRET_ACCESS_KEY')})



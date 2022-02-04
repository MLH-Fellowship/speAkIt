from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import environ
import boto3
import urllib
import json

env = environ.Env()
environ.Env.read_env()

transcribe_client = boto3.client('transcribe', aws_access_key_id=env(
    'AWS_ACCESS_KEY_ID'), aws_secret_access_key=env('AWS_SECRET_ACCESS_KEY'))
s3_client = boto3.client('s3', aws_access_key_id=env(
    'AWS_ACCESS_KEY_ID'), aws_secret_access_key=env('AWS_SECRET_ACCESS_KEY'))


class TranscribeViewSet(APIView):

    """
    The post method should receive the following JSON (example)
    {
        "s3_url": "https://s3.amazonaws.com/bucket/file.mp3",
        "language_code": "en-US",
    }
    The API will respond with a JSON object with the following fields:
    {
        "message": "Successfully started transcription job" || "Failed to start transcription job",
        "transcription_job_name": "transcription_job_name",
        "aws_response": "aws_response"
    }

    The transcription job name has to be stored to be used in the get method to get the results
    """

    def post(self, request):
        s3_url = request.data.get('s3_url')
        language_code = request.data.get('language_code')

        s3_filename = s3_url.split('/')[-1]
        s3_uri = "s3://{}/{}".format(env('AWS_BUCKET_NAME'), s3_filename)

        if not s3_url or not language_code:
            return Response({"message": "Please provide all the required fields."})

        response = transcribe_client.start_transcription_job(
            TranscriptionJobName=s3_filename+'_transcription',
            Media={'MediaFileUri': s3_uri},
            MediaFormat=s3_url.split('.')[-1],
            LanguageCode=language_code,
            OutputBucketName=env('AWS_BUCKET_NAME'),
            OutputKey='transcriptions/',
        )

        if response:
            return Response({"message": "Successfully started transcription job", "transcription_job_name": response['TranscriptionJob']['TranscriptionJobName'], "aws_response": response})
        else:
            return Response({"message": "Failed to start transcription job", "aws_response": response})

    """
    This get method should recive the following query parameters:
    Example: api.url/transcribe/?transcription-job-name=test_transcription

    The API will respond with a JSON object with the following fields:
    {
        message: "Successfully fetched transcription" || "Failed to get transcription job" || "Transcription job not completed yet",
        transcription: [{words}],
        aws_response: "Response from AWS",
        status: "success" || "failed" || "pending"
    }
    """

    def get(self, request):
        transcription_job_name = request.query_params.get(
            'transcription-job-name')

        if not transcription_job_name:
            return Response({"message": "Please provide the transcription job name."})
        response = transcribe_client.get_transcription_job(
            TranscriptionJobName=transcription_job_name)

        if response:
            s3_url = response['TranscriptionJob']['Transcript']['TranscriptFileUri']
            if response['TranscriptionJob']['TranscriptionJobStatus'] == 'COMPLETED':

                s3_client.put_object_acl(
                    ACL='public-read', Bucket=env('AWS_BUCKET_NAME'), Key="transcriptions/"+transcription_job_name+'.json')
                json_data = urllib.request.urlopen(s3_url)
                data = json.loads(json_data.read())
                words = []

                for item in data['results']['items']:
                    word = item['alternatives'][0]['content']
                    confidence = float(item['alternatives'][0]['confidence'])
                    if confidence > 0.7 or confidence == 0:
                        words.append(
                            {'word': word, 'confidence': confidence, 'color': 'green'})
                    elif confidence <= 0.7 and confidence > 0.4:
                        words.append(
                            {'word': word, 'confidence': confidence, 'color': 'yellow'})
                    else:
                        words.append(
                            {'word': word, 'confidence': confidence, 'color': 'red'})

                return Response({"message": "Successfully fetched transcription", "transcription": words, "aws_response": response, "status": "success"})
            else:
                return Response({"message": "Transcription job not completed yet", "aws_response": response, "status": "pending"})
        else:
            return Response({"message": "Failed to get transcription job", "aws_response": response, "status": "failed"})

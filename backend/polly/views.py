from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . aws_polly import PollyService

class PollyViewSet(APIView):
    # Endpoints class for the AWS Polly services
    def __init__(self, bucket_name="speakit123125467") -> None:
        self.bucket = bucket_name
        self.polly_service = PollyService()
        self.polly_service.create_bucket(self.bucket)

    def get(self, request):
        # the get identifier is the same as the post identifier
        audio_identifier = request.query_params.get('identifier')    
        if not audio_identifier:
            return Response({"message": "Please provide the identifier of the audio"})
        # audio_url = self.polly_service.retrieve_audio_url(bucket=self.bucket, identifier="testing1234")
        audio_url = self.polly_service.retrieve_audio_url(bucket=self.bucket, identifier=audio_identifier)
        return Response({"audio_url": audio_url})

    def post(self, request):
        """JSON requiered for the POST:
            {
                "user_text": str,
                "identifier": str 
            }
        """
        user_input = request.data["user_text"]
        identifier = request.data["identifier"]

        polly_response = self.polly_service.use_polly(user_input, self.bucket, identifier)            
        
        if polly_response:
            return Response({"message": "Successfully started polly job", "aws_polly_response": polly_response})
        else:
            return Response({"message": "Failed to start polly job", "aws_polly_response": polly_response})
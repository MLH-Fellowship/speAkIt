from http import client
from time import process_time_ns
from xmlrpc.client import Boolean
import boto3
import logging
from botocore.exceptions import ClientError
import time

class PollyService():
    def __init__(self) -> None:
        # clients for AWS services
        self.s3_client = boto3.client('s3')
        self.polly_client = boto3.client("polly")
        self.s3_bucket = boto3.resource('s3')

    def create_bucket(self, bucket_name: str, region=None) -> Boolean:
        """Create an S3 bucket in a specified region

        If a region is not specified, the bucket is created in the S3 default
        region (us-east-1).

        :param bucket_name: Bucket to create
        :param region: String region to create bucket in, e.g., 'us-west-2'
        :return: True if bucket created, else False
        """
        # Create bucket
        try:
            if region is None:
                response = self.s3_client.create_bucket(Bucket=bucket_name)
                print(response)
            else:
                s3_client = self, boto3.client('s3', region_name=region)
                location = {'LocationConstraint': region}
                s3_client.create_bucket(Bucket=bucket_name,
                                        CreateBucketConfiguration=location)
        except ClientError as e:
            logging.error(e)
            return False
        return True

    def use_polly(self, user_text: str, bucket: str, identifier: str) -> str:
        """Use the AWS Polly in order to process the user text into audio

        :user_text: user text sent from the frontend
        :bucket: name of the bucket
        :identifier: unique identifier that will be the matching string to search the audio file
        in the S3 bucket
        """
        # calling the polly service, it will be sent to the S3 bucket
        try:
            response = self.polly_client.start_speech_synthesis_task(
                Engine='standard',
                LanguageCode='es-US',
                OutputFormat='mp3',
                OutputS3BucketName=bucket,
                OutputS3KeyPrefix=identifier,
                Text=user_text,
                TextType='text',
                VoiceId='Brian'
            )
        except ClientError as e:
            logging.error(e)
            return "Something wrong happened"
        return response

    def retrieve_audio_url(self, bucket: str, identifier: str) -> str:
        s3_audio_user = self.s3_bucket.Bucket(bucket).objects.filter(Prefix=identifier)
        audio_url = f'https://{bucket}.s3.amazonaws.com/{list(s3_audio_user)[0].key}'
        return audio_url
from http import client
from time import process_time_ns
import boto3
import logging
from botocore.exceptions import ClientError
import time

def create_bucket(bucket_name, region=None):
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
            s3_client = boto3.client('s3')
            response = s3_client.create_bucket(Bucket=bucket_name)
        else:
            s3_client = boto3.client('s3', region_name=region)
            location = {'LocationConstraint': region}
            s3_client.create_bucket(Bucket=bucket_name,
                                    CreateBucketConfiguration=location)
    except ClientError as e:
        logging.error(e)
        return False
    return True

def use_polly(user_text: str, bucket: str, identifier: str):
    """Use the AWS Polly in order to process the user text into audio

    :user_text: user text sent from the frontend
    :bucket: name of the bucket
    :identifier: unique identifier that will be the matching string to search the audio file
    in the S3 bucket
    """
    # polly client
    polly_client = boto3.client("polly")
    # calling the polly service, it will be sent to the S3 bucket
    response = polly_client.start_speech_synthesis_task(
        Engine='standard',
        LanguageCode='es-US',
        OutputFormat='mp3',
        OutputS3BucketName=bucket,
        OutputS3KeyPrefix=identifier,
        Text=user_text,
        TextType='text',
        VoiceId='Brian'
    )

def retrieve_audio_url(bucket: str, identifier: str) -> str:
    s3_client = boto3.resource('s3')
    s3_audio_user = s3_client.Bucket(bucket).objects.filter(Prefix=identifier)
    audio_url = f'https://{bucket}.s3.amazonaws.com/{list(s3_audio_user)[0].key}'
    return audio_url

# use_polly("I am testing this 2!", "speakit123125467")# time.sleep(5)

# create_bucket("speakit123125467")
# https://speakit123125467.s3.us-east-1.amazonaws.com/4

    
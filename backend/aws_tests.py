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
            print(response)
        else:
            s3_client = boto3.client('s3', region_name=region)
            location = {'LocationConstraint': region}
            s3_client.create_bucket(Bucket=bucket_name,
                                    CreateBucketConfiguration=location)
    except ClientError as e:
        logging.error(e)
        return False
    return True

def testing_polly(text: str, bucket: str):
    polly_client = boto3.client("polly")
    response = polly_client.start_speech_synthesis_task(
        Engine='standard',
        LanguageCode='es-US',
        OutputFormat='mp3',
        OutputS3BucketName=bucket,
        OutputS3KeyPrefix='testing1234',
        # SampleRate='22050'
        # SnsTopicArn='string',
        # SpeechMarkTypes=[
        #     'sentence'|'ssml'|'viseme'|'word',
        # ],
        Text=text,
        TextType='text',
        VoiceId='Brian'
    )
    # print(response)

# testing_polly("I am testing this 2!", "speakit123125467")
# time.sleep(5)
s3_client = boto3.resource('s3')
objs = s3_client.Bucket("speakit123125467").objects.filter(Prefix="testing1234")
for obj in objs:
    print(obj)
# create_bucket("speakit123125467")

# Let's use Amazon S3
# s3 = boto3.resource('s3')


# for bucket in s3.buckets.all():
#     print(bucket.name)

    
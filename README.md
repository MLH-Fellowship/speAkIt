# speAkIt

## Inspiration
We are not native english speakers and we were finding trouble with the pronunciation while learning the languaje, people can't be with a teacher all day and some apps out there are not very useful when it comes to pronunciation, these two are the obstacles we want to solve when learning English.

## What it does
Our web app let the user type some text he wants to say, that text is converted into audio and the user can hear the correct pronunciation.After it, the usar can upload a record of himself saying what he typed, after some seconds, the user can observe how good was his pronunciation. The voice recording is displayed in the app as text, where each word have a color meaning the following:

- 🟢 Good pronunciation
- 🟡  Kind of good pronunciation
- 🔴 Bad pronunciation

## How we built it
We can divide the functionality in three parts:
- Frontend:
  - React web-app that let the user type the text he wants to say, upload a recording file, get the feedback on how good was the pronunciation and be able to hear the correct pronunciation.
- Backend: 
  - Endpoints responsible for integrating AWS Transcribe and Polly with the user inputs in the React Frontend, using Django rest framework.
- Deployment:
  - The web-app is containerized in Docker, this made it fairly easy to deploy in Google Cloud 
  
## Challenges we ran into
All the project was a challenge for us! We can highlight the following:
- Implement the easiest way to use AWS services
- Decide how the feedback should be seen by the user
- Implement the logic of the response from AWS Transcribe in order to have a nice feedback. 
- Integrate the Frontend made in React with the Django rest framework endpoints 

## Accomplishments that we're proud of
Everything we did is an accomplishment, we made possible the functionality we imagined at the start of the project, in other words, the app rocks! 🎸

## What we learned
Our personal learnings are the following:
- Gustavo: 
  - How to integrate AWS services with the Python SDK (Boto3)
  - A lot about Django rest framework works by implementing an endpoint
  - With the amazing programming sessions with my team I also learnt about React, Docker, GCP and teamwork, thank you guys!  
- Hugo:
  - I got the chance to learn about Django and about some AWS API's and IAM (to share access with my teammates)
  - I created my first REST API on Django
  - I learned about virtual environments on Python, so the process of managing dependencies is easier for our team and the docker image build
  - Refreshed my knowledge about Docker

## What's next for speakit *
- Select the language of the text/recording, so you can practice any language suported by AWS Transcribe
- See how well overall your pronunciation was (either a score or percentage)
- Recording of the voice from the app
- Hear the text with a TTS service, so you can know how to pronounce correctly
## Built With
<p align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/python/python-original.svg" alt="python" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/django/django-original.svg" alt="django" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/javascript/javascript-original.svg" alt="js" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/react/react-original.svg" alt="react" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/materialui/materialui-original.svg" alt="html" width="60" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/docker/docker-original-wordmark.svg" alt="go" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="go" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/googlecloud/googlecloud-original.svg" alt="go" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/github/github-original-wordmark.svg" alt="go" width="40" height="40"/>
</p>

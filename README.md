# speAkIt

## Inspiration
We are not native English speakers, and we were finding trouble with the pronunciation while learning the language, people can't be with a teacher all day and some apps out there are not particularly useful when it comes to pronunciation, these two are the obstacles we want to solve when learning English.

## What it does
Our web app lets the user type some text he wants to say, that text is converted into audio and the user can hear the correct pronunciation. After it, the usar can upload a record of himself saying what he typed, after some seconds, the user can observe how good his pronunciation was. The voice recording is displayed in the app as text, where each word has a color meaning the following:

- 🟢 Good pronunciation
- 🟡 Kind of good pronunciation
- 🔴 Bad pronunciation

## How we built it
We can divide the functionality into three parts:
- Frontend:
  - React web-app that lets the user type the text he wants to say, upload a recording file, get feedback on how good the pronunciation was and be able to hear the correct pronunciation.
- Backend: 
  - Endpoints responsible for integrating AWS Transcribe and Polly with the user inputs in the React Frontend, using Django rest framework.
- Deployment:
  - The web-app is containerized in Docker, this made it easy to deploy in Google Cloud 
  
## Challenges we ran into
The project was a challenge for us! We can highlight the following:
- Implement the easiest way to use AWS services
- Decide how the feedback should be seen by the user
- Implement the logic of the response from AWS Transcribe in order to have a detailed feedback. 
- Integrate the Frontend made in React with the Django rest framework endpoints 

## Accomplishments that we're proud of
Everything we did was an accomplishment, we made possible the functionality we imagined at the start of the project, in other words, the app rocks! 🎸

## What we learned
Our personal learnings are the following:
- Hugo:
  - I got the chance to learn about Django and about some AWS API's and IAM (to share access with my teammates)
  - I created my first REST API on Django
  - I learned about virtual environments on Python, so the process of managing dependencies is easier for our team and the docker image build
  - Refreshed my knowledge about Docker
- Daman:
  - I had some experience with React before, but this project was really challenging because I tried to implement the best approach, this leveled up my JavaScript and ReactJS skills to the next level, also it was nice to learn Material UI.
  - I also learnt how to integrate the ReactJS with the endpoints made in Django rest framework, so, in my way to do that, I ended up learning about Boto3, Polly and Transcribe.
- Gustavo: 
  - How to integrate AWS services with the Python SDK (Boto3)
  - A lot about how Django rest framework works by implementing an endpoint
  - With the amazing programming sessions with my team I also learnt about React, Docker, GCP and teamwork, thank you guys!  


## What's next for speAkIt
- Select the language of the text/recording, so you can practice any language supported by AWS Transcribe
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

## How to run the app locally

The things you must have installed are Python >= 3.9, and npm. And also have an AWS account.

### Let's start with the backend service:

1. First we need to create a virtual environment in python.
   1. Install _venv_ ``` pip install virtualenv```
   2. ``` python3 -m venv env ```
   3. This allows for easy dependency management
2. Activate the virtual environment
   - In the path you specified: ```source env/bin/activate```
   - You know you are in the virtual environment if in the terminal at the start is __(env)__
3. Install the dependencies in the requierments.txt
   - ```pip install -r requirements.txt```
4. Run the Django server:
   - Go to the backend folder ```cd backend```
   - Run ```python3 manage.py runserver```
   - The url is going to be shown, but you don't need it.

### Now the frontend service:
1. Install all the dependencies
   1. Go to the frontend folder ```cd frontend```
   2. Run ```npn install```
2. Start the server: ```npm start```

### For the AWS keys, one option is create a .env file in the backend folder with the next format (no quotes are needed):
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET_NAME=
FRONTEND_URL=http://localhost:3000/
BACKEND_URL=http://localhost:8000/
```

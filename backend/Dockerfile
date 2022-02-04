FROM python:3.9-alpine
RUN python3 -m venv /opt/venv

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_DEFAULT_REGION
ARG AWS_BUCKET_NAME

RUN export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
RUN export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
RUN export AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION
RUN export AWS_BUCKET_NAME=$AWS_BUCKET_NAME

WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/backend

COPY ./requirements.txt ./backend

RUN /opt/venv/bin/pip install -r ./backend/requirements.txt

COPY . ./backend

WORKDIR /usr/src/app/backend

RUN printenv > ./backend/.env

CMD ["/opt/venv/bin/python", "manage.py", "runserver", "0.0.0.0:5000"]
FROM python:3.9-alpine
RUN python3 -m venv /opt/venv

WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/backend

COPY ./requirements.txt ./backend

RUN /opt/venv/bin/pip install -r ./backend/requirements.txt

COPY . ./backend

WORKDIR /usr/src/app/backend

CMD ["/opt/venv/bin/python", "manage.py", "runserver", "0.0.0.0:5000"]
FROM python:3.8-slim-buster

WORKDIR /src


COPY dockerwork/src/main.py ./
COPY dockerwork/src/test.py ./



CMD [ "python3","./main.py","./test.py"]
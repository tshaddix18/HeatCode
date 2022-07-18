FROM python:3.8-slim-buster

WORKDIR /src


COPY dockerwork/src/main.py ./
COPY dockerwork/src/test.py ./
COPY dockerwork/src/usercode.py ./
COPY dockerwork/src/problemOne.py ./
COPY dockerwork/src/problemTwo.py ./
COPY dockerwork/src/problemThree.py ./
COPY dockerwork/src/problemFour.py ./
COPY dockerwork/src/problemFive.py ./
COPY dockerwork/src/problemSix.py ./


CMD [ "python3","./main.py","./test.py"]
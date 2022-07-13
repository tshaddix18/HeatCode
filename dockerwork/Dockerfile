FROM ubuntu

RUN apt-get update
RUN apt-get update && apt-get install -y iputils-ping
RUN apt-get install -y python3

WORKDIR /src


COPY src/main.py ./
COPY src/test.py ./



CMD [ "python3","./main.py","./test.py"]
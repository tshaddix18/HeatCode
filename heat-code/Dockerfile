FROM python:3.8-slim-buster

WORKDIR /src

#this docker file stores all the possible problem files, the porblem id and the usercode into a container for usage
COPY dockerwork/src/main.py ./
COPY dockerwork/src/problemSix.py ./
COPY dockerwork/src/problemFive.py ./
COPY dockerwork/src/problemFour.py ./
COPY dockerwork/src/problemThree.py ./
COPY dockerwork/src/problemTwo.py ./
COPY dockerwork/src/problemOne.py ./
COPY dockerwork/src/userCode.txt ./
COPY dockerwork/src/ProblemId.txt ./

#after that, this dockerfile runs main.py in its own container
CMD [ "python3","-u", "./main.py"]
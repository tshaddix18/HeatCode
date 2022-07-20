
import subprocess
import timeit
import time
import json
from subprocess import Popen, PIPE
from datetime import datetime




#this function is responsible for all docker commands
#it creates a docker image, and container, runs the image inside the container, and writes the output to a file
def run_DOCKER():
    #this is the docker command responsible for making the docker image
    subprocess.run("docker build --tag dockerbuild-python-docker .",shell=True)
    #this is the command that creates a docker contaner and runs the image
    subprocess.run("docker run --name=test2 dockerbuild-python-docker",shell=True,capture_output=True)
    subprocess.run(" docker container wait test2",shell=True)
    #this is the command for storing the output of the container into a variable, then storing into a file
    output = subprocess.run(" docker logs test2",shell=True,capture_output=True).stdout
    with open("dockerwork/src/output.txt",'wb') as file:
           
           file.write(output)
    
    ping = subprocess.run("docker container inspect test2",shell=True,capture_output=True,universal_newlines = True).stdout
    #this is the command for finding the runtime of the file, the ay it does this is by navigating the string
    #logs of the docker container, then subtracting the time it started vs time it finished running
    if ping.index("StartedAt"):
        integern =  ping.index("StartedAt")
        integerend =  ping.index("FinishedAt")
        item1 = datetime.strptime(ping[integern+24:integern+37],"%H:%M:%S.%f")
        item2 = datetime.strptime(ping[integerend+25:integerend+38],"%H:%M:%S.%f")
        timechange = item2-item1
   
    #this is the code that writes the runtime to a file
    with open("dockerwork/src/runtime.txt",'w') as file:
        file.write(str(timechange.total_seconds()) + " seconds")
    
    
    #these commands remove the image and conatiner, so as to limit memory usage over time
    subprocess.run("docker image rm -f dockerbuild-python-docker",shell=True)
    subprocess.run(" docker rm $(docker ps --filter status=exited -q)",shell=True)
   
    



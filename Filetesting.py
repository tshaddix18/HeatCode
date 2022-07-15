
import subprocess
import timeit
import time
import json
from subprocess import Popen, PIPE
from datetime import datetime

#from sqlalchemy import true


image = "Dockerfile"

def run_DOCKER():
    print("running docker")
    subprocess.run("docker build --tag dockerbuild-python-docker .",shell=True)

   
    
    output = subprocess.run("docker run --name=test2 dockerbuild-python-docker",shell=True,capture_output=True).stdout
    subprocess.run(" docker container wait test2",shell=True)

    with open("src/output.txt",'wb') as file:
        
           file.write(output)
    ping = subprocess.run("docker container inspect test2",shell=True,capture_output=True,universal_newlines = True).stdout
  
    if ping.index("StartedAt"):
        integern =  ping.index("StartedAt")
        integerend =  ping.index("FinishedAt")
        item1 = datetime.strptime(ping[integern+24:integern+39],"%H:%M:%S.%f")
        item2 = datetime.strptime(ping[integerend+25:integerend+40],"%H:%M:%S.%f")
        timechange = item2-item1
        
    with open("src/doccontinfo.txt",'w') as file:
        
        file.write(ping)
    with open("src/runtime.txt",'w') as file:
        file.write(str(timechange.total_seconds()) + " seconds")
    
    latest = subprocess.run(" docker container ls -l",shell=True).stdout
  
    subprocess.run("docker image rm -f dockerbuild-python-docker",shell=True)
    subprocess.run(" docker rm $(docker ps --filter status=exited -q)",shell=True)
   
def update_testcase(filename:str):

 with open(filename,"r") as reader:
    line = reader.readlines()
        
        
    with open("dockerwork/src/main.py",'w') as file:
        for string in line:
            file.write(string)





    print("updating testcase")

def update_usercode(filename:str):

 with open(filename,"r") as reader:
    line = reader.readlines()
        
        
    with open("dockerwork/src/test.py",'w') as file:
        for string in line:
            file.write(string)

    
    print("updating usercode")

run_DOCKER()
#update_testcase("Dockerfile")
#update_usercode("Dockerfile")

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
    time_start = time.time()

    for element in range(10):

        
        subprocess.call("docker run dockerbuild-python-docker",shell=True)
        
    time_taken =  (time.time() - time_start)
    print("the total time is "+ str(time_taken))
    with open("src/output.txt",'wb') as file:
        
           file.write(output)
    #ping = subprocess.run("docker run --name=test dockerbuild-python-docker run ping -c 10 8.8.8.8",shell=True,capture_output=True).stdout
    ping = subprocess.run("docker container inspect test2",shell=True,capture_output=True,universal_newlines = True).stdout
    #with subprocess.Popen("docker container inspect test2", stdout=PIPE, universal_newlines=True) as process:
    print(ping)
    if ping.index("StartedAt"):
        integern =  ping.index("StartedAt")
        integerend =  ping.index("FinishedAt")
        print("Found at "+str(integern))
        print(ping[integern+24:integern+41])
        print("\n" + ping[integerend+25:integerend+42])
        item1 = datetime.strptime(ping[integern+24:integern+39],"%H:%M:%S.%f")
        print("\nthe datetime 1st object is "+str(item1))
        item2 = datetime.strptime(ping[integerend+25:integerend+40],"%H:%M:%S.%f")
        print("\nthe datetime 2nd object is "+str(item2))
        timechange = item2-item1
        print("the total time change is " + str(timechange.total_seconds()))
    with open("src/ping.txt",'w') as file:
        
        file.write(ping)
    
    latest = subprocess.run(" docker container ls -l",shell=True).stdout
    subprocess.run(" docker container wait test",shell=True)
    #subprocess.run("docker container logs --timestamps test",shell=True)
    #docker container logs --timestamps test
    times = subprocess.run("docker container inspect test2", shell=True,capture_output=True).stdout
    #my_json = times.decode('utf8').replace("'", '"')
    #newtime = str(times).replace("'","'""'")
    #y = json.loads(my_json)
    #s = json.dumps(y, indent=4, sort_keys=True)
    #print(y["StartedAt"])
   # for value in s:
       # print(value)
   
   # subprocess.run("STOP=$(docker inspect --format={{{{{.State.FinishedAt}}}}} test)", shell=True,capture_output=True)
   #.State.FinishedAt

    with open("src/starttime.txt",'w') as file:
        for element in times:
            file.write(str(element))
    stringtimes = str(times)
    #print("the docker start time issss "+stringtimes)
    #output = subprocess.run("pwd", capture_output=True).stdout
    #subprocess.run(" START=$(docker inspect --format='{{.State.StartedAt}}' dockerbuild-python-docker)",shell=True)
    #subprocess.run(" STOP=$(docker inspect --format='{{.State.FinishedAt}}' dockerbuild-python-docker)",shell=True)
   # subprocess.run("START_TIMESTAMP=$(date --date=$START)",shell=True)
   # subprocess.run("STOP_TIMESTAMP=$(date --date=$STOP)",shell=True)
    #subprocess.run("echo $(($STOP_TIMESTAMP-$START_TIMESTAMP)) seconds << timetaken.txt",shell=True)
    #STOP=$(docker inspect --format='{{.State.FinishedAt}}' test)
    
    #"docker inspect --format '{{join .Args " , "}}' container"
    subprocess.run("docker image rm -f dockerbuild-python-docker",shell=True)
    subprocess.run(" docker rm $(docker ps --filter status=exited -q)",shell=True)
   
def update_testcase(filename:str):

 with open(filename,"r") as reader:
    line = reader.readlines()
        
        
    with open("src/main.py",'w') as file:
        for string in line:
            file.write(string)





    print("updating testcase")

def update_usercode(filename:str):

 with open(filename,"r") as reader:
    line = reader.readlines()
        
        
    with open("src/test.py",'w') as file:
        for string in line:
            file.write(string)

    
    print("updating usercode")

run_DOCKER()
#update_testcase("Dockerfile")
#update_usercode("Dockerfile")
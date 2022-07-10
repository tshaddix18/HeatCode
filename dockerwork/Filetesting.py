
import subprocess


image = "Dockerfile"

def run_DOCKER():
    print("well i guess this is a start")
    subprocess.run("docker build --tag dockerbuild-python-docker .",shell=True)
    output = subprocess.run("docker run dockerbuild-python-docker ",shell=True,capture_output=True).stdout
    
    with open("src/output.txt",'wb') as file:
        
            file.write(output)
    #output = subprocess.run("pwd", capture_output=True).stdout
    
    subprocess.run(" docker container ls -l",shell=True)
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

#run_DOCKER()
#update_testcase("Dockerfile")
#update_usercode("Dockerfile")
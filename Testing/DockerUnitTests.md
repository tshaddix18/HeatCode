# Module:DOCKER (Dockerfile/Filetesting.py)
### Expectations:

* **Docker file creates image as expected**
	* Tested manually by running:
    subprocess.run("docker build --tag dockerbuild-python-docker .",shell=True)
    in a python file
    * using docker desktop, look at the images tab when running this command, view to see a new docker image appear
    * check the creation date and time of the latest image
* **Docker creates container as expected**
	* Tested manually by running subprocess.run("docker run --name=test2 dockerbuild-python-docker",shell=True,capture_output=True) in a python file in the same directory as its docker file
	* using docker desktop, look at the containers tab when running this command, view to see a new docker container appear
    * check the creation date and time of the latest container
    *check the container name is the one specificied "--name=test2"


* **Docker runs as expected**
	* Testing manually by running subprocess.run("docker run --name=test2 dockerbuild-python-docker",shell=True,capture_output=True)
    * looking at terminal, checking if any errors appear
    * providing files main.py and test.py inside docker file 
    * calling test.py from main.py and printing it as test(100)
    * test.py should include def test(n) return (n+1)
    *  look at terminal to see if output is 101


    * **Docker stores values as expected**
    * store the output as output = subprocess.run(" docker logs test2",shell=True,capture_output=True).stdout
    *  write the bytes to a file- output.txt
    *  go to output.txt, check that 101 is in output.txt

    **Docker creates container as expected**
	* Tested manually by running subprocess.run("docker run --name=test2 dockerbuild-python-docker",shell=True,capture_output=True) in a python file in the same directory as its docker file
	* using docker desktop, look at the containers tab when running this command, view to see a new docker container appear
    * check the creation date and time of the latest container
    *check the container name is the one specificied "--name=test2"


### docker testing convention:
Using docker file to create your tests, all files that will be placed in docker for use in a command must be above the first command that uses them, seperating commands. Tests must be conducted with multiple files, to ensure that theuser can store multiple files inside docker 

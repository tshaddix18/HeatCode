
import subprocess
#import docker

image = "Dockerfile"

#client = docker.from_env()
#client.containers.run(image,  sys.argv[1], True)

#client.images.build("dockerbuild-python-docker")

#docker build --tag dockerbuild-python-docker .

#docker run --publish 5000:5000 dockerbuild-python-docker

#docker image rm -f dockerbuild-python-docker
#subprocess.run(["cd dockerwork", "-l"])


def run_DOCKER():
    print("well i guess this is a start")
    subprocess.run("docker build --tag dockerbuild-python-docker .",shell=True)
    subprocess.run("docker run dockerbuild-python-docker ",shell=True)



import sys
#import subprocess

f = open("ProblemId.txt")
problemID = f.read()

if problemID == "1":
    exec(open('problemOne.py').read())
   
if problemID == "2":
    exec(open('problemTwo.py').read())

if problemID == "3":
    exec(open('problemThree.py').read())
   
if problemID == "4":
    exec(open('problemFour.py').read())

if problemID == "5":
    exec(open('problemFive.py').read())
   
if problemID == "6":
    exec(open('problemSix.py').read())





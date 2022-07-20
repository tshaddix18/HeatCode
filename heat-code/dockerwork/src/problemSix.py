import os
os.rename("src/userCode.txt", "src/userCode.py")
import sys
from inspect import getmembers, isfunction
from urllib.parse import uses_relative
from userCode import *

functions_list = getmembers(sys.modules['userCode'], isfunction)

# runs user code
def userCode(s):
   temp = str()
   functionName = str()

   for i in functions_list:
    for j in i:
        functionName = j
        break
    break

   x = eval(str(functionName) + '(s)')

   return x

# tests user code
def problemSix():
    output1 = userCode(s = "(()")
    output2 = userCode(s = ")()())")
    output3 = userCode(s = ")()()())")

    counter = 0
    if output1 == "2":
        counter = 1

    if output2 == "4":
        counter += 1
    
    if output3 == "6":
        counter += 1
    
    print("{}/3 tests passed\n".format(counter))

problemSix()
os.rename("userCode.py", "userCode.txt")

import os
os.rename("userCode.txt", "userCode.py")
import sys
from inspect import getmembers, isfunction
from urllib.parse import uses_relative
from userCode import *

functions_list = getmembers(sys.modules['userCode'], isfunction)

# runs user code
def userCode(s, p):
   temp = str()
   functionName = str()

   for i in functions_list:
    for j in i:
        functionName = j
        break
    break

   args = [s, p]
   x = eval(str(functionName) + '(*args)')

   return x

# tests user code
def problemFive():
    output1 = userCode(s = "aa", p = "a")
    output2 = userCode(s = "aa", p = "a*")
    output3 = userCode(s = "ab", p = ".*")

    counter = 0
    if output1 == "false":
        counter = 1

    if output2 == "true":
        counter += 1
    
    if output3 == "true":
        counter += 1
    
    print("{}/3 tests passed\n".format(counter))

problemFive()
os.rename("userCode.py", "userCode.txt")

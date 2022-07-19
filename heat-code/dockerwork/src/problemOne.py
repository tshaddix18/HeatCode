import sys
import os
os.rename("userCode.txt", "userCode.py")
from inspect import getmembers, isfunction
from urllib.parse import uses_relative
from userCode import *

functions_list = getmembers(sys.modules['userCode'], isfunction)

# runs user code
def userCode(input):
   temp = str()
   functionName = str()

   for i in functions_list:
    for j in i:
        functionName = j
        break
    break

   x = eval(str(functionName) + '(input)')

   return x

# tests the user code
def problemOne():
    output1 = userCode("abcabcbb")
    output2 = userCode("bbbbb")
    output3 = userCode("pwwkew")
    output4 = userCode("accovottw")
    output5 = userCode("yywercrllweo")

    counter = 0
    if output1 == 3:
        counter = 1

    if output2 == 1:
        counter += 1
    
    if output3 == 3:
        counter += 1
    
    if output4 == 5:
        counter += 1

    if output5 == 6:
        counter += 1

    print("{}/5 tests passed\n".format(counter))

problemOne()


os.rename("userCode.py", "userCode.txt")

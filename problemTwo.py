import os
os.rename("userCode.txt", "userCode.py")
import sys
from inspect import getmembers, isfunction
from urllib.parse import uses_relative
from userCode import *

functions_list = getmembers(sys.modules['userCode'], isfunction)

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

def problemTwo():
    output1 = userCode([3,0,1])
    output2 = userCode([0,1])
    output3 = userCode([9,6,4,2,3,5,7,0,1])
    output4 = userCode([1,4,5,6,2,3])
    output5 = userCode([0,3,7,5,1,4,2])

    counter = 0
    if output1 == 2:
        counter = 1

    if output2 == 2:
        counter += 1
    
    if output3 == 8:
        counter += 1
    
    if output4 == 0:
        counter += 1

    if output5 == 6:
        counter += 1

    print("{}/5 tests passed\n".format(counter))

problemTwo()

os.rename("userCode.py", "userCode.txt")

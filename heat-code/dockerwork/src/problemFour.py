import os
os.rename("userCode.txt", "userCode.py")
import sys
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

# tests user code
def problemFour():
    output1 = userCode([1,2,3])
    output2 = userCode([0])
    output3 = userCode([2,3])

    counter = 0
    if output1 == [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]:
        counter = 1

    if output2 == [[],[0]]:
        counter += 1
    
    if output3 == [[], [2], [3], [2,3]]:
        counter += 1
    
    print("{}/3 tests passed\n".format(counter))

problemFour()
os.rename("userCode.py", "userCode.txt")

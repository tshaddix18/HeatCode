import os
os.rename("userCode.txt", "userCode.py")
import sys
from inspect import getmembers, isfunction
from urllib.parse import uses_relative
from userCode import *

functions_list = getmembers(sys.modules['userCode'], isfunction)

def userCode(s, k):
   temp = str()
   functionName = str()

   for i in functions_list:
    for j in i:
        functionName = j
        break
    break

   args = [s, k]
   x = eval(str(functionName) + '(*args)')

   return x

def problemThree():
    output1 = userCode(["i","love","leetcode","i","love","coding"], k = 2)
    output2 = userCode(["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4)
    output3 = userCode(["i", "like", "pizza", "i", "pizza"], k = 2)
    output4 = userCode(["one","bright","sunny","sunny","day","one"], k = 2)
    output5 = userCode(["under","the","weather","under","the","weather"], k = 3)

    counter = 0
    if  output1 == ["i","love"]:
        counter = 1

    if output2 == ["the","is","sunny","day"]:
        counter += 1
    
    if output3 == ["i", "pizza"]:
        counter += 1
    
    if output4 == ["one","sunny"]:
        counter += 1

    if output5 == ["under","the", "weather"]:
        counter += 1

    print("{}/5 tests passed\n".format(counter))

problemThree()

os.rename("userCode.py", "userCode.txt")
#os.remove("src/userCode.py")


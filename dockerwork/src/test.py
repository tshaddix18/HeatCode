
from urllib.parse import uses_relative
import usercode
#import filetesting




one,two,three,four,five,six = True, False, False, False, False, False




def userCode(x):
   return 3
    
    

def problemOne():
    global output1
    global output2
    global output3
    global output4
    global output5
    output1 = userCode("abcabcbb")
    output2 = userCode("bbbbb")
    output3 = userCode("pwwkew")
    output4 = userCode("accovottw")
    output5 = userCode("yywercrllweo")

    outputs = True
  
    
def problemTwo():
    global output1
    global output2
    global output3
    global output4
    global output5

    output1 = userCode([3,0,1])
    output2 = userCode([0,1])
    output3 = userCode([9,6,4,2,3,5,7,0,1])
    output4 = userCode([1,4,5,6,2,3])
    output5 = userCode([0,3,7,5,1,4,2])

    outputs = True
     

def problemThree():
    global output1
    global output2
    global output3
    global output4
    global output5

    output1 = userCode(["i","love","leetcode","i","love","coding"], k = 2)
    output2 = userCode(["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4)
    output3 = userCode(["i", "like", "pizza", "i", "pizza"], k = 2)
    output4 = userCode(["one","bright","sunny","sunny","day","one"], k = 2)
    output5 = userCode(["under","the","weather","under","the","weather"], k = 3)

    outputs = True

def problemFour():
    global output1
    global output2
    global output3
   
    output1 = userCode([1,2,3])
    output2 = userCode([0])
    output3 = userCode([2,3])

    outputs = False
   
def problemFive():
    global output1
    global output2
    global output3

    output1 = userCode(s = "aa", p = "a")
    output2 = userCode(s = "aa", p = "a*")
    output3 = userCode(s = "ab", p = ".*")

    outputs = False
    
def problemSix():
    global output1
    global output2
    global output3

    output1 = userCode(s = "(()")
    output2 = userCode(s = ")()())")
    output3 = userCode(s = ")()()())")

    outputs = False
   
# if the user is solving problem one
problemOne()
one = True
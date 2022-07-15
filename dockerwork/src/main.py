import test
import time

if test.one == True:
    counter = 0
    if test.output1 == 3:
        counter = 1

    if test.output2 == 1:
        counter += 1
    
    if test.output3 == 3:
        counter += 1
    
    if test.output4 == 5:
        counter += 1

    if test.output5 == 6:
        counter += 1

    print(counter, "/5 tests passed\n")

if test.two == True:
    counter = 0
    if test.output1 == 2:
        counter = 1

    if test.output2 == 2:
        counter += 1
    
    if test.output3 == 8:
        counter += 1
    
    if test.output4 == 0:
        counter += 1

    if test.output5 == 6:
        counter += 1

    print(counter, "/5 tests passed\n")

if test.three == True:
    counter = 0
    if test.output1 == ["i","love"]:
        counter = 1

    if test.output2 == ["the","is","sunny","day"]:
        counter += 1
    
    if test.output3 == ["i", "pizza"]:
        counter += 1
    
    if test.output4 == ["one","sunny"]:
        counter += 1

    if test.output5 == ["under","the", "weather"]:
        counter += 1

    print(counter, "/5 tests passed\n")

if test.four == True:
    counter = 0
    if test.output1 == [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]:
        counter = 1

    if test.output2 == [[],[0]]:
        counter += 1
    
    if test.output3 == [[], [2], [3], [2,3]]:
        counter += 1
    
    print(counter, "/3 tests passed\n")

if test.five == True:
    counter = 0
    if test.output1 == "false":
        counter = 1

    if test.output2 == "true":
        counter += 1
    
    if test.output3 == "true":
        counter += 1
    
    print(counter, "/3 tests passed\n")

if test.six == True:
    counter = 0
    if test.output1 == "false":
        counter = 1

    if test.output2 == "true":
        counter += 1
    
    if test.output3 == "true":
        counter += 1
    
    print(counter, "/3 tests passed\n")

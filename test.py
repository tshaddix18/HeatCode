import requests

#Base URL
BASE = "http://127.0.0.1:5000/"

response = requests.patch(BASE + "video/2", {"views":99})
# data = [{"likes": 10, "name": "Alex", "views": 1},
#         {"likes": 73, "name": "a", "views": 42},
#         {"likes": 2, "name": "z", "views": 5}]

# for i in range(len(data)):
#     response = requests.put(BASE + "video/" + str(i), data[i])
#     print(response.json())
# #Test response with /helloworld
# # response = requests.delete(BASE + "video/0")
# # print(response)
# input()
response = requests.get(BASE + "video/6")
print(response.json())
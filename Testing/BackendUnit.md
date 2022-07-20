# Module:backcend (api.py)
 


    Expectations:
    flask api will be able to send json, string info from front end to backcend

    flask api should be able to interact and change files

    flask api should be able to run docker

    * **  Flask integreation- calls **

	* Tested manually by running:
    call a fetch request to a certain route, called /time to the flask api
    in the flask api, return time.time() and print(success ) to show that 
    flask was called

     * **  Flask integreation- file changes **
     call a fetch request to flask, initlize the flask route to handle post requests in function /problem id
     store the request from react with response.json
     write the file to "problemID"
     check that problemid has a value written to it

     * **  Flask integreation- docker changes **
     call a fetch request to flask, initlize the flask route to handle get requests as /docker
     run run_DOCKER in filetesting.py
     check that output.txt has a value written to it





    
# Module: Code Page testing
### Expectations:

* **Problem information is correctly retrieved by URL location**
	* Tested in code by asserting that the URL location string matches the problem grabbed
	* `/code/1` returned information for Problem 1

	
* **Code Mirror allows and passes in user input**
	* Tested manually by typing `hello_world()` in text box, and ensuring that on `onClick` callback contained `hello_world()`

	
* **Time elapsed shows correct time elapsed**
	* Tested manually by loading site, comparing results that are displayed with computer clock
	
* **Submit button works**
	* Tested manually by changing outputs of function by inputting `return 3` and `return 2` and verifying the number of test cases passed changed
	
	
### React testing convention:
Using `react-testing-library` and `Jest` as a test runner, all unit tests must be named `component.test.js`. For example, `CodePage.test.js`. 

Due to the short time frame and graphical nature of the program, the team relied heavily on manual testing for the website. 

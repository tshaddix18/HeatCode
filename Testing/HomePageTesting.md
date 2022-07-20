# Module: Home (Problems page - Problems.js)
### Expectations:

* **Home page loads complete list of problems**
	* Tested manually by loading page and ensuring list matches (including difficulty, problem information, and examples) problems in problemList
* **NavigationBar appears and routing to /login, /code/1, / works correctly**
	* Tested manually by loading page, clicking each link individually
	* Ensured each navigation link landed in the correct page

	
* **Navigation to each problem works correctly**
	* Tested in code by ensuring that the props passed into CodePage.js matches the URL clicked
	

### React testing convention:
Using react-testing-library and Jest as a test runner, all unit tests must be named component.test.js. For example, Problems.test.js. 


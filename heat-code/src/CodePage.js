import React from "react";
import { Table, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
const MOCK_PROBLEM = {
  Number: "1",
  Difficulty: "Easy",
  Problem:
    "Given a string s, find the length of the longest substring without repeating characters.",
  "Example 1":
    'Input: s = "abcabcbb " \n Output: 3 \n Explanation: The answer is "abc", with the length of 3.',
  "Example 2":
    'Input: s = "bbbbb" \n Output: 1 \n Explanation: The answer is "b", with the length of 1.',
  "Example 3":
    'Input: s = "pwwkew" \n Output: 3 \n Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
  "Test Case 1": {
    Input: "abcabcbb",
    Output: "3",
  },

  "Test Case 2": {
    Input: "bbbbb",
    Output: "1",
  },

  "Test Case 3": {
    Input: "pwwkew",
    Output: "3",
  },

  "Test Case 4": {
    Input: "accovottw",
    Output: "5",
  },

  "Test Case 5": {
    Input: "yywercrllweo",
    Output: "6",
  },
};
// https://uiwjs.github.io/react-codemirror/
// https://stackoverflow.com/questions/57024486/react-get-codemirror-value-onclick
const CodeCard = () => {
  return (
    <div>
      <Card outline body>
        <CardBody>
          <CardTitle tag="h4">Problem 435: Code input</CardTitle>
          <CardText>Problem text here</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export const CodePage = (props) => {
  console.log(props);

  const handleClick = () => {
    {
      // FLASK STUFF HERE
      //  MOCK_PROBLEM has been provided while i figure out how to send the clicked problem data
      /* TODO: set handleClick to connect with flask and run the docker tests somehow */
    }
    console.log("hey");
  };
  return (
    <>
      <CodeCard />
      <CodeMirror
        value="print('hello world!')"
        height="300px"
        theme={okaidia}
        extensions={[python()]}
      />

      <div class="m-4">
        <button class="btn btn-outline-dark btn-lg" onClick={handleClick}>
          {" "}
          Run code
        </button>
      </div>
    </>
  );
};

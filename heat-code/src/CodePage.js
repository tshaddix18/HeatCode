import React from "react";
import { useLocation } from "react-router-dom";
import { Table, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

import problemInfo from "./problemInfo";

// https://uiwjs.github.io/react-codemirror/
// https://stackoverflow.com/questions/57024486/react-get-codemirror-value-onclick
const CodeCard = (props) => {
  const { problem } = props;
  const exampleNames = Object.keys(problem).filter((key) =>
    key.includes("Example")
  );
  const examples = exampleNames.map((exNum, index) => {
    return (
      <>
        <CardTitle key={exNum} tag="h5">
          {exNum}
        </CardTitle>
        <CardText>{problem[exNum]}</CardText>
      </>
    );
  });
  debugger;
  return (
    <div>
      <Card outline body>
        <CardBody>
          <CardTitle tag="h2">
            Problem {problem.Number}: {problem.Name}
          </CardTitle>
          <CardText>{problem.Problem}</CardText>
          {examples}
        </CardBody>
      </Card>
    </div>
  );
};
export const CodePage = (props) => {
  const location = useLocation();
  const problemLoc = location.pathname.slice(-1);
  // Select problem from ID (-1 bc zero index)
  const problemId = parseInt(problemLoc) - 1;
  const problem = problemInfo.problemInfo[problemId];

  const handleClick = (props) => {
    {
      // FLASK STUFF HERE
      //  MOCK_PROBLEM has been provided while i figure out how to send the clicked problem data
      /* TODO: set handleClick to connect with flask and run the docker tests somehow */
    }
    console.log(props);
    const problem = props
  };
  return (
    <>
      <CodeCard problem={problem} />
      <CodeMirror
        value="# Your code here"
        height="300px"
        theme={okaidia}
        extensions={[python()]}
      />

      <div class="m-4">
        <button class="btn btn-outline-dark btn-lg" onClick={() => handleClick(problem)}>
          {" "}
          Run code
        </button>
      </div>
    </>
  );
};

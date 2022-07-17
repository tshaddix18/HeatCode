import React, { useState } from "react";
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
        <p class="text-monospace">{problem[exNum]}</p>
      </>
    );
  });
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
const DEFAULT_TEXT = "# Your code here";
export const CodePage = (props) => {
  const [userCode, setUserCode] = useState(DEFAULT_TEXT);
  const [runCode, setRunCode] = useState(false);
  const [output, setOutput] = useState("Output");

  const location = useLocation();
  const problemLoc = location.pathname.slice(-1);
  // Select problem from ID (-1 bc zero index)
  const problemId = parseInt(problemLoc) - 1;
  const problem = problemInfo.problemInfo[problemId];

  const handleClick = () => {
    setRunCode(true);
    // TODO: PUT FLASK SENDING CODE HERE
    console.log(userCode);
  };
  return (
    <>
      <CodeCard problem={problem} />
      <CodeMirror
        value={DEFAULT_TEXT}
        height="300px"
        theme={okaidia}
        extensions={[python()]}
        onChange={(editor) => {
          setUserCode(editor);
        }}
      />

      <div class="m-4">
        <button class="btn btn-outline-dark btn-lg" onClick={handleClick}>
          Run code
        </button>
        {runCode && (
          <>
            <h3> Output</h3> <p class="text-monospace">{output}</p>
          </>
        )}
      </div>
    </>
  );
};

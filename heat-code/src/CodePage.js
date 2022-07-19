// Code page
// /code/problemId
// Page where user inputs code and works on a specific problem
import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

import problemInfo from "./problemInfo";

const CodeCard = (props) => {
  // CodeCard: Shows info (examples, description) about a given problem
  const { problem } = props;
  // Get examples
  const exampleNames = Object.keys(problem).filter((key) =>
    key.includes("Example")
  );
  const examples = exampleNames.map((exNum, index) => {
    // Render all test case examples
    return (
      <>
        <CardTitle key={exNum} tag="h5">
          {exNum}
        </CardTitle>
        <CardText>{problem[exNum]}</CardText>
      </>
    );
  });
  return (
    <div>
      <Card outline body>
        <CardBody>
          <CardTitle tag="h3">
            Problem {problem.Number}: {problem.Name}
          </CardTitle>
          <CardText>{problem.Problem}</CardText>
          {examples}
        </CardBody>
      </Card>
    </div>
  );
};
// Calculate time elapsed
const startTime = new Date();
const Time = () => {
  // Time display component
  let secs = 0;
  let mins = 0;
  // Get current time
  let endTime = new Date();
  secs = Math.round((endTime - startTime) / 1000);
  mins = Math.round(secs / 60);
  secs = secs % 60;
  console.log(secs, mins);
  return (
    <>
      Time elapsed:
      {mins > 0 ? ` ${mins} minutes, ${secs} seconds` : ` ${secs} seconds`}
    </>
  );
};
// Default code when no user-inputted code
const DEFAULT_TEXT = "def solution(input):\n  # Your code here ";

export const CodePage = (props) => {
  // Render code page

  // States
  // userCode: contains user code from CodeMirror
  const [userCode, setUserCode] = useState(DEFAULT_TEXT);
  // Output from Docker (test cases passed)
  const [data, setData] = useState("0/5 tests passed");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  // Get problemId and info from url
  const location = useLocation();
  const problemLoc = location.pathname.slice(-1);

  // Select problem from ID (-1 bc zero index)
  const problemId = parseInt(problemLoc) - 1;
  // Get problem info
  const problem = problemInfo.problemInfo[problemId];

  const handleClick = async () => {
    // Handle problem submission click
    const todo2 = { problemId };
    const responses = await fetch("/problem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo2),
    });
    if (responses.ok) {
      console.log("it worked");
    }

    const todo = { userCode };
    const response = await fetch("/senduserdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (response.ok) {
      console.log("it worked");
    }

    setIsLoading(true);

    try {
      const response = await fetch("/docker", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setErr(JSON.stringify(result));
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
      console.log(data);
    }
  };

  // Render all code page components
  return (
    <>
      {/* Problem info */}
      <CodeCard problem={problem} />
      {/* Code editor */}
      <CodeMirror
        value={DEFAULT_TEXT}
        height="300px"
        theme={okaidia}
        extensions={[python()]}
        onChange={(editor) => {
          setUserCode(editor);
        }}
      />

      {/* Code submit button */}
      <div class="m-4">
        <button class="btn btn-outline-dark btn-lg" onClick={handleClick}>
          Run code
        </button>
        &nbsp; &nbsp;
        {/* Output */}
        <Card>
          <CardBody>
            <CardTitle tag="h4">Output </CardTitle>
            <output>
              <Time />
              <pre>
                <code>{data}</code>
              </pre>
            </output>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

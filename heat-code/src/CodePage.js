import React from "react";
import { Table, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
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
export const CodePage = () => {
  const handleClick = () => {
    {
      /* TODO: set onClick to connect with flask and run the docker tests somehow */
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

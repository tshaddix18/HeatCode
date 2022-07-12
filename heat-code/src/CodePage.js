import React from "react";
import { Button } from "reactstrap";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
// https://uiwjs.github.io/react-codemirror/
export const CodePage = () => {
  return (
    <>
      <h1>Code</h1>
      <CodeMirror
        value="print('hello world!')"
        height="300px"
        theme={okaidia}
        extensions={[python()]}
      />

      {/* TODO: set onClick to connect with flask and run the docker tests somehow 
      <Button
        color="primary"
        onClick={() => {
          console.log("Print some text");
        }}
      >
        Run code
      </Button>*/}
    </>
  );
};

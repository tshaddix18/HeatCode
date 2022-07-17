import React,{useState,useEffect} from "react";


import { useLocation } from "react-router-dom";
import { Table, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

import problemInfo from "./problemInfo";

// https://uiwjs.github.io/react-codemirror/
// https://stackoverflow.com/questions/57024486/react-get-codemirror-value-onclick
function Welcome() {
  const [Docker,runDocker] = useState([]);
  useEffect(() =>{
    fetch('/docker').then(res => res.json()).then(data => {
      Docker(data);
    });

  },[]);

  return <h1>Hello, {Docker}</h1>;
}
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
const DEFAULT_TEXT = "# Your code here";
export const CodePage = (props) => {
  const [userCode, setUserCode] = useState(DEFAULT_TEXT);
  const [runCode, setRunCode] = useState(false);
  const [output, setOutput] = useState("Output");
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('')
  const location = useLocation();
  const problemLoc = location.pathname.slice(-1);
  // Select problem from ID (-1 bc zero index)
  const problemId = parseInt(problemLoc) - 1;
  const problem = problemInfo.problemInfo[problemId];

  const handleClick = async() => {
   
    setIsLoading(true);

    try {
      const response = await fetch('/docker', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
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
      
       <output>
         
                     {data}
        </output>
      </div>
    </>
  );
};
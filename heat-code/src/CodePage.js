import React,{useState,useEffect} from "react";
import { readFileSync } from "fs";
const fs = require('fs')
import { Table, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

// https://uiwjs.github.io/react-codemirror/
// https://stackoverflow.com/questions/57024486/react-get-codemirror-value-onclick

function Welcome() {
  const [Docker,runDocker] = useState([]);
  useEffect(() =>{
    fetch('/docker').then(res => res.json()).then(data => {
      runDocker(data);
    });

  },[]);

  return <h1>Hello, {Docker}</h1>;
}

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
  const fs = require('fs');
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick =  async () => {
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

      console.log('result is: ', JSON.stringify(result));
      setErr(JSON.stringify(result));
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
      console.log(data);
    }
  };
    console.log("hey");
  
    
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
          {fs.writeFile('Otpt.txt', data, (err) => {
      
      // In case of a error throw err.
      if (err) throw err;
  })}

          Run code
        </button>
        
        <output>
          {data}
        </output>
      </div>
    </>
  );
};

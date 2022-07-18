// Problems.js
// Main page and problems page, displaying the table of problems
import { Table, Card, CardBody, CardTitle, CardText, } from "reactstrap";
import problemInfo from "./problemInfo";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
const WelcomeCard = () => {
  // Render welcome text about the website
  return (
    <div class="m-4">
      <Card outline body>
        <CardBody>
          <CardTitle tag="h4">Welcome to HeatCode☄️</CardTitle>
          <CardText>
            We're here to help make your interview grind process more
            competitive and enjoyable. Select a problem to solve while competing
            head-to-head with someone.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
const peppers = {
  Easy: "🌶",
  Medium: "🌶🌶",
  Hard: "🌶🌶🌶🔥",
};

const ProblemTable = () => {
  // Render table displaying all the problems from problemInfo.json
  const problems = problemInfo.problemInfo.map((prob) => {
    return (
      <tr>
        <th scope="row">{prob.Number}</th>
        <td>
          <Link
            to={{
              pathname: `/code/${prob.Number}`,
              state: "myprop"
            }}
            id={prob.Number}
            state={{from: "hihiihi:w "}}
            props={prob}
          >
            {prob.Name}
          </Link>
        </td>
        <td>{peppers[prob.Difficulty]}</td>
      </tr>
    );
  });
  return (
    <div class="m-4">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Problem</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>{problems}</tbody>
      </Table>
    </div>
  );
};

export function Problems() {
  // Render problems page
  return (
    <div className="Problems">
      <WelcomeCard />
      <ProblemTable />
      <p>©2022 Atomic</p>
    </div>
  );
}

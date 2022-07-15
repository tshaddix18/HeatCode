// Problems.js
// Currently the problems page
import { Table, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import problemInfo from "./problemInfo";

import "bootstrap/dist/css/bootstrap.min.css";
const WelcomeCard = () => {
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
  Hard: "🌶🌶🌶🌶",
};

const ProblemTable = () => {
  console.log(problemInfo);
  const problems = problemInfo.problemInfo.map((prob) => {
    return (
      <tr>
        <th scope="row">{prob.Number}</th>
        <td>{prob.Problem}</td>
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
        <tbody>
        {problems}
        </tbody>
      </Table>
    </div>
  );
};

export function Problems() {
  return (
    <div className="Problems">
      <WelcomeCard />
      <ProblemTable />
      <p>©2022 Atomic</p>
    </div>
  );
}

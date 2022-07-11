// Problems.js
// Currently the problems page
import {
  Table,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const WelcomeCard = () => {
  return (
    <div>
      <Card outline body>
        <CardBody>
          <CardTitle tag="h5">Welcome to HeatCode☄️</CardTitle>
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

const ProblemTable = () => {
  return <Table>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Problem
      </th>
      <th>
        Difficulty 
      </th>
      <th>
        Tags
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Palindrome number
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
}

export function Problems() {
  return (
    <div className="Problems">
      <WelcomeCard />
      <ProblemTable />
      <p>©2022 Atomic</p>
    </div>
  );
}


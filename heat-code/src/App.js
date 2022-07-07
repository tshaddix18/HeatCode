// App.js
// Currently the problems page
import {
  Table,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
  Collapse,
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

const Navigation = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Problems</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/login/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/tshaddix18/HeatCode">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
const Problems = () => {
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

function App() {
  return (
    <div className="App">
      <Navigation />
      <WelcomeCard />
      <Problems />
      <p>©2022 Atomic</p>
    </div>
  );
}

export default App;

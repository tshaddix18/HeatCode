import {
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

function App() {
  return (
    <div className="App">
      <Navigation />
      <WelcomeCard />
      <p>Welcome to Heat Code</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

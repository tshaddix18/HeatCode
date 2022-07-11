import { Problems } from "./Problems";
import { CodePage } from "./CodePage";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
  Collapse,
} from "reactstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Problems</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/code">
                Code
              </NavLink>
            </NavItem>
            {/*
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/tshaddix18/HeatCode">
                  GitHub
                </NavLink>
              </NavItem>
              */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/code">Code</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/code" element={<CodePage />} />
          <Route path="/" element={<Problems />} />
        </Routes>
      </div>
    </Router>
  );
}

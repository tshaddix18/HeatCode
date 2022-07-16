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
import { Link as RRNavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Problems</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/code/1">
                Code
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/login">
                Login
              </NavLink>
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
// Credit for reactstrap/navlink code
// https://github.com/reactstrap/reactstrap/issues/1285
export default function App() {
  document.title = "HeatCode"
  return (
    <Router>
      <Navigation />

      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Problems />} />
        <Route path="/code/:problemId" element={<CodePage />} />
        <Route
          path="/login"
          element={
            <div>
              <h1>Login</h1>{" "}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

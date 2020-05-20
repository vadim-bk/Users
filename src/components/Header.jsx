import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push("/users/new")}>
          Create new user
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

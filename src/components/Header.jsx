import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link as="span">Home</Nav.Link>
        </Link>
        <Link to="/users/new">
          <Nav.Link as="span">Create new user</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

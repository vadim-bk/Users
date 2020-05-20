import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Users</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Create new user</Nav.Link>
      </Nav>
    </Navbar>
  );
};

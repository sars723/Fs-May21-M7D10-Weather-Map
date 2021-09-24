import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="http://127.0.0.1:5500/images/logo@2x.png"
          alt=""
          style={{ width: "120px" }}
        />
      </Navbar.Brand>
      <Nav className="ml-auto d-flex ">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">News</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
    </Navbar>
  );
};

export default NavBar;

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
          style={{ width: "100px" }}
        />{" "}
        Weather Forcast
      </Navbar.Brand>
      <Nav className="ml-auto d-flex ">
        <Nav.Link className="home-menu" href="#home">
          Home
        </Nav.Link>
        <Nav.Link href="#News">News</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

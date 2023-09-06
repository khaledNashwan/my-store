import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import logo from '../Assets/icons8-book-64.png'

const NavBar = () => {
   
  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Container>
          <Navbar.Brand className="text-light fw-bold" href="#home">
            Book
            <img src={logo} alt="" />
            Store
          </Navbar.Brand>
          <Navbar.Toggle className="text-none" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <NavLink className="text-decoration-none text-light menu__link " to="/">
                Home
              </NavLink>
              <NavLink className="text-decoration-none text-light menu__link " to="/product">
                Product
              </NavLink>
              <NavLink className="text-decoration-none text-light menu__link " to="/cart">
                <BsFillCartFill />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

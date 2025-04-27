import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';

function Navbars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="navbar z-3">
        <Container>
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll d-lg-none" onClick={handleShow} />
          
          <Nav className="mx-auto my-2 my-lg-0 nav-links d-none d-lg-flex" navbarScroll>
            <NavLink className='link' activeclassname="active" to="/">Home</NavLink>
            <NavLink className='link' activeclassname="active" to="/about">About Me</NavLink>
            <NavLink className='link' activeclassname="active" to="/skill">Skills</NavLink>
            <NavLink className='link' activeclassname="active" to="/project">Projects</NavLink>
            <NavLink className='link' activeclassname="active" to="/contact">Contact</NavLink>
          </Nav>
          <button className='btn contactbtn d-none d-lg-block'>Contact With Me</button>
        </Container>
      </Navbar>

      {/* Offcanvas for small screens */}
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Portfolio</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column nav-links">
            <NavLink className='link' onClick={handleClose} to="/">Home</NavLink>
            <NavLink className='link' onClick={handleClose} to="/about">About Me</NavLink>
            <NavLink className='link' onClick={handleClose} to="/skill">Skills</NavLink>
            <NavLink className='link' onClick={handleClose} to="/project">Projects</NavLink>
            <NavLink className='link' onClick={handleClose} to="/contact">Contact</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbars;




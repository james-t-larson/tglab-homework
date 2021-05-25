import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {

  const [activeItem, setActiveItem] = useState("");
  const headerItems = [
    "Home", "About Game", "Register",
    "Sponsors", "Contact Us", "Donate"
  ]

  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" className="ml-auto" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto">
            {headerItems.map((item) => {
              return (
                <Link
                 to={ item === "Register" ? "/register" : "/" }
                    className={`mx-4 ${
                      activeItem === item && "nav-active"
                    }`}
                    onClick={(e) => {
                      setActiveItem(e.target.innerText);
                    }}
                 >
                  <Nav.Item >
                   { item } 
                  </Nav.Item>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
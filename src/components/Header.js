import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const [activeItem, setActiveItem] = useState("");

  history.listen((location) => {
    if (location.pathname.includes("register")) {
      setActiveItem("Register");
    }
  });

  const headerItems = [
    "Home",
    "About Game",
    "Register",
    "Sponsors",
    "Contact Us",
    "Donate",
  ];

  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" className="ml-auto" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto">
            {headerItems.map((item, index) => (
              <Link
                key={index}
                to={item === "Register" ? "/register" : "/"}
                className={`mx-4 ${activeItem === item && "nav-active"}`}
                onClick={(e) => {
                  setActiveItem(e.target.innerText);
                }}
              >
                <Nav.Item>{item}</Nav.Item>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

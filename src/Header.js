import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";

const Header = () => {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        display: "block",
        width: 550,
        padding: 10,
      }}
    >
      <Navbar className="fixed-top" color="light" light expand="md">
        <NavbarBrand className="bold mr-5" href="/">
          The Bookish
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto justify-content-end" navbar>
            <NavItem>
              <NavLink className="mr-3 ml-5" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

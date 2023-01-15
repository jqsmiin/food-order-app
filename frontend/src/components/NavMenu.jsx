import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdDeliveryDining } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavMenu() {
  const [scroll, setScroll] = useState(false);

  const setNavbar = () => {
    //console.log(window.scrollY)
    if (window.scrollY > 25) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        id="nav"
        className={scroll ? "navScroll" : ""}
      >
        <Container>
          <Navbar.Brand href="/">
            <h3>
              <span>
                <MdDeliveryDining />
              </span>
              Delivery
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse className="responsive-navbar-nav">
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
              <Link to="/foods" className="nav-link">
                Foods
              </Link>
              <Link to="/sell-food" className="nav-link">
                Sell Your Food!
              </Link>
              <Link to="/sign-up" className="nav-link user-icon">
                <FaUserCircle />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;

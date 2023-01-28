import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdDeliveryDining } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavMenu() {
  const [scroll, setScroll] = useState(false);

  const { user } = useSelector((state) => state.auth);

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
          <Navbar.Brand>
            <Link className="home-link" to="/">
              <h3>
                <span>
                  <MdDeliveryDining />
                </span>
                Delivery
              </h3>
            </Link>
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
              {user !== null && user.role === "customer" && (
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              )}
              {user !== null && user.role === "admin" && (
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              )}
              <Link to="/foods" className="nav-link">
                Foods
              </Link>
              {user !== null && user.role === "restaurant" && (
                <Link to="/sell-food" className="nav-link">
                  Sell Your Food!
                </Link>
              )}
              {user !== null && user.role === "admin" && (
                <Link to="/sell-food" className="nav-link">
                  Sell Your Food!
                </Link>
              )}
              <Link to="/profile" className="nav-link user-icon">
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

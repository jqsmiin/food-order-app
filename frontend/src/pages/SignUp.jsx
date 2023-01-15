import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import signup from "../images/signup.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState("customer");

  return (
    <section id="sign-up">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <img src={signup} alt="Sign up" />
            <div className="text-container">
              {user === "customer" ? (
                <>
                  <h3>Customer</h3>
                  <p>
                    Search for your favourite products and make an easy order!
                  </p>
                </>
              ) : (
                <>
                  <h3>Restaurant</h3>
                  <p>List your products and make easy money!</p>
                </>
              )}
            </div>
          </Col>
          <Col md={6} className="item-2">
            <h3>Sign Up!</h3>
            <form>
              {user === "customer" ? (
                <div className="form-group">
                  <label htmlFor="Name">Name:</label>
                  <input type="text" placeholder="Name" />
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="Restaurant Name">Restaurant Name:</label>
                  <input type="text" placeholder="Restaurant Name" />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="something@mail.com" />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input type="password" placeholder="******" />
              </div>
              <div className="form-group">
                <label htmlFor="Confirm Password">Confirm Password:</label>
                <input type="password" placeholder="******" />
              </div>
              <Link to="/login">Already have an account?</Link>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;

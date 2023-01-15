import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import login from "../images/login.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section id="sign-up">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <img src={login} alt="Login" />
            <div className="text-container">
              <h3>Login</h3>
              <p>
                Welcome back! In order to access your account, please fill up
                input fields.
              </p>
            </div>
          </Col>
          <Col md={6} className="item-2">
            <h3>Login!</h3>
            <form>
              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="something@mail.com" />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input type="password" placeholder="******" />
              </div>
              <Link to="/sign-up">Don't have an account?</Link>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;

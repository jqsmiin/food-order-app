import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import login1 from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isError, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Invalid credentials");
    }

    if (isSuccess) {
      toast.success("You are logged in!");
    }

    if (user) {
      navigate("/");
    }

    dispatch(reset());
  }, [dispatch, navigate, isSuccess, user, isError]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section id="sign-up">
      <Container>
        <Row>
          <Col md={12} lg={6} className="item-1">
            <img src={login1} alt="Login" />
            <div className="text-container">
              <h3>Login</h3>
              <p>
                Welcome back! In order to access your account, please fill up
                input fields.
              </p>
            </div>
          </Col>
          <Col md={12} lg={6} className="item-2">
            <h3>Login!</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input
                  id="email"
                  onChange={onChange}
                  name="email"
                  value={email}
                  type="email"
                  placeholder="something@mail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input
                  id="password"
                  onChange={onChange}
                  name="password"
                  value={password}
                  type="password"
                  placeholder="******"
                />
              </div>
              <button className="primary-btn" type="submit">
                Submit
              </button>
              <Link to="/register">Don't have an account?</Link>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;

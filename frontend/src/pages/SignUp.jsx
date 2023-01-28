import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import signup from "../images/signup.png";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function SignUp() {
  const params = useParams();
  const [type] = useState(params.user);
  const [userData, setUserData] = useState({
    name: "",
    restaurant: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, restaurant, password, password2 } = userData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("There is something wrong, try again!");
    }

    if (user) {
      navigate("/");
    }

    if (isSuccess) {
      toast.success("User created!");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, dispatch, navigate]);

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const data = {
        name: name ? name : null,
        restaurant: restaurant ? restaurant : null,
        email,
        password,
      };
      dispatch(register(data));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section id="sign-up">
      <Container>
        <Row>
          <Col md={12} lg={6} className="item-1">
            <img src={signup} alt="Sign up" />
            <div className="text-container">
              {type === "customer" ? (
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
          <Col md={12} lg={6} className="item-2">
            <h3>Sign Up!</h3>
            <form onSubmit={onSubmit}>
              {type === "customer" ? (
                <div className="form-group">
                  <label htmlFor="Name">Name:</label>
                  <input
                    name="name"
                    onChange={onChange}
                    id="name"
                    value={name}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="Restaurant Name">Restaurant Name:</label>
                  <input
                    onChange={onChange}
                    name="restaurant"
                    id="restaurant"
                    value={restaurant}
                    type="text"
                    placeholder="Restaurant Name"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input
                  onChange={onChange}
                  name="email"
                  id="email"
                  value={email}
                  type="email"
                  placeholder="something@mail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password:</label>
                <input
                  onChange={onChange}
                  name="password"
                  id="password"
                  value={password}
                  type="password"
                  placeholder="******"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Confirm Password">Confirm Password:</label>
                <input
                  onChange={onChange}
                  name="password2"
                  id="password2"
                  value={password2}
                  type="password"
                  placeholder="******"
                />
              </div>
              <button className="primary-btn" type="submit">
                Submit
              </button>
              <Link to="/login">Already have an account?</Link>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;

import breakfast from "../images/breakfast1.png";
import Footer from "./sections/Footer";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <section id="register-me">
      <div id="register">
        <div className="img-container">
          <img src={breakfast} alt="Breakfast" />
        </div>
        <div className="img">
          <img src={breakfast} alt="Breakfast" />
        </div>
        <div
          className="box box-1"
          onClick={() => navigate("/sign-up/customer")}
        >
          <h3>Register as Customer</h3>
        </div>
        <div
          className="box box-2"
          onClick={() => navigate("/sign-up/restaurant")}
        >
          <h3>Register as Restaurant</h3>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Register;

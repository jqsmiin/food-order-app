import breakfast from "../images/breakfast1.png";
import Footer from "./sections/Footer";

function Register() {
  return (
    <section id="register-me">
      <div id="register">
        <div className="img-container">
          <img src={breakfast} alt="Breakfast" />
        </div>
        <div className="img">
          <img src={breakfast} alt="Breakfast" />
        </div>
        <div className="box box-1">
          <h3>Register as User</h3>
        </div>
        <div className="box box-2">
          <h3>Register as Restaurant</h3>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Register;

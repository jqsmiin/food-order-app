import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import user from "../images/user.png";
import { BsTrash } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";

function Profile() {
  return (
    <section id="profile" className="pt-5">
      <Container>
        <div className="pageHeader">
          <h3>Your accout settings</h3>
        </div>
        <Row>
          <Col md={6}>
            <div className="profile-container">
              <h3>Profile photo</h3>
              <div className="img">
                <img src={user} alt="User" />
                <div className="buttons">
                  <button className="profile-btn">
                    <span>
                      <FiUpload />
                    </span>
                    Change photo
                  </button>
                  <button className="profile-btn">
                    <span>
                      <BsTrash />
                    </span>
                    Delete photo
                  </button>
                </div>
              </div>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  placeholder="Username"
                  value="Jasmin"
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  value="jasmin@gmail.com"
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Total Earnings:</label>
                <input type="text" placeholder="text" value="354$" disabled />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Profile;

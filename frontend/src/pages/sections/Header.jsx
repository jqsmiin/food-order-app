import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import bg3 from "../../images/bg-3.png";
import hamburger from "../../images/hamburger.png";
import bg1 from "../../images/bg-1.png";
import bg2 from "../../images/bg-2.png";

function Header() {
  return (
    <section id="header" className="pb-6">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <div className="bg-1">
              <img src={bg1} alt="bg-1" />
            </div>
            <h1>We serve the test you love!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              facilis quasi libero mollitia nam dicta rem soluta beatae magni
              corporis.
            </p>
            <Link to="/foods" className="primary-btn">
              Explore food
            </Link>
          </Col>
          <Col md={6} className="item-2">
            <div className="bg-3">
              <img src={bg3} alt="bg-3" />
            </div>
            <div className="bg-2">
              <img src={bg2} alt="bg-2" />
            </div>
            <img src={hamburger} alt="hamburger" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;

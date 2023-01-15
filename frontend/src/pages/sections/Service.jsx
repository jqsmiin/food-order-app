import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cook from "../../images/cook.png";
import { MdBookOnline } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { BsCartCheck } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";

function Service() {
  return (
    <section id="service" className="pb-6">
      <Container>
        <Row>
          <Col className="item-1">
            <div className="img-container">
              <img src={cook} alt="Chief" />
            </div>
          </Col>
          <Col className="item-2">
            <h2>We are more than multiple service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              numquam assumenda consequatur labore accusamus rem fugit sed
              iusto, molestias voluptates voluptas iste? Odit at quaerat
              nesciunt veritatis velit. Qui numquam rem harum magnam delectus.
            </p>
            <div className="items">
              <div className="item-1">
                <ul>
                  <li>
                    <span>
                      <RxCounterClockwiseClock />
                    </span>
                    24/7 Service
                  </li>
                  <li>
                    <span>
                      <MdBookOnline />
                    </span>
                    Online Order
                  </li>
                  <li>
                    <span>
                      <MdLocalDining />
                    </span>
                    Local Restaraunts
                  </li>
                </ul>
              </div>
              <div className="item-2">
                <ul>
                  <li>
                    <span>
                      <MdDeliveryDining />
                    </span>
                    Organized Delivery
                  </li>
                  <li>
                    <span>
                      <SiCodechef />
                    </span>
                    Super Chefs
                  </li>
                  <li>
                    <span>
                      <BsCartCheck />
                    </span>
                    Easy Order
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-container">
              <button className="primary-btn">Explore Food</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Service;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import food1 from "../images/food1.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function Cart() {
  return (
    <section id="cart">
      <Container>
        <div className="pageHeader pt-5">
          <h3>Summary order</h3>
        </div>
        <div className="totalPrice">
          <h3>Total Price:</h3>
          <p>$32</p>
        </div>
        <Row>
          <Col md={12}>
            <div className="price-container">
              <div className="img">
                <img src={food1} alt="Food" />
              </div>
              <div className="info">
                <h3>Pasta</h3>
                <p>$32</p>
                <button className="profile-btn">Buy</button>
              </div>
              <div className="count">
                <h3>
                  <AiOutlinePlus />
                </h3>
                <span>$32</span>
                <h3>
                  <AiOutlineMinus />
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;

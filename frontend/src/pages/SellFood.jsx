import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SellFood() {
  return (
    <section id="sell-food">
      <Container>
        <div className="pageHeader pt-5">
          <h3>Sell Your Products</h3>
        </div>
        <Row>
          <Col md={6}>
            <form>
              <div className="form-group">
                <label htmlFor="Restaurant">Restaurant:</label>
                <input
                  type="text"
                  placeholder="Restaurant"
                  defaultValue="Piccolo Mondo"
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="Product Title">Product Title:</label>
                <input
                  type="text"
                  placeholder="Product Title"
                  defaultValue="Vegetarian Pizza"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Category">Category:</label>
                <select id="category">
                  <option defaultValue="drink">Drink</option>
                  <option defaultValue="desert">Desert</option>
                  <option defaultValue="fastfood">Fast Food</option>
                  <option defaultValue="chinese food">Chinese cuisine</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Price">Price:</label>
                <input type="number" placeholder="Price" defaultValue="32" />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description:</label>
                <textarea name="description" cols="5" rows="5"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="Images">Images:</label>
                <input
                  className="formInputFile"
                  type="file"
                  placeholder="Images"
                  multiple
                />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SellFood;

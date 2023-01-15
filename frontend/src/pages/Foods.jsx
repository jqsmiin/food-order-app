import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";

function Foods() {
  const data = [
    {
      id: 1,
      img: food1,
      title: "Pasta",
      paragraph:
        " Pasta is a type of food typically made from an unleavened dough.",
      price: "$35.00",
    },
    {
      id: 2,
      img: food2,
      title: "Pasta",
      paragraph:
        " Pasta is a type of food typically made from an unleavened dough.",
      price: "$35.00",
    },
    {
      id: 3,
      img: food3,
      title: "Pizza",
      paragraph:
        " Pizza is a type of food typically made from an unleavened dough.",
      price: "$35.00",
    },
    {
      id: 4,
      img: food4,
      title: "Chicken",
      paragraph:
        " Chicken is a type of food typically made from an unleavened dough.",
      price: "$35.00",
    },
  ];
  return (
    <section id="foods" className="pt-5 pb-6">
      <Container>
        <div className="pageHeader">
          <h3>All available food!</h3>
        </div>
        <Row>
          {data.map((food) => (
            <Col md={4} key={food.id} className="item mb-4">
              <div className="food-container">
                <div className="img-container d-flex justify-content-center">
                  <img src={food.img} alt="Dish" />
                </div>
                <h3 className="food-title">{food.title}</h3>
                <p>{food.paragraph}</p>
                <div className="price">
                  <h3>{food.price}</h3>
                  <button className="secondary-btn">Add To Cart</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Foods;

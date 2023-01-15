import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";

function Food() {
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
      title: "Pasta",
      paragraph:
        " Pasta is a type of food typically made from an unleavened dough.",
      price: "$35.00",
    },
    {
      id: 4,
      img: food4,
      title: "Pasta",
      paragraph:
        " Pasta is a type of food typically made from an unleavened dough.",
      price: "$35.00",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section id="food" className="pb-6">
      <Container>
        <div className="pageHeader">
          <h3>Popular food</h3>
        </div>
        <Slider {...settings}>
          {data.map((food) => {
            return (
              <div className="food-container" key={food.id}>
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
            );
          })}
        </Slider>
      </Container>
    </section>
  );
}

export default Food;

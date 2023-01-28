import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getAllFood, reset } from "../features/food/foodSlice";
import Spinner from "../components/Spinner";

function Foods() {
  const dispatch = useDispatch();
  const { food, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.food
  );

  useEffect(() => {
    dispatch(getAllFood());
    if (isError) {
      console.log(message);
      toast.error("Something went wrong!");
    }
    if (isSuccess) {
      dispatch(reset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section id="foods" className="pt-5 pb-6">
      <Container>
        <div className="pageHeader">
          <h3>All available food!</h3>
        </div>
        <Row>
          {food &&
            food.length > 0 &&
            food.map((food) => (
              <Col lg={4} md={6} key={food._id} className="item mb-4">
                <div className="food-container">
                  <div className="img-wrapper">
                    <div className="img-container d-flex justify-content-center">
                      <img
                        src={`http://localhost:5000/static/${food.images}`}
                        alt="Dish"
                      />
                    </div>
                  </div>
                  <h3 className="food-title">{food.productTitle}</h3>
                  <p>{food.description}</p>
                  <div className="price">
                    <h3>$ {food.price}</h3>
                    <Link to={`/food/${food._id}`} className="secondary-btn">
                      View More
                    </Link>
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

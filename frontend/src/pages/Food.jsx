import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getFood, getSimilarFood, reset } from "../features/food/foodSlice";
import { addToCart } from "../features/cart/cartSlice";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodCarousel from "../components/FoodCarousel";

function Food() {
  const params = useParams();
  const dispatch = useDispatch();
  const { food, similarFood, isError, isSuccess, message, isLoading } =
    useSelector((state) => state.food);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getFood(params.id));
    if (isError) {
      console.log(message);
      toast.error("Something went wrong!");
    }
    if (isSuccess) {
      dispatch(reset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (null === food) {
      return;
    }
    dispatch(getSimilarFood(food.category));
  }, [food, dispatch]);

  const addFood = () => {
    dispatch(addToCart(food._id));
    toast.success("Food added to cart!");
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section id="foodPage" className="pt-5 pb-4">
      <Container>
        <div className="pageHeader">
          <h3>{food?.productTitle}</h3>
        </div>
        <Row>
          <Col md={12}>
            <div className="content">
              <div className="photo-container">
                <img
                  src={food?.images && `/static/${food?.images}`}
                  alt="Dish"
                />
              </div>
              <div className="text-container">
                <h3>{food?.productTitle}</h3>
                <h4 className="price">
                  <span>Price :</span> ${food?.price}
                </h4>
                <h4 className="category">Category : {food?.category}</h4>
                <p className="desc">
                  <span>Description :</span> {food?.description}
                </p>
                {user?.role === "restaurant" || !user ? (
                  <button className="primary-btn" disabled>
                    Add to cart
                  </button>
                ) : (
                  <button onClick={addFood} className="primary-btn">
                    Add to cart
                  </button>
                )}
              </div>
            </div>

            <hr />

            <div className="pageHeader">
              <h3>You might also like :</h3>
              <FoodCarousel foods={similarFood} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Food;

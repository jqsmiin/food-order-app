import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { reset, createFood } from "../features/food/foodSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function SellFood() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.food
  );
  const [data, setData] = useState({
    productTitle: "",
    category: "drink",
    images: "default.jpg",
    description: "",
    price: "",
  });

  const { productTitle, category, description, price, images } = data;

  useEffect(() => {
    if (isError) {
      console.log(message);
      toast.error("Something went wrong!");
    }
    if (isSuccess) {
      toast.success("Food Created!");
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch, message]);

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.files) {
      setData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0],
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("images", images);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("productTitle", productTitle);

    dispatch(createFood(formData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section id="sell-food">
      <Container>
        <div className="pageHeader pt-5">
          <h3>Sell Your Products</h3>
        </div>
        <Row>
          <Col md={6}>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="Restaurant">Restaurant:</label>
                <input
                  type="text"
                  placeholder="Restaurant"
                  defaultValue={user.name}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="Product Title">Product Title:</label>
                <input
                  type="text"
                  placeholder="Product Title"
                  name="productTitle"
                  value={productTitle}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Category">Category:</label>
                <select
                  name="category"
                  value={category}
                  onChange={onChange}
                  id="category"
                >
                  <option value="drink">Drink</option>
                  <option value="desert">Desert</option>
                  <option value="fast food">Fast Food</option>
                  <option value="chinese cuisine">Chinese cuisine</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="Price">Price:</label>
                <input
                  name="price"
                  value={price}
                  onChange={onChange}
                  type="number"
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description:</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={onChange}
                  cols="5"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="Images">Images:</label>
                <input
                  className="formInputFile"
                  type="file"
                  placeholder="Images"
                  name="images"
                  multiple
                  onChange={onChange}
                />
              </div>
              <button className="primary-btn" type="submit">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SellFood;

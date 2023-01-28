import Col from "react-bootstrap/Col";
import { BsTrashFill } from "react-icons/bs";
import { useState } from "react";
import { removeFromCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ cart }) {
  const url = "http://localhost:5000/static";
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(cart?.price);
  const dispatch = useDispatch();

  const addSum = (e) => {
    const pr = e.target.parentElement.previousElementSibling.children[1].id;
    setValue(value + 1);
    const val = (value + 1) * pr;
    setPrice(val);
  };

  const reduceSum = (e) => {
    const pr = e.target.parentElement.previousElementSibling.children[1].id;

    if (value > 1) {
      setValue(value - 1);
      const val = (value - 1) * pr;
      setPrice(val);
    }
  };

  const removeCart = () => {
    const id = cart?._id;
    dispatch(removeFromCart(id));
    window.location.reload();
  };

  return (
    <Col className="item-wrapper" md={12} key={cart?._id}>
      <div className="price-container">
        <div className="delete-icon" onClick={removeCart}>
          <BsTrashFill />
        </div>
        <div className="img">
          <img src={`${url}/${cart?.images}`} alt="Food" />
        </div>
        <div className="info">
          <h3>{cart?.productTitle}</h3>
          <p id={cart?.price}> $ {price}</p>
          <button className="profile-btn">Buy</button>
        </div>
        <div className="count">
          <h3 onClick={addSum}>+</h3>
          <span>{value}</span>
          <h3 onClick={reduceSum}>-</h3>
        </div>
      </div>
    </Col>
  );
}

export default CartItem;

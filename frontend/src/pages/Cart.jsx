import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getCartItems, reset } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import CartItem from "../components/CartItem";

function Cart() {
  const dispatch = useDispatch();
  const { cart, isLoading, isError } = useSelector((state) => state.cart);

  // const getItems = () =>{
  //   dispatch(getCartItems())
  //   setTimeout(() =>{
  //     setData(cart ? cart.food : '')
  //   }, 1000)
  // }
  // getItems()
  // const sumPrice = (price) =>{
  //   totalPrice.push(total)
  //   const add = totalPrice.reduce((partialSum, a) => partialSum + a, 0);
  //   console.log(add)
  // }

  useEffect(() => {
    dispatch(reset());
    dispatch(getCartItems());
    if (isError) {
      console.log(isError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() =>{
  //   if(!isLoading & cart !== null){
  //     cart.map((item) =>{
  //       console.log(item.price)
  //       setPrice(item.price)
  //     })
  //   }
  // }, [cart])

  if (isLoading || cart === null) {
    return <Spinner />;
  }

  // if(!isLoading){
  //   cart.map((item) =>{
  //     return setTotal(item.price)
  //   })
  //   sumPrice()
  // }

  return (
    <section id="cart" className="mb-6">
      <Container>
        <div className="pageHeader pt-5">
          <h3>Summary order</h3>
        </div>
        <Row>
          {cart && cart.map((cart, i) => <CartItem key={i} cart={cart} />)}
          {cart.length > 0 ? (
            <div className="button-container text-center mt-3">
              <button className="primary-btn">Buy All</button>
            </div>
          ) : (
            <h3>There is no items in cart!</h3>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Cart;

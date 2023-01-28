import { getAllFood, reset } from "../../features/food/foodSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import FoodCarousel from "../../components/FoodCarousel";
import { toast } from "react-toastify";

function Food() {
  const dispatch = useDispatch()
  const {food, isError, isSuccess, message, isLoading} = useSelector((state) => state.food)

  useEffect(() =>{
    dispatch(getAllFood(9))
    if(isError){
      console.log(message)
      toast.error('Something went wrong!')
    }
    if(isSuccess){
      dispatch(reset())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  

  if(isLoading){
    return <Spinner />
  }
  return (
    <section id="food-section">
      <FoodCarousel foods={food} />
    </section>
  );
}

export default Food;

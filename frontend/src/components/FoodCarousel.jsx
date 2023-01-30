import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import { BsTrashFill } from "react-icons/bs";
import { deleteMyFood } from "../features/food/foodSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function FoodCarousel({ foods, icon }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let userId = user?._id;
  let foodId = "";
  let userObj = {
    userId,
    foodId,
  };

  const removeItem = (e) => {
    if (e.target.className === "delete-icon") {
      deleteItem(e.target.id);
    } else if (e.target.parentElement.className === "delete-icon") {
      deleteItem(e.target.parentElement.id);
    } else if (
      e.target.parentElement.parentElement.className === "delete-icon"
    ) {
      deleteItem(e.target.parentElement.parentElement.id);
    }
  };

  const deleteItem = (id) => {
    userObj.foodId = id;
    dispatch(deleteMyFood(userObj));
    toast.success("Food deleted!");
    window.location.reload();
  };
  return (
    <section id="food" className="pb-6">
      <Container>
        {foods?.length > 0 ? (
          <Slider {...settings}>
            {foods?.map((food) => {
              return (
                <div className="food-container" key={food?._id}>
                  {icon && (
                    <div
                      className="delete-icon"
                      id={food?._id}
                      onClick={removeItem}
                    >
                      <BsTrashFill />
                    </div>
                  )}
                  <div className="img-wrapper">
                    <div className="img-container d-flex justify-content-center">
                      <img src={`/static/${food?.images}`} alt="dish" />
                    </div>
                  </div>
                  <h3 className="food-title">{food?.productTitle}</h3>
                  <p>{food?.description}</p>
                  <div className="price">
                    <h3>$ {food?.price}</h3>
                    <a href={`/food/${food?._id}`} className="secondary-btn">
                      View More
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <h4>There is no similar foods!</h4>
        )}
      </Container>
    </section>
  );
}

export default FoodCarousel;

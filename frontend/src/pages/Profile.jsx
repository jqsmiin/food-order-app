import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiUpload } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { getMe, updateMe } from "../features/auth/authSlice";
import { getMyFood } from "../features/food/foodSlice";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import FoodCarousel from "../components/FoodCarousel";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { myFood } = useSelector((state) => state.food);
  const [formData, setFormData] = useState({
    profilePhoto: "",
    name: user.name,
    email: user.email,
  });

  const { name, email, profilePhoto } = formData;

  const id = user._id;

  useEffect(() => {
    try {
      dispatch(getMe(id));
    } catch (error) {
      console.log(error);
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (null === user) {
      return;
    }
    dispatch(getMyFood());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = async (e) => {
    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);

    //  const res = await axios.put(`http://localhost:5000/api/auth/${user._id}`, formData, { headers: {'Content-Type': 'multipart/form-data'}, withCredentials : true})
    //   window.location.reload()

    //console.log(res.data)
    dispatch(updateMe(formData));
    dispatch(getMe(user._id));
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    Cookie.remove("access_token");
  };

  const onChange = (e) => {
    if (e.target.value) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0],
      }));
    }
  };

  return (
    <section id="profile" className="pt-5">
      <Container>
        <div className="pageHeader">
          <h3>Your accout settings</h3>
        </div>
        <Row>
          <div className="logout">
            <button className="primary-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
          <Col md={6}>
            <div className="profile-container">
              <h3>Profile photo</h3>
              <div className="img">
                <img
                  src={`http://localhost:5000/static/${user.profilePhoto}`}
                  alt="User"
                />
                <div className="buttons">
                  <div className="change-photo">
                    <h3>
                      Change Photo
                      <span>
                        <FiUpload />
                      </span>
                    </h3>
                    <button className="profile-btn">
                      <input
                        className="formInputFile"
                        type="file"
                        name="profilePhoto"
                        onChange={onChange}
                      />
                    </button>
                  </div>
                  <div className="button-container">
                    <button onClick={onClick} className="primary-btn">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div className="form-group">
                {user.role === "restaurant" ? (
                  <>
                    <label htmlFor="Restaurant">Restaurant:</label>
                    <input
                      type="text"
                      placeholder="Restaurant"
                      value={name}
                      onChange={onChange}
                      disabled
                    />
                  </>
                ) : (
                  <>
                    <label htmlFor="Name">Name:</label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={onChange}
                      disabled
                    />
                  </>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={onChange}
                  disabled
                />
              </div>
            </form>
          </Col>
        </Row>
        {user.role === "restaurant" ? (
          <>
            <hr />
            <div className="pageHeader">
              <h3>Your food: </h3>
            </div>
            <FoodCarousel foods={myFood} icon={true} />{" "}
          </>
        ) : (
          ""
        )}
      </Container>
    </section>
  );
}

export default Profile;

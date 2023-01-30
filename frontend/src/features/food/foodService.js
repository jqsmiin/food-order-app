import axios from "axios";

const API_URL = "/api/food";

const createFood = async (foodData) => {
  const res = await axios.post(API_URL, foodData, {
    withCredentials: true,
  });

  return res.data.food;
};

const getAllFood = async (limit) => {
  const lmt = limit || 300
  const res = await axios.get(`${API_URL}/all/food?limit=${lmt}`);

  return res.data.food;
};

const getFood = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);

  return res.data.food;
};

const getSimilarFood = async (category) => {
  const res = await axios.get(`${API_URL}/similar/food?category=${category}`);

  return res.data.food;
};

const getMyFood = async () => {
  const res = await axios.get('/api/food', {
    withCredentials: true,
  });

  return res.data.usersFood;
};

const deleteMyFood = async (userId, foodId) => {
  console.log(userId, foodId)
  const res = await axios.delete(`${API_URL}/${userId}/${foodId}`, {
    withCredentials: true,
  });

  return res.data;
};



const foodService = {
  createFood,
  getAllFood,
  getFood,
  getSimilarFood,
  getMyFood,
  deleteMyFood
};

export default foodService;

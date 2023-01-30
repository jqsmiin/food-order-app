import axios from "axios";

//const API_URL = "http://localhost:5000/api/auth";

const register = async (userData) => {
  const res = await axios.post("/api/auth", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  return res.data;
};
const login = async (userData) => {
  const res = await axios.post("/api/auth/login", userData, {
    withCredentials: true,
  });

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const getMe = async (userId) => {
  const res = await axios.get(`/api/auth/${userId}`, {
    withCredentials: true,
  });

  return res.data.user;
};

const updateMe = async (userId, formData) => {
  if (userId && formData) {
    const res = await axios.put(`/api/auth/${userId}`,
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true
      }
    );

    return res.data.user;
  }
};

const authService = {
  register,
  login,
  getMe,
  updateMe,
};

export default authService;

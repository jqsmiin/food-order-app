import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

const addToCart = async (foodId) => {
    const data = {}
    const res = await axios.put(`${API_URL}/${foodId}`, data,
        {
            withCredentials: true
        }
    );

    console.log(res.data)

    return res.data;
};

const getCartItems = async () => {

    const res = await axios.get(`${API_URL}`,
        {
            withCredentials: true
        }
    );

    return res.data.food;
};

const removeFromCart = async (foodId) => {
    const data = {}
    const res = await axios.put(`${API_URL}/cartList/${foodId}`, data,
        {
            withCredentials: true
        }
    );

    console.log(res.data)

    return res.data;
};

const cartService = {
    addToCart,
    getCartItems,
    removeFromCart
};

export default cartService;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
    cart: null,
    totalPrice: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
};

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (foodId, thunkAPI) => {
        try {
            return await cartService.addToCart(foodId);
        } catch (error) {
            console.log(error)

            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getCartItems = createAsyncThunk(
    "cart/getCartItems",
    async (thunkAPI) => {
        try {
            return await cartService.getCartItems();
        } catch (error) {
            console.log(error)

            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async (foodId, thunkAPI) => {
        try {
            return await cartService.removeFromCart(foodId);
        } catch (error) {
            console.log(error)

            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addToCart.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.cart = action.payload
                state.isSuccess = true;
                state.isLoading = false;
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(removeFromCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(removeFromCart.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;

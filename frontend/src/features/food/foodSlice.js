import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import foodService from "./foodService";

const initialState = {
  food: null,
  similarFood: null,
  myFood: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createFood = createAsyncThunk(
  "food/create",
  async (food, thunkAPI) => {
    try {
      return await foodService.createFood(food);
    } catch (error) {
      const msg = error.message || error.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getAllFood = createAsyncThunk(
  "food/getAll",
  async (limit, thunkAPI) => {
    try {
      return await foodService.getAllFood(limit);
    } catch (error) {
      const msg = error;
      console.log(error)

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getFood = createAsyncThunk(
  "food/getFood",
  async (id, thunkAPI) => {
    try {
      return await foodService.getFood(id);
    } catch (error) {
      const msg = error;
      console.log(error)
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getSimilarFood = createAsyncThunk(
  "food/getSimilarFood",
  async (category, thunkAPI) => {
    try {
      return await foodService.getSimilarFood(category);
    } catch (error) {
      const msg = error;
      console.log(error)
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getMyFood = createAsyncThunk(
  "food/getMyFood",
  async (thunkAPI) => {
    try {
      return await foodService.getMyFood();
    } catch (error) {
      const msg = error;
      console.log(error)
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const deleteMyFood = createAsyncThunk(
  "food/deleteMyFood",
  async (user, thunkAPI) => {
    try {
      const userId = user.userId
      const foodId = user.foodId
      return await foodService.deleteMyFood(userId, foodId);
    } catch (error) {
      const msg = error;
      console.log(error)
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    reset: (state) => {
      state.food = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.food = action.payload;
      })
      .addCase(createFood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.food = null;
      })
      .addCase(getAllFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.food = action.payload;
      })
      .addCase(getAllFood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.food = null;
      })
      .addCase(getFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.food = action.payload;
      })
      .addCase(getFood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.food = null;
      })
      .addCase(getSimilarFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSimilarFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.similarFood = action.payload;
      })
      .addCase(getSimilarFood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.similarFood = null;
      })
      .addCase(getMyFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myFood = action.payload;
      })
      .addCase(getMyFood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.myFood = null;
      })
      .addCase(deleteMyFood.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMyFood.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteMyFood.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export const { reset } = foodSlice.actions;
export default foodSlice.reducer;

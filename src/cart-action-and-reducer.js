import UtilApi from "./UtilApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getTotal = async () => {
  try {
    const token = UtilApi.getToken();
    const result = await UtilApi.getCartItemsNumber(token);
    console.log(result);
    return result;
  } catch (e) {
    return 0;
  }
};

export const addToCart = createAsyncThunk("cart/addToCart", async () => {
  const result = await getTotal();
  return result;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItems: await getTotal(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.totalItems = action.payload;
    });
  },
});

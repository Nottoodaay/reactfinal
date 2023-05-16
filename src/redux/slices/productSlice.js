import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/products", {product});
      return data;
    } catch (error) {
      return rejectWithValue("could not add product");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;

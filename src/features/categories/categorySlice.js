// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { BASE_URL } from "../../utils/constants";
//
//
// export const getCategory = createAsyncThunk(
//   "category/getCategory",
//   async (category, thunkAPI) => {
//     try {
//       const res = await axios(`https://fakestoreapi.com/products/category/${category}`);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );
//
//
//
// const categorySlice = createSlice({
//   name: "category",
//   initialState: {
//     list: [],
//     isLoading: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getCategory.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getCategory.fulfilled, (state, { payload }) => {
//       state.list = payload;
//       state.isLoading = false;
//     });
//     builder.addCase(getCategory.rejected, (state) => {
//       state.isLoading = false;
//     });
//   },
// });
//
// export default categorySlice.reducer;

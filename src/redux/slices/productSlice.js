import { productData } from "@/constant/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: productData,
  singleProduct: '',
  error: "",
  status: "",
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    productList(state, action) {
      const data = state.productList;
      state.productList = [...data, action.payload];
    },
    getProduct(state, action) {
      const data = state.productList;
      const product = data.find((product) => product.id === parseInt(action.payload))
      state.singleProduct = product;
    },
  },
});
export const { productList, getProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "src/redux/accountSlice";

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./redux/accountSlice";

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});

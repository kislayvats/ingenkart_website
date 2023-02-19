import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./currentUserSlice";
import drawerReducer from "./navDrawerSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    drawerStatus: drawerReducer,
  },
});

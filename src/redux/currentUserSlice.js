import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  phone: "",
  name: "",
  token: "",
  categories: [],
  role: "",
  DOB: "",
  uid: "",
  _id: "",
  profilePicture: {
    reference: "",
    url: "",
  },
  isLoading: true,
};

// calling user data ayncronus way

const currentUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    noUser: (state) => {
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state._id = "";
      state.email = "";
      state.phone = "";
      state.DOB = "";
      state.token = "";
      state.profilePicture = {
        reference: "",
        url: "",
      };
      state.categories = [];
      state.name = "";
      state.role = "";
      state.uid = "";
      state.isLoading = false;
    },
    login: (state, { payload }) => {
      state._id = payload._id;
      state.email = payload.email;
      state.phone = payload.phone;
      state.DOB = payload.DOB;
      state.token = payload.token;
      state.profilePicture = payload.profilePicture;
      state.categories = payload.categories;
      state.name = payload.name;
      state.role = payload.role;
      state.uid = payload.uid;
      state.isLoading = false;
    },
  },
});

export const { login, logoutUser, noUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerVisible: false,
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Jobs",
      url: "/jobs",
    },
    {
      name: "Events",
      url: "/events",
    },
  ],
};

const NavbarSlice = createSlice({
  name: "Navbar",
  initialState,
  reducers: {
    setNavbarDrawerVisible: (state, action) => {
      state.drawerVisible = action.payload;
    },
  },
});

export const { setNavbarDrawerVisible } = NavbarSlice.actions;

export default NavbarSlice.reducer;

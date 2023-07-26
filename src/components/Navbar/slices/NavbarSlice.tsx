import { createSlice } from "@reduxjs/toolkit";
import {
  HiArrowLeftOnRectangle,
  HiCog6Tooth,
  HiQuestionMarkCircle,
  HiUserCircle,
} from "react-icons/hi2";

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
  menu: {
    visible: false,
    items: [
      {
        url: "/profile/",
        icon: <HiUserCircle />,
        text: "My Profile",
      },
      {
        url: "/profile/interviews",
        icon: <HiCog6Tooth />,
        text: "Interview",
      },
      {
        url: "/profile/submitted-jobs",
        icon: <HiQuestionMarkCircle />,
        text: "Submitted Jobs",
      },
      {
        url: "/logout",
        icon: <HiArrowLeftOnRectangle />,
        text: "Log out",
      },
    ],
  },
};

const NavbarSlice = createSlice({
  name: "Navbar",
  initialState,
  reducers: {
    setNavbarDrawerVisible: (state, action) => {
      state.drawerVisible = action.payload;
    },
    setNavbarMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { setNavbarDrawerVisible, setNavbarMenu } = NavbarSlice.actions;

export default NavbarSlice.reducer;

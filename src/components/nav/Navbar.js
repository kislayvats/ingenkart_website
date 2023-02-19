import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ImageList } from "../../config/ImageList";
import { toggleNavDrawer } from "../../redux/navDrawerSlice";
import useViewport from "../../viewport/useViewport";
import { NavWrapper } from "./Style";
import Drawer from "@mui/material/Drawer";
import SideNav from "./SideNav";

const Navbar = () => {
  const { isMobile } = useViewport();
  const drawerStatus = useSelector((state) => state.drawerStatus);
  const dispatch = useDispatch();
  const closeDrawer = () => {
    dispatch(toggleNavDrawer({ isOpen: false }));
  };
  const openDrawer = () => {
    dispatch(toggleNavDrawer({ isOpen: true }));
  };
  return (
    <>
      <Drawer anchor="left" open={drawerStatus.isOpen} onClose={closeDrawer}>
        <SideNav />
      </Drawer>

      <NavWrapper className="flexBetween" isMobile={isMobile}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeClassName" : "inactiveClassName"
          }>
          <img
            src={ImageList.IngenKartLogo}
            loading="lazy"
            alt="logo"
            className="logo_image"
          />
        </NavLink>
        {!isMobile && (
          <div className="flexBetween">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "activeClassName fontPoppins"
                  : "inactiveClassName fontPoppins"
              }>
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "activeClassName fontPoppins"
                  : "inactiveClassName fontPoppins"
              }>
              Contact
            </NavLink>
            <NavLink
              to="/influencer"
              className={({ isActive }) =>
                isActive
                  ? "activeClassName fontPoppins"
                  : "inactiveClassName fontPoppins"
              }>
              Influencers
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "activeClassName fontPoppins"
                  : "inactiveClassName fontPoppins"
              }>
              FAQ
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive
                  ? "activeClassName fontPoppins downloadButton"
                  : "inactiveClassName fontPoppins downloadButton"
              }>
              Download
            </NavLink>
          </div>
        )}
        {isMobile && (
          <NavLink
            to="/download"
            className={({ isActive }) =>
              isActive
                ? "activeClassName fontPoppins downloadButtonMobile"
                : "inactiveClassName fontPoppins downloadButtonMobile"
            }>
            Download
          </NavLink>
        )}
        {isMobile && (
          <img
            src={ImageList.Hamburger_Icon}
            alt="hamburger"
            className="hamburger"
            onClick={openDrawer}
          />
        )}
      </NavWrapper>
    </>
  );
};

export default Navbar;

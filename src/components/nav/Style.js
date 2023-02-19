import styled from "styled-components";
import { Colors } from "../../config/Colors";
import { BorderRadius } from "../../config/Values";

export const NavWrapper = styled.div`
  width: ${(prop) => (prop.isMobile ? "95%" : "80%")};
  height: 4.3rem;
  background: rgba(243, 243, 243, 0.21) !important;
  backdrop-filter: blur(20.5px) !important;
  border-radius: 0 0 26px 26px;
  z-index: 999;
  position: fixed;
  top: 0;
  padding: 0 ${(prop) => (prop.isMobile ? "0rem" : "1rem")};
  border: 1px solid #e1e1e1;
  .logo_image {
    width: ${(prop) => (prop.isMobile ? "8rem" : "7.525rem")};
    height: ${(prop) => (prop.isMobile ? "3rem" : "2.55rem")};
    object-fit: cover;
    cursor: pointer;
  }
  .activeClassName {
    font-size: 0.875rem;
    text-decoration: none;
    font-weight: 400 !important;
    color: ${Colors.tableText};
    margin: 0 1rem;
  }
  .inactiveClassName {
    font-weight: 300;
    font-size: 0.875rem;
    color: ${Colors.black};
    margin: 0 1rem;
    text-decoration: none;
  }
  .downloadButton {
    background-color: ${Colors.black};
    border-radius: ${BorderRadius.smallRadius};
    color: ${Colors.white};
    padding: 0.5rem 1.2rem;
  }
  .downloadButtonMobile {
    background-color: ${Colors.white};
    border-radius: ${BorderRadius.smallRadius};
    color: ${Colors.black};
    border: 2px solid ${Colors.black};
    padding: 0.5rem 1.2rem;
  }
  .hamburger {
    width: 1.4rem;
    height: 1.14rem;
    margin-right: 0.8rem;
  }
`;

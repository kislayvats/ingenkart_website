import styled from "styled-components";
import { ImageList } from "../../../config/ImageList";

export const MobileWrapper = styled.div`
  background-color: red;
  width: 37rem;
  background: url(${ImageList.Ellipse_Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StarryWrapper = styled.div`
  position: relative;
  width: 100%;
  .star1 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "0.3rem" : "4rem")};
    left: 4rem;
    width: 1.6rem;
    aspect-ratio: 1;
  }
  .star2 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "22rem" : "18rem")};
    left: ${(prop) => (prop.isMobile ? "4rem" : "15rem")};
    width: 1.6rem;
    aspect-ratio: 1;
  }
  .star3 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "40rem" : "33rem")};
    left: ${(prop) => (prop.isMobile ? "15rem" : "24rem")};
    width: 0.7rem;
    aspect-ratio: 1;
  }
  .star4 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "42rem" : "38rem")};
    left: ${(prop) => (prop.isMobile ? "3rem" : "6rem")};
    width: 1.6rem;
    aspect-ratio: 1;
  }
  .star5 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "19rem" : "10rem")};
    right: 2rem;
    width: 1.6rem;
    aspect-ratio: 1;
  }
  .star6 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "24rem" : "18rem")};
    right: 6rem;
    width: 1rem;
    aspect-ratio: 1;
  }
  .star7 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "35rem" : "19rem")};
    right: ${(prop) => (prop.isMobile ? "1rem" : "27rem")};
    width: 0.7rem;
    aspect-ratio: 1;
  }
  .star8 {
    position: absolute;
    top: ${(prop) => (prop.isMobile ? "45rem" : "33rem")};
    right: ${(prop) => (prop.isMobile ? "12rem" : "18rem")};
    width: 1.6rem;
    aspect-ratio: 1;
  }
`;

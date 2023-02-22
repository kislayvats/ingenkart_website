import styled from "styled-components";
import { Colors } from "../../config/Colors";
import { BorderRadius, FontType, Gradient } from "../../config/Values";

export const FooterWrapper = styled.div`
  max-width: 100%;
  min-height: 60vh;
  background-color: ${Colors.black};

  padding: ${(prop) =>
    prop.isMobile ? "5rem 2rem 7rem 2rem" : "5rem 10rem 2rem 10rem"};
  .footer_logo {
    width: auto;
    height: 2.424rem;
  }
  .ready_heading {
    font-size: ${(prop) => (prop.isMobile ? "1.2rem" : "1.375rem")};
    font-weight: 400;
    color: ${Colors.white};
  }
  .getStarted_button {
    background: ${Gradient.primaryRadial};
    border-radius: ${BorderRadius.mediumRadius};
    text-transform: capitalize;
    padding: ${(prop) => (prop.isMobile ? "0.5rem 1rem" : "0.5rem 2rem")};
    font-weight: 700;
    color: ${Colors.black};
    font-family: ${FontType.dmSans}, sans-serif !important;
  }
  .divider {
    width: 100%;
    height: 1px;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.1;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  .subscribe_text {
    color: ${Colors.white};
    font-weight: 400;
    font-size: ${(prop) => (prop.isMobile ? "1.2rem" : "1.375rem")};
  }
  .input_email_container {
    /* background-color: red; */
    padding: 0;
    height: 3.2rem;
    display: flex;
    overflow: hidden;
  }
  .input_email {
    border-radius: 8px 8px 0px 0px;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 2.78rem;
    background-color: transparent;
    width: ${(prop) => (prop.isMobile ? "100%" : "50%")};
    color: ${Colors.white};
  }
  .input_email:focus {
    outline: none;
  }
  .submit_button {
    background: ${Gradient.primaryRadial};
    border-radius: 8px 8px 0px 0px;
    width: 3rem;
    height: 3rem;
    border: none;
    cursor: pointer;
  }
  .submit_button:focus {
    outline: none;
  }
  .content_heading {
    background: ${Gradient.primaryRadial};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.12rem;
  }
  .activeClassName {
    font-size: 0.875rem;
    text-decoration: none;
    font-weight: 400 !important;
    margin: 1rem 0;
    color: ${Colors.tableText};
  }
  .inactiveClassName {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${Colors.white};
    text-decoration: none;
    margin: 0.7rem 0;
  }
  .last_container {
    flex-wrap: wrap;
  }
  .social_icon {
    width: auto;
    height: 1.24rem;
  }
  .option_container {
    margin-top: 2rem;
  }
  .developed_by_box {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
    position: relative;
    bottom: 0;
  }
  .developed_by_text {
    font-weight: 400;
    font-size: 0.87rem;
  }
  .bili_link {
    text-decoration: none;
    margin-left: 4px;
    color: ${Colors.white};
    font-weight: 400;
  }
`;

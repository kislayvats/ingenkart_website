import styled from "styled-components";
import { Colors } from "../../config/Colors";
import { BorderRadius } from "../../config/Values";

export const HomeWrapper = styled.div`
  flex-direction: column;
  position: relative;
  top: 4.3rem;
  min-height: 40vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff !important;
  .landing_heading {
    font-weight: 400;
  }
  .landing_heading2 {
    font-weight: 600;
    text-align: center;
  }
  .exclamation_mark {
    color: ${Colors.faintedOrange};
  }
  .download_button {
    border-radius: ${BorderRadius.mediumRadius};
    background: radial-gradient(
      186.72% 350.58% at -77.44% 50%,
      #fc84e2 0%,
      #ffdf34 100%
    );
    box-shadow: 0px 20px 17px -13px rgba(255, 196, 106, 0.48);
    width: 8.75rem;
    height: 2.313rem;
    padding: 0.3rem 1rem;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .download_button:focus {
    outline: none;
    border: none;
  }
  .download_button:hover {
    outline: 3px solid ${Colors.white80};
    outline-offset: -2px;
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
  .download_text {
    font-weight: 300;
  }
  .store_icon {
    width: 0.75rem;
    height: 0.802rem;
  }
  .mobile_banner {
    width: 95%;
    height: 20rem;
  }
`;

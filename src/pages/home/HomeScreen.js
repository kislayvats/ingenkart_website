import React from "react";
import { HomeWrapper } from "./HomeStyle";
import MobileCard from "../../components/card/home/MobileCard";
import { Typography } from "@mui/material";
import { ImageList } from "../../config/ImageList";
import StarryVectors from "../../components/card/home/StarryVectors";
import useViewport from "../../viewport/useViewport";

const HomeScreen = () => {
  const { isMobile } = useViewport();
  return (
    <HomeWrapper className="flexCenter mb3" isMobile={isMobile}>
      <StarryVectors />
      {/* heading */}
      <Typography
        variant={isMobile ? "h4" : "h3"}
        className="landing_heading fontLato mt1">
        Generate engagement
      </Typography>
      <Typography variant="h2" className="landing_heading2 fontLato">
        by India’s top Influencers<span className="exclamation_mark">!</span>
      </Typography>
      {/* download button */}
      <div className="download_button flexAround mt2">
        <Typography className="download_text">Download</Typography>
        <img
          src={ImageList.PlayStore_Icon}
          alt="icon"
          className="store_icon"
          style={{ borderRight: "1px solid grey", paddingRight: 10 }}
        />
        <img src={ImageList.AppStore_Icon} alt="icon" className="store_icon" />
      </div>
      {/* 3 mobiles */}
      {isMobile ? (
        <img
          src={ImageList.Mobile_Landing}
          alt="banner"
          className="mobile_banner"
        />
      ) : (
        <MobileCard />
      )}
      {/* ============================================================== */}
      {/* =================SECOND DIV=================================== */}
      {/* ============================================================== */}
    </HomeWrapper>
  );
};

export default HomeScreen;

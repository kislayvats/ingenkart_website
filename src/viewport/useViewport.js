import React from "react";
import { ViewportContext } from "./index";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isMobile = 700 > width;
  const isTablet = 1150 > width;
  const isMidrange = 950 > width;

  return { width, height, isMobile, isTablet, isMidrange };
};

export default useViewport;

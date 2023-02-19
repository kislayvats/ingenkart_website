import Aos from "aos";
import React, { useEffect } from "react";
import { ImageList } from "../../../config/ImageList";
import useViewport from "../../../viewport/useViewport";
import { StarryWrapper } from "./Style";

const StarryVectors = () => {
  const { isMobile } = useViewport();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StarryWrapper isMobile={isMobile}>
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_1}
        className="star1"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1300"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_2}
        className="star2"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1300"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_3}
        className="star3"
        data-aos="zoom-in"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_4}
        className="star4"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_5}
        className="star5"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1300"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_6}
        className="star6"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1300"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_7}
        className="star7"
        data-aos="zoom-in"
        data-aos-duration="1300"
        loading="lazy"
      />
      <img
        alt="design vectors"
        src={ImageList.Starry_Vector_8}
        className="star8"
        loading="lazy"
      />
    </StarryWrapper>
  );
};

export default StarryVectors;

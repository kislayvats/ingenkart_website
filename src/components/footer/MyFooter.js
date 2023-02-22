import React, { useState } from "react";
import { FooterWrapper } from "./Style";
import { Row, Col, message, Spin } from "antd";
import { ImageList } from "../../config/ImageList";
import { Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import useViewport from "../../viewport/useViewport";
import { SubscribeNewsletterSchema } from "../../config/Schema";
import axios from "axios";
import { Icons } from "../../config/IconsList";
import { Colors } from "../../config/Colors";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HelpOptions,
  LegalOptions,
  ServicesOptions,
  SocialOptions,
} from "../../config/NavOptions";

const MyFooter = () => {
  const { isTablet, isMobile } = useViewport();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // ===========================************==================================
  // ===========================useFormik=====================================
  // ===========================*************=================================
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    enableReinitialize: true,
    initialValues: { email: "" },
    validationSchema: SubscribeNewsletterSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values, { setSubmitting }) => {
      setLoading(true);
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/theyellowboxdev@gmail.com", {
          email: values.email,
          message: "Subscribed for newsletter",
        })
        .then((response) => {
          message.success("Subscribed successfully!");
          handleChange({ target: { name: "email", value: "" } });
          setLoading(false);
        })
        .catch((error) => {
          message.error("Error in subscribing to newsletter");
          console.log(error);
          setLoading(false);
        });
    },
  });
  return (
    <FooterWrapper className="mt2" isMobile={isMobile}>
      {/* footer logo and get started button */}
      <Row gutter={[16, 24]}>
        <Col xs={24} md={24} lg={14}>
          {/* logo */}
          <img src={ImageList.Footer_Logo} alt="logo" className="footer_logo" />
        </Col>
        <Col
          xs={24}
          md={24}
          lg={10}
          className={isTablet ? "flexBetween" : "flexAround"}
        >
          <Typography className="fontDm ready_heading">
            Ready to get started?
          </Typography>
          <Button
            variant="contained"
            className="getStarted_button"
            onClick={() => navigate("/register/influencer", { replace: true })}
          >
            Get Started
          </Button>
        </Col>
      </Row>
      {/* divider */}
      <div className="divider mt3 mb3" />
      {/* ================================================= */}
      {/* footer content */}
      {/* ================================================= */}
      <Row gutter={[16, 24]}>
        {/* subscribe to newsletter input box */}
        <Col xs={24} md={24} lg={12}>
          <Typography className="fontDm subscribe_text">
            Subscribe to our <br /> newsletter
          </Typography>
          <div className="input_email_container mt2">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="input_email"
            />
            <button
              type="submit"
              className="submit_button"
              onClick={loading ? null : handleSubmit}
              onSubmit={loading ? null : handleSubmit}
              disabled={values.email === "" || loading}
            >
              {loading ? (
                <Spin />
              ) : (
                <Icons.RightArrowIcon
                  style={{ fontWeight: "600", fontSize: 14 }}
                />
              )}
            </button>
          </div>
          {errors.email && touched.email && values.email !== "" ? (
            <Typography
              className="fontDm"
              variant="caption"
              style={{ color: Colors.alertRed }}
            >
              {errors.email}
            </Typography>
          ) : null}
        </Col>
        {/* services */}
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1" className="content_heading fontDm">
            Services
          </Typography>
          {ServicesOptions?.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.linkTo}
                className={({ isActive }) =>
                  isActive
                    ? "activeClassName fontDm"
                    : "inactiveClassName fontDm"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1" className="content_heading fontDm">
            Help
          </Typography>
          {HelpOptions?.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.linkTo}
                className={({ isActive }) =>
                  isActive
                    ? "activeClassName fontDm"
                    : "inactiveClassName fontDm"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </Col>
      </Row>
      {/* privacy term & condition social links */}
      <div className="last_container flexBetween mt5">
        <div className="option_container">
          {LegalOptions?.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.linkTo}
                style={{ marginRight: 30 }}
                className={({ isActive }) =>
                  isActive
                    ? "activeClassName fontDm"
                    : "inactiveClassName fontDm"
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
        <div className="option_container">
          {SocialOptions?.map((item, i) => {
            return (
              <a
                href={item.linkTo}
                target="_blank"
                rel="noreferrer"
                key={i}
                style={{ marginRight: 30 }}
              >
                <img src={item.icon} alt={item.title} className="social_icon" />
              </a>
            );
          })}
        </div>
      </div>{" "}
      {/* divider */}
      {/* <div className="divider mt3 mb1" /> */}
      {/* developed by bili */}
      <div className="developed_by_box mt3">
        <Typography variant="body1" className="developed_by_text fontLato">
          Designed & Developed by{" "}
          <a
            href="https://biliweb.com"
            target="_blank"
            rel="noreferrer"
            className="bili_link"
          >
            Bili
          </a>
        </Typography>
      </div>
    </FooterWrapper>
  );
};

export default MyFooter;

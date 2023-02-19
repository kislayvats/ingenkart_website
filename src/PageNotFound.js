import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import useViewport from "./viewport/useViewport";
import { Colors } from "./config/Colors";
const ErrorImage =
  "https://res.cloudinary.com/axborapp/image/upload/v1643637747/undraw_page_not_found_su7k_ifdcdu.svg";
const PageNotFound = () => {
  const { isMobile } = useViewport();
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          alignSelf: "center",
          marginTop: 15,
        }}>
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography
              align="center"
              color="textPrimary"
              variant={isMobile ? "h3" : "h2"}
              fontWeight="600">
              404: The page you are looking for isn’t here
            </Typography>

            <Box sx={{ textAlign: "center" }}>
              <img
                alt="Under development"
                src={ErrorImage}
                style={{
                  marginTop: 50,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 560,
                }}
              />
            </Box>
            <NavLink
              exact
              to="/"
              replace={true}
              style={{ textDecoration: "none" }}>
              <Button
                component="a"
                startIcon={<ArrowBackIcon fontSize="small" />}
                sx={{
                  mt: 3,
                  borderRadius: 3,
                  textDecoration: "none",
                  backgroundColor: Colors.lightPurple,
                }}
                variant="contained">
                Go back to home
              </Button>
            </NavLink>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PageNotFound;

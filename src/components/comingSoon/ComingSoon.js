import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { ImageList } from "../../config/ImageList";
import useViewport from "../../viewport/useViewport";
import { Colors } from "../../config/Colors";

const ComingSoon = () => {
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
              className="fontLato"
              align="center"
              color="textPrimary"
              variant="h4"
              fontSize={isMobile ? "1rem" : "2rem"}
              fontWeight="600">
              Hold your horses folks! This page is currently taking a coffee
              break but will be back in action soon.
              <br /> Stay tuned!
            </Typography>

            <Box sx={{ textAlign: "center" }}>
              <img
                alt="Under development"
                src={ImageList.ComingSoon}
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
                Wait in our lounge!
              </Button>
            </NavLink>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ComingSoon;

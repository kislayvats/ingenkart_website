import { Typography } from "@mui/material";

export const BorderRadius = {
  smallRadius: "0.5rem",
  mediumRadius: "1rem",
  intermediateRadius: "1.5rem",
  largeRadius: "2rem",
};
export const Shadow = {
  light: "0px 3px 9px 0px rgba(0, 0, 0, 0.02)",
  dark: "0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important",
  veryDark: "0px 3px 9px 0px rgba(0, 0, 0, 0.02)",
};

export const PaddingValues = {
  miniPadding: "0.5rem",
  smallPadding: "1rem",
  mediumPadding: "1.5rem",
  largePadding: "2rem",
  xlPadding: "2.5rem",
  xxlPadding: "3rem",
  randomPadding: "1.7rem",
};

export const SnackbarSeverity = {
  error: "error",
  warning: "warning",
  info: "info",
  success: "success",
};

export const FontType = {
  openSans: "Open Sans",
};

export const Gradient = {
  primary: "linear-gradient(310deg, #5e72e4, #825ee4)",
};

// user role
export const UserRole = [
  {
    key: "0",
    role: "all",
    label: <Typography variant="body1">All</Typography>,
  },
  {
    key: "1",
    role: "influencer",
    label: <Typography variant="body1">Influencer</Typography>,
  },
  {
    key: "2",
    role: "brand",
    label: <Typography variant="body1">Brand</Typography>,
  },
  {
    key: "3",
    role: "editor",
    label: <Typography variant="body1">Editor</Typography>,
  },
  {
    key: "4",
    role: "admin",
    label: <Typography variant="body1">Admin</Typography>,
  },
];
// verification status
export const VerificationStatus = [
  {
    key: "0",
    status: "all",
    label: <Typography variant="body1">All</Typography>,
  },
  {
    key: "1",
    status: "verified",
    label: <Typography variant="body1">Verified</Typography>,
  },
  {
    key: "2",
    status: "unverified",
    label: <Typography variant="body1">Unverified</Typography>,
  },
];

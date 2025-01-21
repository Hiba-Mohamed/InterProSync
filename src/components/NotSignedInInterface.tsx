import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotSignedInInterface = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "rgb(240, 248, 255)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          marginBottom: "16px",
          color: "rgb(33, 37, 41)",
        }}
      >
        You are not signed in!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 400,
          marginBottom: "32px",
          color: "rgb(73, 80, 87)",
        }}
      >
        Please sign in or get started to access our platform.
      </Typography>
      <Button
        component={Link}
        to="/getStarted"
        variant="contained"
        color="primary"
        sx={{
          padding: "10px 20px",
          fontWeight: 600,
          fontSize: "16px",
          textTransform: "none",
          backgroundColor: "#597391",
          "&:hover": {
            backgroundColor: "rgb(25, 118, 210)",
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default NotSignedInInterface;

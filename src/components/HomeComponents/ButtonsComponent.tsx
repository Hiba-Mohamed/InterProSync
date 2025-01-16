import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Ensure you are importing Link correctly
const ButtonsComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "40px" },
        justifyContent: "center",
        alignItems: { xs: "center", sm: "strat" },
        paddingTop: { xs: "24px", sm: "32px" },
      }}
    >
      <Button
        component={Link}
        to="/about"
        sx={{
          fontWeight: 700,
          // background:"#A6C0C6",
          background: "rgba(245, 250, 255, 0.80)",
          borderRadius: "5px",
          px: { xs: 10, sm: 6 },
          color: "black",
          fontSize: { xs: "16px", sm: "18px", md: "22px" },
          textTransform: "none",
          boxShadow: 3,
          maxWidth: { xs: "250px", sm: "auto" },
        }}
      >
        Learn More
      </Button>
      <Button
        component={Link}
        to="/getStarted"
        sx={{
          fontWeight: 700,
          // background:"#183B65",
          background: "rgba(21, 67, 113, 0.8)",
          borderRadius: "5px",
          px: { xs: 10, sm: 6 },
          color: "white",
          fontSize: { xs: "16px", sm: "18px", md: "22px" },
          maxWidth: { xs: "250px", sm: "auto" },
          textTransform: "none",
          boxShadow: 3,
        }}
      >
        Get Started
      </Button>{" "}
    </Box>
  );
};

export default ButtonsComponent;

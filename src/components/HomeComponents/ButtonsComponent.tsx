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
          fontWeight: 900,
          // background:"#A6C0C6",
          background:
            "linear-gradient(to left, rgba(166, 192, 198, 0.7)66%, rgba(24, 59, 101, 0.7)95%)",
          borderRadius: "20px",
          px: { xs: 10, sm: 6 },
          color: "black",
          fontSize: { xs: "12px", sm: "12px", md: "18px" },
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
          fontWeight: 900,
          // background:"#183B65",
          background:
            "linear-gradient(to left, rgba(24, 59, 101, 0.7)66%, rgba(166, 192, 198, 0.7)95%)",
          borderRadius: "20px",
          px: { xs: 10, sm: 6 },
          color: "white",
          fontSize: { xs: "12px", sm: "12px", md: "18px" },
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

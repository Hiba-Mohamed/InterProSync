import { Box, Typography, Grid2, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Ensure you are importing Link correctly

const ComingSoon = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(/comingSoonBg.jpg)", // Image from the public folder
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(220, 227, 237, 0.87)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2>
            <Box
              sx={{
                my: 10,
                textAlign: "center",
                border: "1px solid #183B65",
                borderRadius: "8px",
                padding: "20px",
                color: "#183B65",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: "30px", sm: "30px", md: "50px" },
                  fontWeight: "bold",
                }}
              >
                Coming Soon!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: { xs: "26px", sm: "28px", md: "40px" }, // Responsive font sizes
                }}
              >
                Under Construction
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxWidth: "700px",
                  fontSize: { xs: "22px", sm: "26px", md: "30px" }, // Responsive font sizes
                }}
              >
                Please click below to read more about the app.
              </Typography>
              <Button
                component={Link}
                to="/about"
                sx={{
                  color: "white",
                  backgroundColor: "#183B65",
                  marginBottom: "30px",
                  maxWidth: "200px",
                  paddingX:"50px"
                }}
                size="large"
              >
                Learn More
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default ComingSoon;

import { Typography, Box } from "@mui/material";

const WelcomeText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 6, lg: 8 },
      }}
    >
      {" "}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          color: "black",
          fontSize: { xs: "28px", sm: "38px", md: "60px", lg: "80px" },
          textAlign: "center",
        }}
      >
        Welcome to
        <span style={{ color: "#183B65" }}> Interpro</span>
        <span style={{ color: "#399E85" }}>Sync</span>
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          color: "black",
          fontSize: { xs: "18px", sm: "26px", md: "30px", lg: "50px" },
          textAlign: "center",
        }}
      >
        Empowering Collaboration in Healthcare
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          fontWeight: 500,
          color: "black",
          px: { xs: 4, sm: 4, md: 0 },
          width: { md: "700px", lg: "1000px" },
          fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "25px" },
          textAlign: "center",
        }}
      >
        <span style={{ color: "#183B65", fontWeight: "bold" }}> Interpro</span>
        <span style={{ color: "#399E85", fontWeight: "bold" }}>Sync</span> is a
        task management collaborative tool for healthcare professionals aimed at
        streamlining patient care, and decreasing critical incidents
        occurrences.
      </Typography>
    </Box>
  );
}

export default WelcomeText
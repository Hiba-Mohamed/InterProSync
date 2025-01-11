import { Box } from "@mui/material";
const ProgressBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="images/progressBarComponents/firstBarComponent.png"
        sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
      />
      <Box
        component="img"
        src="images/progressBarComponents/first-step.png"
        sx={{ width: "50px", padding: "4px" }}
        // sx={{ width: { xs: "40px", sm: "40px", md: "40px" } }}
      />
      {/* the area between the two circles */}
      <Box
        component="img"
        src="images/progressBarComponents/under-circle.png"
        sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
      />
      <Box
        component="img"
        src="images/progressBarComponents/betweenShort.png"
        sx={{
          width: { xs: "8px", sm: "10px", md: "12px" },
          height: { xs: "140px", sm: "90px", md: "100px" },
        }}
      />
      <Box
        component="img"
        src="images/progressBarComponents/above-circle.png"
        sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
      />
      {/* ------------------------------------- */}
      <Box
        component="img"
        src="images/progressBarComponents/second-step.png"
        sx={{ width: "50px", padding: "4px" }}
      />
      {/* the area between the two circles */}
      <Box
        component="img"
        src="images/progressBarComponents/under-circle.png"
        sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
      />
      <Box
        component="img"
        src="images/progressBarComponents/between.png"
        sx={{
          width: { xs: "8px", sm: "10px", md: "12px" },
          height: { xs: "320px", sm: "220px", md: "240px" },
        }}
      />
      <Box
        component="img"
        src="images/progressBarComponents/above-circle.png"
        sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
      />
      {/* ------------------------------------- */}
      <Box
        component="img"
        src="images/progressBarComponents/third-step.png"
        sx={{ width: "50px", padding: "4px" }}
      />
      <Box
        component="img"
        src="images/progressBarComponents/lastBarComponent.png"
        sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
      />
    </Box>
  );
};

export default ProgressBar;

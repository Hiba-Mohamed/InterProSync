import { Box, Typography } from "@mui/material";

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
          backgroundColor: "rgba(24, 59, 101, 0.6)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent:"center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 2, sm: 4, md:6 },
            py: { xs: 6 },
            backgroundColor: "rgba(24, 59, 101, 0.8)",
            width: { xs: "300px", sm:"400px", md:"600px" },
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            // borderTopLeftRadius: "15px",
            // borderTopRightRadius: "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "35px", md: "50px" },
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: "transparent",
              background: "#F5FAFF",
              WebkitBackgroundClip: "text",
            }}
          >
            Under Construction
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "45px", md: "66px" },
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: "transparent",
              background: "#F5FAFF",
              WebkitBackgroundClip: "text",
            }}
          >
            Coming Soon !
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ColorCodeKeyComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "20px",
        gap: {
          xs: 1,
          sm: 4,
          md: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: { xs: "300px", sm: "230px", md: "300px" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{ width: "10px", backgroundColor: "#9CCE84", height: "20px" }}
        ></Box>
        <Typography
          sx={{
            color: "transparent",
            background: `#535D68`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { sm: "12px", md: "16px" },
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#9CCE84" }}>Green </span>Means no tasks pending
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: { xs: "300px", sm: "230px", md: "300px" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{ width: "10px", backgroundColor: "#FFD8B0", height: "20px" }}
        ></Box>
        <Typography
          sx={{
            color: "transparent",
            background: `#535D68`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { sm: "12px", md: "16px" },

            fontWeight: 700,
          }}
        >
          <span style={{ color: "#FFD8B0" }}>Orange </span>Means pending team
          tasks
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: { xs: "300px", sm: "230px", md: "300px" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{ width: "10px", backgroundColor: "#C45E7D", height: "20px" }}
        ></Box>
        <Typography
          sx={{
            color: "transparent",
            background: `#535D68`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { sm: "12px", md: "16px" },

            fontWeight: 700,
          }}
        >
          <span style={{ color: "#C45E7D" }}>Red </span>Means pending tasks for
          you
        </Typography>
      </Box>
    </Box>
  );
};

export default ColorCodeKeyComponent;

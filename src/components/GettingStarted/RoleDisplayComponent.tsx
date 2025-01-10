import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const RoleDisplayComponent = ({
  roleDescription,
  roleColor,
}: {
  roleDescription: string;
  roleColor: string;
}) => {
  return (
    <Box
      sx={{
        borderLeft: `15px solid ${roleColor}`,
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "5px",
        backgroundColor: "#F5FAFF",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "1000px",
        width: { xs: "250px", sm: "255px", md: "400px" },
        height: { xs: "45px", sm: "50px", md: "55px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px", md: "26px" },
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          color: "transparent",
          background: `${roleColor}`,
          WebkitBackgroundClip: "text",
          textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
        }}
      >
        {roleDescription}
      </Typography>
    </Box>
  );
};

export default RoleDisplayComponent;

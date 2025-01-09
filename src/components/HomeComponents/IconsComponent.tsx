import { Box, Typography } from "@mui/material";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import SpeedOutlined from "@mui/icons-material/SpeedOutlined";

const IconsComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", lg: "row" },
        flexWrap: "wrap",
        gap: { xs: 2, sm: 8, lg: 20 },
        justifyContent: "center",
        paddingTop: { xs: "10px", md: "0" },
      }}
    >
      {/* Innovation */}
      <Box sx={{ textAlign: "center" }}>
        <AutoAwesome sx={{ fontSize: { xs: 25, sm: 40 }, color: "white" }} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", md: "1.25rem", lg: "1.5rem" },
            color: "white", // set text color to white
          }}
        >
          Innovation
        </Typography>
      </Box>

      {/* Collaboration */}
      <Box sx={{ textAlign: "center" }}>
        <PeopleAltOutlined
          sx={{ fontSize: { xs: 25, sm: 40 }, color: "white" }}
        />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", md: "1.25rem", lg: "1.5rem" },
            color: "white", // set text color to white
          }}
        >
          Collaboration
        </Typography>
      </Box>

      {/* Communication */}
      <Box sx={{ textAlign: "center" }}>
        <QuestionAnswerOutlined
          sx={{ fontSize: { xs: 25, sm: 40 }, color: "white" }}
        />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", md: "1.25rem", lg: "1.5rem" },
            color: "white", // set text color to white
          }}
        >
          Communication
        </Typography>
      </Box>

      {/* Efficiency */}
      <Box sx={{ textAlign: "center" }}>
        <SpeedOutlined sx={{ fontSize: { xs: 25, sm: 40 }, color: "white" }} />
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", md: "1.25rem", lg: "1.5rem" },
            color: "white", // set text color to white
          }}
        >
          Efficiency
        </Typography>
      </Box>
    </Box>
  );
};

export default IconsComponent;

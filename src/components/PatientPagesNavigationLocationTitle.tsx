import { Box, Typography } from "@mui/material";
import UserPatientActionNavigation from "./Navigations/UserPatientActionNavigation";
import { PatientType } from "../mockData/patients";
import { FaBed } from "react-icons/fa6";
import { useTheme, useMediaQuery } from "@mui/material";

const PatientPagesNavigationLocationTitle = ({
  title,
  patientData,
}: {
  title: string;
  patientData: PatientType;
}) => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box textAlign="center" marginTop={0}>
      <Box
        marginBottom={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "row-reverse", sm: "column" },
          justifyContent: { xs: "space-between", sm: "center" },
          backgroundColor: isSmallScreen ? "#183B65" : "",
        }}
      >
        <UserPatientActionNavigation patientData={patientData} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "end" },
            alignItems: { xs: "center", sm: "end" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", sm: "end" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: { xs: 1, sm: 2, lg: 2 },
                justifyContent: "center",
                alighnItems: { sm: "center" },
                background: {
                  xs: "",
                  sm: "linear-gradient(to right,rgb(39, 94, 149) ,rgb(146, 170, 195))",
                },
                paddingX: { sm: "10px" },
                borderBottomLeftRadius: { sm: "5px" },
              }}
            >
              <FaBed
                fontSize={"24px"}
                style={{
                  color: isSmallScreen ? "black" : "white",
                  display: isSmallScreen ? "none" : "block",
                }}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: { xs: 800, sm: 400 },
                  color: "white",
                  background: `white`,
                  WebkitBackgroundClip: "text",
                  textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                  fontSize: { xs: "13px", sm: "12px", lg: "16px" },
                  paddingLeft: isSmallScreen ? "8px" : "",
                }}
              >
                {patientData.patient_name} | HN-{patientData.health_number} |
                Room-
                {patientData.room_id}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "25px", sm: "30px", md: "32px" },
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          color: "transparent",
          background: "#183B65",
          WebkitBackgroundClip: "text",
          textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
          paddingX: "12px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PatientPagesNavigationLocationTitle;

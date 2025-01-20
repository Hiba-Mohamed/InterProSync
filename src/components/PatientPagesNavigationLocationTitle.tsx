import React from "react";
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
    <Box textAlign="center" marginBottom={4} marginTop={0}>
      <UserPatientActionNavigation patientData={patientData} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "end",
          alignItems: { xs: "center", sm: "start" },
        }}
      >
        <Box
          sx={{
            width:{sm:"60%"},
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "start" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "20px", md: "26px" },
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "transparent",
              background: "#399E85",
              WebkitBackgroundClip: "text",
              textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
              paddingX: "12px",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 1, sm: 2, lg: 2 },
              justifyContent: "center",
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
              style={{ color: isSmallScreen ? "black" : "white" }}
            />
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 400,
                color: { xs: "black", sm: "white" },
                background: `white`,
                WebkitBackgroundClip: "text",
                textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                fontSize: { xs: "16px", sm: "13px", lg: "16px" },
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
  );
};

export default PatientPagesNavigationLocationTitle;

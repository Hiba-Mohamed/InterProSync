import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid";
import MyPatientComponentDisplay from "../components/MyPatientComponentDisplay";
import { PatientType } from "../mockData/patients";
import { UserData } from "../mockData/userData";
import { useNavigate } from "react-router";
import UserNavigationUserNameWardLocation from "../components/Navigations/UserNavigationUserNameWardLocation";
import ColorCodeKeyComponent from "../components/ColorCodeKeyComponent";

const UserPatientList: React.FC = () => {
  let navigate = useNavigate();
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);
  const [patients, setPatients] = useState<PatientType[]>([]);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    const patientsString = localStorage.getItem("patients");

    if (userDataString && patientsString) {
      const userData: UserData = JSON.parse(userDataString);
      const allPatients: PatientType[] = JSON.parse(patientsString);

      // Filter patients based on chosenPatientList from userData
      const filteredPatients = allPatients.filter((patient: PatientType) =>
        userData.chosenPatientList.includes(patient.patient_id)
      );
      setPatients(filteredPatients);
    }
  }, []);

  const handleSelectPatient = (patientId: number) => {
    setSelectedPatient(patientId); // Ensure only one patient can be selected
    // Get the current userData from localStorage
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData: UserData = JSON.parse(userDataString);

      // Update currentPatientBeingViewed with the selected patient's ID
      const updatedUserData = {
        ...userData,
        currentPatientBeingViewed: patientId,
      };

      // Save the updated userData back to localStorage
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
  };

  const handleConfirmUserPatientSelection = (patientId: number) => {
    // Optionally, handle any confirmation logic here
    console.log("Selected Patient:", patientId);
    navigate(`/patientPendingTasks/${patientId}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        marginBottom: "500px",
      }}
    >
      <UserNavigationUserNameWardLocation />

      <Box textAlign="center" marginBottom={4}>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "30px", md: "40px" },
            fontFamily: "Inter, sans-serif",
            fontWeight: 900,
            color: "transparent",
            background: "#5D7EA4",
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
          }}
        >
          My Patient List
        </Typography>
      </Box>
      <ColorCodeKeyComponent />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid2
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "40px",
          }}
        >
          {patients.map((patient) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={4}
              key={patient.patient_id}
              sx={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "10px",
                  justifyContent: "center",
                }}
                onClick={() =>
                  handleConfirmUserPatientSelection(patient.patient_id)
                } // Use an arrow function here
              >
                <MyPatientComponentDisplay
                  roomNumber={patient.room_id}
                  patientId={patient.patient_id}
                  patientName={patient.patient_name}
                  healthNumber={patient.health_number}
                  isSelected={selectedPatient === patient.patient_id}
                  onClick={() => handleSelectPatient(patient.patient_id)}
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box>
        <ColorCodeKeyComponent />

        <Typography
          sx={{
            color: "transparent",
            background: `#535D68`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontWeight: 700,
            maxWidth: "800px",
            padding: "12px",
          }}
        >
          Click on a patient to view their dashboard, where you can see all
          assigned tasks from other healthcare professionals and assign new
          tasks to team members like doctors, dietitian, or pharmacists.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserPatientList;

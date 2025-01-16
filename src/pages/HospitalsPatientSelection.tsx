import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid";
import PatientSelectionInfoDisplay from "../components/PatientSelectionInfoDisplay";
import { patients } from "../mockData/patients";
import { rooms } from "../mockData/rooms"; // Make sure rooms contain room_id, room_number, and ward_id
import { wards } from "../mockData/wards"; // Import your wards data

const HospitalsPatientSelection: React.FC = () => {
  const [selectedPatients, setSelectedPatients] = useState<number[]>([]);

  const handleSelectAllPatients = () => {
    if (selectedPatients.length === patients.length) {
      setSelectedPatients([]);
    } else {
      setSelectedPatients(patients.map((patient) => patient.patient_id));
    }
  };

  const handleSelectPatient = (id: number) => {
    setSelectedPatients((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  // Create a mapping of ward_id to ward_name
  const wardIdToName = wards.reduce(
    (acc, ward) => {
      acc[ward.ward_id] = ward.ward_name;
      return acc;
    },
    {} as { [key: string]: string }
  );

  // Group patients by ward (room_id) and include the ward name
  const groupedPatients = patients.reduce(
    (acc, patient) => {
      const room = rooms.find((room) => room.room_id === patient.room_id);
      const wardName = room ? wardIdToName[room.ward_id] : "Unknown Ward"; // Get the ward name based on ward_id

      if (!acc[wardName]) {
        acc[wardName] = [];
      }
      acc[wardName].push(patient);
      return acc;
    },
    {} as { [key: string]: typeof patients }
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
        minHeight: "100vh",
      }}
    >
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
          Hospital Patient Selection{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "flex-end" }, // Use 'justifyContent' to align the button
          width: "100%",
          padding: "12px",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleSelectAllPatients}
          sx={{
            color: "#183B65",
            borderColor: "#183B65",
            "&:hover": {
              borderColor: "#9CCE84",
              backgroundColor: "#9CCE84",
              color: "white",
            },
          }}
        >
          {selectedPatients.length === patients.length
            ? "Deselect All"
            : "Select All Displayed Patients"}
        </Button>
      </Box>

      {/* Use Grid for responsive layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {Object.keys(groupedPatients).map((wardName) => (
          <Box key={wardName} sx={{ marginBottom: "40px" }}>
            <Typography
              sx={{
                fontSize: "25px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#183B65",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              {wardName}
            </Typography>
            <Grid2
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: "40px",
              }}
            >
              {groupedPatients[wardName].map((patient) => (
                <Grid2
                  item
                  xs={12} // Full width on small screens
                  sm={6} // 50% width on small and larger screens
                  md={4} // 33.33% width on medium and larger screens
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
                  >
                    <PatientSelectionInfoDisplay
                      roomNumber={patient.room_id}
                      patientName={patient.patient_name}
                      healthNumber={patient.health_number}
                      isSelected={selectedPatients.includes(patient.patient_id)} // Pass selection status
                      onClick={() => handleSelectPatient(patient.patient_id)} // Handle selection toggle on click
                    />
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#183B65", marginTop: "20px" }}
      >
        Confirm Patient List
      </Button>
    </Box>
  );
};

export default HospitalsPatientSelection;

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid";
import PatientSelectionInfoDisplay from "../components/PatientSelectionInfoDisplay";
import { PatientType } from "../mockData/patients";
import { RoomType } from "../mockData/rooms";
import { WardType } from "../mockData/wards";
import { UserData } from "../mockData/userData";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import NotSignedInInterface from "../components/NotSignedInInterface";


const SelectedWardsPatientList: React.FC = () => {
  let navigate = useNavigate();
  const [selectedPatients, setSelectedPatients] = useState<number[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<PatientType[]>([]);
  const [groupedPatients, setGroupedPatients] = useState<
    Record<string, PatientType[]>
  >({});
  const [noWardsSelectedErrorMessage, setNoWardsSelectedErrorMessage] = useState<string>("");
    const [signedIn, setSignedIn] = useState<boolean>(false);
  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    const roomsString = localStorage.getItem("rooms");
    const wardsString = localStorage.getItem("wards");
    const patientsString = localStorage.getItem("patients")

    if (userDataString && roomsString && wardsString && patientsString) {
      const userData: UserData = JSON.parse(userDataString);
      const rooms: RoomType[] = JSON.parse(roomsString);
      const wards: WardType[] = JSON.parse(wardsString);
      const patients: PatientType[]=JSON.parse(patientsString);
      const selectedWards = userData?.chosenWardOrWards || [];
        if (userDataString) {
          const userData: UserData = JSON.parse(userDataString);
          const userExists = userData.username !== "";
          if (userExists) {
            setSignedIn(true);
          }
        }
      const roomMap = new Map(
        rooms.map((room) => [room.room_id, room.ward_id])
      );
      const wardMap = new Map(
        wards.map((ward) => [ward.ward_id, ward.ward_name])
      );

      const filtered = patients.filter((patient:PatientType) =>
        selectedWards.includes(roomMap.get(patient.room_id)!)
      );
      setFilteredPatients(filtered);

      const grouped = filtered.reduce(
        (acc, patient) => {
          const wardName =
            wardMap.get(roomMap.get(patient.room_id)!) || "Unknown Ward";
          if (!acc[wardName]) acc[wardName] = [];
          acc[wardName].push(patient);
          return acc;
        },
        {} as Record<string, PatientType[]>
      );

      setGroupedPatients(grouped);
    }
  }, []);

  const handleSelectAllPatients = () => {
    if (selectedPatients.length === filteredPatients.length) {
      setSelectedPatients([]);
    } else {
      setSelectedPatients(
        filteredPatients.map((patient) => patient.patient_id)
      );
    }
  };

  const handleSelectPatient = (id: number) => {
    setSelectedPatients((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };


const handleConfirmUserPatientSelection = () => {
  if (selectedPatients.length === 0) {
    setNoWardsSelectedErrorMessage("Please select at least one patient to proceed.");
    return; // Prevent further action
  }  // Get the current userData from localStorage
      setNoWardsSelectedErrorMessage(
        ""
      );

  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    const userData: UserData = JSON.parse(userDataString);

    // Update the chosenPatientList with the selected patient IDs
    const updatedUserData = {
      ...userData,
      chosenPatientList: selectedPatients, // Update this array with selected patients
    };

    // Save the updated userData back to localStorage
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Optionally, you can log or show a confirmation message
    // console.log("Updated userData:", updatedUserData);
    navigate("/userPatientList")
  }
};


  return signedIn ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
        minHeight: "100vh",
        marginBottom: "500px",
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
          Select Wards Patient List
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "flex-end" },
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
          {selectedPatients.length === filteredPatients.length
            ? "Deselect All"
            : "Select All Displayed Patients"}
        </Button>
      </Box>

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
                color: "black",
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "20px",
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
                  >
                    <PatientSelectionInfoDisplay
                      roomNumber={patient.room_id}
                      patientName={patient.patient_name}
                      healthNumber={patient.health_number}
                      isSelected={selectedPatients.includes(patient.patient_id)}
                      onClick={() => handleSelectPatient(patient.patient_id)}
                    />
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ))}
      </Box>
      {noWardsSelectedErrorMessage && (
        <ErrorMessage errorMessage={noWardsSelectedErrorMessage} />
      )}
      <Button
        variant="contained"
        sx={{ backgroundColor: "#183B65", marginTop: "20px" }}
        onClick={() => handleConfirmUserPatientSelection()}
      >
        Confirm Patient List
      </Button>
    </Box>
  ):(<NotSignedInInterface />);
};

export default SelectedWardsPatientList;
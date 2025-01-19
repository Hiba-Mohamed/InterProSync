import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserData } from "../mockData/userData";

interface PatientSelectionInfoDisplayProps {
  roomNumber: number;
  patientName: string;
  healthNumber: number;
  patientId: number; // Assuming you pass patientId as a prop
  isSelected: boolean;
  onClick: () => void;
}

const PatientSelectionInfoDisplay: React.FC<
  PatientSelectionInfoDisplayProps
> = ({
  roomNumber,
  patientName,
  healthNumber,
  patientId,
  isSelected,
  onClick,
}) => {
  const [userAbbreviation, setUserAbbreviation] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#9CCE84");
  const [teamBackgroundColor, setTeamBackgroundColor] =
    useState<string>("#9CCE84");

  useEffect(() => {
    // Get the userData from localStorage
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData: UserData = JSON.parse(userDataString);

      // Find the abbreviation by matching discipline_id from userData to disciplinesAndAbbreviation
      const disciplinesAndAbbreviation = [
        { discipline_id: 1, abbreviation: "RN" },
        { discipline_id: 2, abbreviation: "MD" },
        { discipline_id: 3, abbreviation: "PT" },
        { discipline_id: 4, abbreviation: "RD" },
        { discipline_id: 5, abbreviation: "PH" },
        { discipline_id: 6, abbreviation: "MG" },
      ];

      const matchingDiscipline = disciplinesAndAbbreviation.find(
        (discipline) => discipline.discipline_id === userData.discipline_id
      );

      if (matchingDiscipline) {
        setUserAbbreviation(matchingDiscipline.abbreviation);
      }

      // Retrieve the tasks associated with this patient from localStorage
      const tasksString = localStorage.getItem("tasks");
      if (tasksString) {
        const tasks = JSON.parse(tasksString);

        // Check if any task associated with the patient has a matching discipline_id
        const taskForPatient = tasks.find(
          (task: any) =>
            task.patient_id === patientId &&
            task.discipline_id === userData.discipline_id &&
            task.status === "inprogress"
        );
        const teamTaskForPatient = tasks.find(
          (task: any) =>
            task.patient_id === patientId &&
            task.discipline_id !== userData.discipline_id &&
            task.status === "inprogress"
        );

        // If a matching task is found, set background color to red, else green
        if (taskForPatient) {
          setBackgroundColor("#C45E7D"); // Red color for matching task
        } else {
          setBackgroundColor("#9CCE84"); // Green color if no match
        }

        if (teamTaskForPatient) {
          setTeamBackgroundColor("#FFD8B0");
        } else {
          setTeamBackgroundColor("#9CCE84");
        }
      }
    }
  }, [patientId]);

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        outline: isSelected ? "3px solid #9CCE84" : "transparent",
        cursor: "pointer",
        transition: "outline 0.3s",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      {/* Abbreviation Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: backgroundColor, // Dynamic background color
          color: "white",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          height: "48px",
          width: "30px",
        }}
      >
        <Typography
          style={{ transform: "rotate(-90deg)" }}
          sx={{
            fontSize: "12px",
            fontWeight: 900,
            marginTop: "14px",
            marginLeft: "5px",
          }}
        >
          {userAbbreviation}
        </Typography>
      </Box>

      {/* Team Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: teamBackgroundColor, // Dynamic background color
          color: "white",
          height: "48px",
          width: "30px",
        }}
      >
        <Typography
          style={{ transform: "rotate(-90deg)" }}
          sx={{
            fontSize: "12px",
            fontWeight: 900,
            marginTop: "14px",
            marginLeft: "0px",
          }}
        >
          TEAM
        </Typography>
      </Box>

      {/* Room Information Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#A5B8CE",
          color: "white",
          paddingX: "12px",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>Room</Typography>
        <Typography sx={{ fontWeight: 700 }}>{roomNumber}</Typography>
      </Box>

      {/* Patient Name and Health Number Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "#183B65",
          width: "200px",
          paddingLeft: "12px",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>{patientName}</Typography>
        <Typography sx={{ fontWeight: 700 }}>HN-{healthNumber}</Typography>
      </Box>
    </Box>
  );
};

export default PatientSelectionInfoDisplay;

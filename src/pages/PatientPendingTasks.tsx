import { Box, Typography, Button } from "@mui/material";
import UserPatientPendingTasks from "../components/UserPatientPendingTasks";
import TeamPatientPendingTasks from "../components/TeamPatientPendingTasks";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { PatientType } from "../mockData/patients";
import PatientPagesNavigationLocationTitle from "../components/PatientPagesNavigationLocationTitle";
import { useNavigate } from "react-router-dom";
import NotSignedInInterface from "../components/NotSignedInInterface";
const PatientPendingTasks = () => {
  const { patient_idString } = useParams();
  const [patientData, setPatientData] = useState<PatientType | null>(null);
  const [userTasks, setUserTasks] = useState<TaskType[]>([]);
  const [teamTasks, setTeamTasks] = useState<TaskType[]>([]);
  const [userDiscipline, setUserDiscipline] = useState<number>(0);
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const getNeededArrays = () => {
    const patientsString = localStorage.getItem("patients");
    const tasksString = localStorage.getItem("tasks");
    const userDataString = localStorage.getItem("userData");

    if (patientsString && tasksString && patient_idString && userDataString) {
      const patient_id = parseInt(patient_idString, 10); // Convert patient_idString to a number

      const patients: PatientType[] = JSON.parse(patientsString);
      const allTasks: TaskType[] = JSON.parse(tasksString);
      const userData = JSON.parse(userDataString);
      console.log(userData);
      setUserDiscipline(userData.discipline_id);

      // Find the patient with the matching patient_id
      const selectedPatient = patients.find(
        (patient) => patient.patient_id === patient_id
      );
      const userExists = userData.username !== "";
      if (userExists) {
        setSignedIn(true);
      }
      if (selectedPatient) {
        setPatientData(selectedPatient);

        // Filter tasks by patient_id
        const patientTasks = allTasks.filter(
          (task) => task.patient_id === patient_id
        );
        console.log("patientTasks", patientTasks);

        const pendingPatientTasks = patientTasks.filter(
          (task) => task.status === "inprogress"
        );

        // Split tasks based on discipline_id (user's discipline vs others)
        const pendingUserAssignedTasks = pendingPatientTasks.filter(
          (task) => task.discipline_id === userDiscipline // Tasks assigned to the user's discipline
        );
        console.log("userAssignedTasks", pendingUserAssignedTasks);

        const pendingTeamAssignedTasks = pendingPatientTasks.filter(
          (task) => task.discipline_id !== userDiscipline // Tasks assigned to other disciplines
        );
        console.log("teamAssignedTasks", pendingTeamAssignedTasks);

        setUserTasks(pendingUserAssignedTasks);
        setTeamTasks(pendingTeamAssignedTasks);
      }
    }
  };

  useEffect(() => {
    getNeededArrays();
  }, [patient_idString, userDiscipline]); // Re-run effect if patient_idString or userDiscipline changes

  const handleCompleteUpdate = () => {
    getNeededArrays();
  };

  if (!patientData) {
    return (
      <Box textAlign="center" marginTop={8}>
        <Typography>Loading patient data...</Typography>
      </Box>
    );
  }

  return signedIn?(
    <Box sx={{ minHeight: "100vh" }}>
      <PatientPagesNavigationLocationTitle
        title="Pending Tasks"
        patientData={patientData}
      />
      <Button
        variant="text"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "12px", sm: "12px", md: "18px" },
          width: { xs: "30%", sm: "auto" },
          textAlign: "center",
          marginBottom: { xs: "12px", sm: "0" },
          paddingX: { xs: "1px", sm: "18px" },
          textTransform: "capitalize",
          color: "#445972",
        }}
        onClick={() =>
          navigate(`/SearchPendingTasks/${patientData.patient_id}`)
        }
      >
        Filter By Profession
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center",
          gap: 16,
          justifyContent: "center",
        }}
      >
        <UserPatientPendingTasks
          userTasks={userTasks}
          atComplete={handleCompleteUpdate}
        />
        <TeamPatientPendingTasks teamTasks={teamTasks} />
      </Box>
    </Box>
  ):(<NotSignedInInterface />);
};

export default PatientPendingTasks;

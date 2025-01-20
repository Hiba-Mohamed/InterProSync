import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { PatientType } from "../mockData/patients";
import { useNavigate } from "react-router-dom";
import { CompletedTasksDisplayObjectType } from "../mockData/completedTasks";
import { CompletedTaskType } from "../mockData/completedTasks";
import CompletedUserTasks from "../components/CompletedUserTasks";
import CompletedTeamTasks from "../components/CompletedTeamTasks";
import PatientPagesNavigationLocationTitle from "../components/PatientPagesNavigationLocationTitle";
const PatientPendingTasks = () => {
  const { patient_idString } = useParams();
  const [patientData, setPatientData] = useState<PatientType | null>(null);
  const [userCompletedTasksAdjustArray, setUserCompletedTasksAdjustedArray] =
    useState<CompletedTasksDisplayObjectType[]>([]);
  const [teamCompletedTasksAdjustedArray, setTeamCompletedTasksAdjustedArray] =
    useState<CompletedTasksDisplayObjectType[]>([]);
  const [userDiscipline, setUserDiscipline] = useState<number>(0);
  const navigate = useNavigate();
  const getNeededArrays = () => {
    const patientsString = localStorage.getItem("patients");
    const tasksString = localStorage.getItem("tasks");
    const completedTasksString = localStorage.getItem("completedTasks");
    const userDataString = localStorage.getItem("userData");

    if (
      patientsString &&
      tasksString &&
      completedTasksString &&
      patient_idString &&
      userDataString
    ) {
      const patient_id = parseInt(patient_idString, 10); // Convert patient_idString to a number

      const patients: PatientType[] = JSON.parse(patientsString);
      const allTasks: TaskType[] = JSON.parse(tasksString);
      const allCompletedTasks: CompletedTaskType[] =
        JSON.parse(completedTasksString);
      const userData = JSON.parse(userDataString);
      setUserDiscipline(userData.discipline_id);
      console.log(allCompletedTasks);
      // Find the patient with the matching patient_id
      const selectedPatient = patients.find(
        (patient) => patient.patient_id === patient_id
      );

      if (selectedPatient) {
        setPatientData(selectedPatient);

        // Filter tasks by patient_id
        const patientTasks = allTasks.filter(
          (task) => task.patient_id === patient_id
        );
        console.log(patientTasks);

        const patienttasksCompletedLongerArray = patientTasks.filter(
          (task) => task.status === "complete"
        );
        console.log(patienttasksCompletedLongerArray);

        // Split completed tasks based on discipline_id (user's discipline vs others)
        const userCompleted = patienttasksCompletedLongerArray.filter(
          (completedTask) => completedTask.discipline_id === userDiscipline // Tasks assigned to the user
        );
        const teamCompleted = patienttasksCompletedLongerArray.filter(
          (completedTask) => completedTask.discipline_id !== userDiscipline // Tasks assigned to other team
        );

        // Link the completed task to the main task by task_id and include completion time
        const getCompletionTime = (task: TaskType): string | null => {
          const completedTask = allCompletedTasks.find(
            (completedTask) => completedTask.task_id === task.task_id
          );
          return completedTask ? completedTask.completion_datetime : null;
        };
        const getaCompletedBy = (task: TaskType): number | null => {
          const completedTask = allCompletedTasks.find(
            (completedTask) => completedTask.task_id === task.task_id
          );
          return completedTask ? completedTask.completed_by : null;
        };

        const formatTasksWithCompletionTime = (tasks: TaskType[]): any[] => {
          return tasks.map((task) => ({
            ...task,
            completion_datetime: getCompletionTime(task),
            completed_by: getaCompletedBy(task),
          }));
        };

        // setUserCompletedTasks(userCompleted);
        // setTeamCompletedTasks(teamCompleted);

        // Adjust the completed tasks to the specific format
        setUserCompletedTasksAdjustedArray(
          formatTasksWithCompletionTime(userCompleted)
        );
        setTeamCompletedTasksAdjustedArray(
          formatTasksWithCompletionTime(teamCompleted)
        );
      }
    }
  };

  useEffect(() => {
    getNeededArrays();
  }, [patient_idString, userDiscipline]);

  const handleUserTaskUpdate = () => {
    getNeededArrays();
  };

  if (!patientData) {
    return (
      <Box textAlign="center" marginTop={8}>
        <Typography>Loading patient data...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <PatientPagesNavigationLocationTitle
        title="Completed Tasks"
        patientData={patientData}
      />
      <Button
        variant="text"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "10px", sm: "12px", md: "18px" },
          width: { xs: "30%", sm: "auto" },
          textAlign: "center",
          marginBottom: { xs: "12px", sm: "0" },
          paddingX: { xs: "1px", sm: "18px" },
          textTransform: "capitalize",
          color: "#445972",
        }}
        onClick={() =>
          navigate(`/SearchCompletedTasks/${patientData.patient_id}`)
        }
      >
        Filter By Profession
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: { xs: "12px", sm: "20px" },
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center",
          gap: 16,
          justifyContent: { xs: "center" },
        }}
      >
        <CompletedUserTasks
          userCompletedTasks={userCompletedTasksAdjustArray}
          onUndo={handleUserTaskUpdate}
        />
        <CompletedTeamTasks
          teamCompletedTasks={teamCompletedTasksAdjustedArray}
        />
      </Box>
    </Box>
  );
};

export default PatientPendingTasks;

import {
  Box,
  Button,
  TextField,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import PatientPagesNavigationLocationTitle from "../components/PatientPagesNavigationLocationTitle";
import { PatientType } from "../mockData/patients";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import { UserData } from "../mockData/userData";
import { User } from "../mockData/users";
import NotSignedInInterface from "../components/NotSignedInInterface";

const AssignTaskUnderPatient = () => {
  const { patient_idString } = useParams();
  const [disciplines, setDisciplines] = useState<
    { discipline_id: number; discipline_name: string }[]
  >([]);
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<number | "">(
    ""
  );
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [patientData, setPatientData] = useState<PatientType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [userData, setUserData] =useState<UserData>();
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    const disciplinesString = localStorage.getItem("disciplines");
    const tasksString = localStorage.getItem("tasks");
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (userDataString){
    const userData =  JSON.parse(userDataString)
    setUserData(userData)
          const userExists = userData.username !== "";
          if (userExists) {
            setSignedIn(true);
          }
    }
    if (disciplinesString) {
      setDisciplines(JSON.parse(disciplinesString));
    }
    if (tasksString) {
      setTasks(JSON.parse(tasksString));
    }

    const patientsString = localStorage.getItem("patients");
    if (patientsString && patient_idString) {
      const patients: PatientType[] = JSON.parse(patientsString);
      const selectedPatient = patients.find(
        (patient) => patient.patient_id === parseInt(patient_idString)
      );
      if (selectedPatient) {
        setPatientData(selectedPatient);
      }
    }
    setIsLoading(false);
  }, [patient_idString]);

  const handleAssignTask = () => {
    if (
      !patient_idString ||
      !selectedDisciplineId ||
      !taskDescription
    ) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const getUserIdByUsername = (username:string)=>{
const user = users?.find((user) => user.username === username);
    return user ? user.user_id : 0; 
    }
    if(userData){
      const newTask: TaskType = {
        assigned_by: getUserIdByUsername(userData.username),
        assignment_dateTime: new Date().toISOString(),
        description: taskDescription,
        discipline_id: selectedDisciplineId,
        patient_id: parseInt(patient_idString, 10),
        status: "inprogress",
        task_id: tasks.length + 1,
      };

      const updatedTasks = [...tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      setSuccessMessage("Task assigned successfully!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      setTaskDescription("");
      setSelectedDisciplineId("");
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return signedIn? (
    patientData && (
      <Box sx={{ minHeight: "100vh"}}>
        <PatientPagesNavigationLocationTitle
          title="Assign A Task"
          patientData={patientData}
        />
        <Box
          component="form"
          sx={{
            maxWidth: 600,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            padding:2
          }}
        >
          <TextField
            select
            label="Assign To"
            value={selectedDisciplineId}
            onChange={(e) => setSelectedDisciplineId(Number(e.target.value))}
            fullWidth
          >
            {disciplines.map((discipline) => (
              <MenuItem
                key={discipline.discipline_id}
                value={discipline.discipline_id}
              >
                {discipline.discipline_name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Task Description"
            multiline
            rows={4}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            fullWidth
          />

          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          {successMessage && <SuccessMessage successMessage={successMessage} />}

          <Button
            variant="contained"
            onClick={handleAssignTask}
            fullWidth
            sx={{ textTransform: "capitalize", backgroundColor: "#183B65" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Assigning..." : "Assign Task"}
          </Button>
        </Box>
      </Box>
    )
  ):(<NotSignedInInterface />);
};

export default AssignTaskUnderPatient;

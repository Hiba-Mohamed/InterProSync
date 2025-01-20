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

  const userDataString = localStorage.getItem("userData");

  useEffect(() => {
    const disciplinesString = localStorage.getItem("disciplines");
    const tasksString = localStorage.getItem("tasks");

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
      !userDataString ||
      !patient_idString ||
      !selectedDisciplineId ||
      !taskDescription
    ) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const userData = JSON.parse(userDataString);
    const newTask: TaskType = {
      assigned_by: userData.user_id,
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

  return (
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
  );
};

export default AssignTaskUnderPatient;

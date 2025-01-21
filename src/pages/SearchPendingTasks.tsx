import {
  Box,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { PatientType } from "../mockData/patients";
// import { User } from "../mockData/users";
import PatientPagesNavigationLocationTitle from "../components/PatientPagesNavigationLocationTitle";
import SearchPendingComponent from "../components/SearchPendingComponent";

const SearchPendingTasks = () => {
  const { patient_idString } = useParams();
  const [patientData, setPatientData] = useState<PatientType | null>(null);
  const [userTasks, setUserTasks] = useState<TaskType[]>([]);
  const [teamTasks, setTeamTasks] = useState<TaskType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
  const [userDiscipline, setUserDiscipline] = useState<number>(0);

  //   const [searchDate, setSearchDate] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | "">("");

  // const [users, setUsers] = useState<User[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);

  // const getUsernameById = (userId: number): string => {
  //   const user = users.find((user) => user.user_id === userId);
  //   return user ? user.username : "Unknown";
  // };

  // const getDisciplineById = (disciplineId: number): string => {
  //   const discipline = disciplines.find(
  //     (discipline) => discipline.discipline_id === disciplineId
  //   );
  //   return discipline ? discipline.discipline_name : "Unknown Discipline";
  // };

  // const handleExpandClick = (index: number) => {
  //   setExpandedTaskIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
  // const formatDateTime = (dateTime: string): string => {
  //   const date = new Date(dateTime);
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
  //   const day = date.getDate().toString().padStart(2, "0");
  //   const hours = date.getHours().toString().padStart(2, "0");
  //   const minutes = date.getMinutes().toString().padStart(2, "0");
  //   const seconds = date.getSeconds().toString().padStart(2, "0");
  //   return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  // };
  const getNeededArrays = () => {
    // const storedUsers = localStorage.getItem("users");
    const storedDisciplines = localStorage.getItem("disciplines");
    const userDataString = localStorage.getItem("userData");

    // if (storedUsers) {
    //   setUsers(JSON.parse(storedUsers));
    // }
    if (storedDisciplines) {
      setDisciplines(JSON.parse(storedDisciplines));
    }
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log(userData);
      setUserDiscipline(userData.discipline_id);
    }

    const patientsString = localStorage.getItem("patients");
    const tasksString = localStorage.getItem("tasks");
    const disciplinesString = localStorage.getItem("disciplines");

    if (disciplinesString) {
      setDisciplines(JSON.parse(disciplinesString));
    }

    if (patientsString && tasksString && patient_idString && userDataString) {
      const patient_id = parseInt(patient_idString, 10);

      const patients: PatientType[] = JSON.parse(patientsString);
      const allTasks: TaskType[] = JSON.parse(tasksString);
      const userData = JSON.parse(userDataString);

      const selectedPatient = patients.find(
        (patient) => patient.patient_id === patient_id
      );

      if (selectedPatient) {
        setPatientData(selectedPatient);

        const patientTasks = allTasks.filter(
          (task) =>
            task.patient_id === patient_id && task.status === "inprogress"
        );

        setUserTasks(
          patientTasks.filter(
            (task) => task.discipline_id === userData.discipline_id
          )
        );
        setTeamTasks(
          patientTasks.filter(
            (task) => task.discipline_id !== userData.discipline_id
          )
        );
        setFilteredTasks(patientTasks); // Start with all pending tasks
      }
    }
  };
  useEffect(() => {
    getNeededArrays();
  }, [patient_idString]);

  const handleCompleteDeleteUpdate = () => {
    getNeededArrays();
  };

  const handleDisciplineChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSelectedDiscipline(value === "" ? "" : parseInt(value, 10));
  };

  //   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchDate(event.target.value);
  //   };

  useEffect(() => {
    let filtered = [...userTasks, ...teamTasks];

    if (selectedDiscipline !== "") {
      filtered = filtered.filter(
        (task) => task.discipline_id === selectedDiscipline
      );
    }

    // if (searchDate) {
    //   filtered = filtered.filter((task) =>
    //     task.assignment_dateTime.startsWith(searchDate)
    //   );
    // }

    setFilteredTasks(filtered);
  }, [selectedDiscipline, userTasks, teamTasks]);

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
        title="Search Pending Tasks"
        patientData={patientData}
      />

      <Box sx={{ display: "flex", gap: 4, justifyContent: "center", mt: 4 }}>
        <TextField
          label="Filter by Discipline"
          select
          value={selectedDiscipline}
          onChange={handleDisciplineChange}
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="">All Disciplines</MenuItem>
          {disciplines.map((discipline) => (
            <MenuItem
              key={discipline.discipline_id}
              value={discipline.discipline_id}
            >
              {discipline.discipline_name}
            </MenuItem>
          ))}
        </TextField>

        {/* <TextField
          label="Filter by Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={searchDate}
          onChange={handleDateChange}
        /> */}
      </Box>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredTasks.length !== 0 &&
          filteredTasks.map((task) => (
            <SearchPendingComponent
              task={task}
              atUpdate={handleCompleteDeleteUpdate}
              isTeam={task.discipline_id === userDiscipline ? false : true}
            />
          ))}
        {filteredTasks.length === 0 && (
          <Typography sx={{ textAlign: "center" }}>
            No Pending Tasks Found for the chosen Discipline
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchPendingTasks;

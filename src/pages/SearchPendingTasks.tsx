import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Divider,
  Collapse,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { PatientType } from "../mockData/patients";
import { User } from "../mockData/users";
import UserPatientActionNavigation from "../components/Navigations/UserPatientActionNavigation";
import NotSignedInInterface from "../components/NotSignedInInterface";

const SearchPendingTasks = () => {
  const { patient_idString } = useParams();
  const [patientData, setPatientData] = useState<PatientType | null>(null);
  const [userTasks, setUserTasks] = useState<TaskType[]>([]);
  const [teamTasks, setTeamTasks] = useState<TaskType[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
    const [userDiscipline, setUserDiscipline] = useState<number>(0);

//   const [searchDate, setSearchDate] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | "">("");

  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(
    null
  );
  const [users, setUsers] = useState<User[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const getUsernameById = (userId: number): string => {
    const user = users.find((user) => user.user_id === userId);
    return user ? user.username : "Unknown";
  };

  const getDisciplineById = (disciplineId: number): string => {
    const discipline = disciplines.find(
      (discipline) => discipline.discipline_id === disciplineId
    );
    return discipline ? discipline.discipline_name : "Unknown Discipline";
  };

  const handleExpandClick = (index: number) => {
    setExpandedTaskIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const formatDateTime = (dateTime: string): string => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  };


  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const storedDisciplines = localStorage.getItem("disciplines");
    const userDataString = localStorage.getItem("userData");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (storedDisciplines) {
      setDisciplines(JSON.parse(storedDisciplines));
    }
     if (userDataString) {
          const userData = JSON.parse(userDataString);
          console.log(userData);
          setUserDiscipline(userData.discipline_id);}

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
              const userExists = userData.username !== "";
              if (userExists) {
                setSignedIn(true);
              }
      }
    }
  }, [patient_idString]);

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
  }, [ selectedDiscipline, userTasks, teamTasks]);

  if (!patientData) {
    return (
      <Box textAlign="center" marginTop={8}>
        <Typography>Loading patient data...</Typography>
      </Box>
    );
  }

  return signedIn? (
    <Box sx={{ minHeight: "100vh" }}>
      <UserPatientActionNavigation patientData={patientData} />

      <Box textAlign="center" marginBottom={4} marginTop={8}>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "30px", md: "40px" },
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            color: "transparent",
            background: "#5D7EA4",
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
          }}
        >
          Search Pending Tasks
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 4, sm: 16, lg: 24 },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 2,
            fontWeight: 600,
            color: "transparent",
            background: `black`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { xs: "16px", sm: "24px", lg: "30px" },
          }}
        >
          {patientData.patient_name}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 2,
            fontWeight: 600,
            color: "transparent",
            background: `black`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { xs: "16px", sm: "24px", lg: "30px" },
          }}
        >
          HN-{patientData.health_number}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 2,
            fontWeight: 600,
            color: "transparent",
            background: `black`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { xs: "16px", sm: "24px", lg: "30px" },
          }}
        >
          Room-{patientData.room_id}
        </Typography>
      </Box>

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
          filteredTasks.map((task, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                marginBottom: 3,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                width: { xs: "330px", sm: "600px" },
              }}
            >
              <Typography sx={{ color: "text.secondary" }}>
                Assigned By: {getUsernameById(task.assigned_by)}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Assigned To: {getDisciplineById(task.discipline_id)}
              </Typography>
              <Typography>
                Assignment Date and Time:{" "}
                {formatDateTime(task.assignment_dateTime)}
              </Typography>

              {/* Using Collapse for expandable content */}
              <Collapse in={expandedTaskIndex === index}>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Task:
                </Typography>
                <Typography sx={{ width: { xs: "300px", sm: "500px" } }}>
                  {task.description}
                </Typography>
                {task.discipline_id === userDiscipline && (
                  <Box
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      gap: { xs: 2 },
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        marginRight: 1,
                        borderColor: "#C45E7D",
                        color: "#C45E7D",
                        "&:hover": {
                          borderColor: "#C45E7D",
                          backgroundColor: "rgba(196, 94, 125, 0.1)",
                        },
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#749D61" }}
                    >
                      Complete
                    </Button>
                  </Box>
                )}
              </Collapse>

              {/* Expand/Collapse Button */}
              <Box sx={{ marginTop: 2 }}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => handleExpandClick(index)}
                >
                  {expandedTaskIndex === index ? "Collapse" : "Expand"}
                </Button>
              </Box>
            </Box>
          ))}
        {filteredTasks.length === 0 && (
          <Typography sx={{ textAlign: "center" }}>
            No Pending Tasks Found for the chosen Discipline
          </Typography>
        )}
      </Box>
    </Box>
  ):(<NotSignedInInterface />);
};

export default SearchPendingTasks;

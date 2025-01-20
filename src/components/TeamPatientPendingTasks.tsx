import  { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { Box, Typography, Button, Collapse } from "@mui/material";
import TasksHeading from "./TasksHeading";

// Function to format the date to YYYY/MM/DD HH:mm:ss
const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};

const TeamPatientPendingTasks = ({ teamTasks }: { teamTasks: TaskType[] }) => {
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(
    null
  );
  const [users, setUsers] = useState<any[]>([]); // State to hold users
  const [disciplines, setDisciplines] = useState<any[]>([]); // State to hold disciplines

  // Fetch users and disciplines from localStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const storedDisciplines = localStorage.getItem("disciplines");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (storedDisciplines) {
      setDisciplines(JSON.parse(storedDisciplines));
    }
  }, []);

  // Function to get the username by user_id
  const getUsernameById = (userId: number): string => {
    const user = users.find((user) => user.user_id === userId);
    return user ? user.username : "Unknown"; // Default to "Unknown" if user not found
  };

  // Function to get the discipline name by discipline_id
  const getDisciplineById = (disciplineId: number): string => {
    const discipline = disciplines.find(
      (discipline) => discipline.discipline_id === disciplineId
    );
    return discipline ? discipline.discipline_name : "Unknown Discipline"; // Default to "Unknown Discipline" if discipline not found
  };

  // Function to handle the expand button click
  const handleExpandClick = (index: number) => {
    setExpandedTaskIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle between expanded and collapsed
  };

  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <TasksHeading heading={`Team Tasks`} />
      {teamTasks.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="gray">
          No pending tasks for other teams.
        </Typography>
      ) : (
        teamTasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 3,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              width: { xs: "330px", sm: "500px", md: "700px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { sm: "space-between" },
                backgroundColor: "#435870",
                color: "white",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                paddingX: "8px",
              }}
            >
              <Typography>
                <strong> Assigned By: </strong>
                {getUsernameById(task.assigned_by)}
              </Typography>
              <Typography>
                <strong> Task_ID: </strong>
                {task.task_id}
              </Typography>
              <Typography>
                <strong> Assigned To: </strong>
                {getDisciplineById(task.discipline_id)}
              </Typography>
            </Box>
            <Box
              sx={{
                paddingX: "8px",
                backgroundColor: "#E0EBF6",
                color: "black",
              }}
            >
              <Typography>
                <strong>Assignment Date and Time:</strong>
                {formatDateTime(task.assignment_dateTime)}
              </Typography>
            </Box>

            {/* Expand/Collapse Content with Smooth Transition */}
            <Collapse in={expandedTaskIndex === index} sx={{ padding: "12px" }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Task Description:
                </Typography>
                <Typography sx={{ width: { xs: "300px", sm: "400px" } }}>
                  {task.description}
                </Typography>
              </Box>
            </Collapse>

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
        ))
      )}
    </Box>
  );
};

export default TeamPatientPendingTasks;

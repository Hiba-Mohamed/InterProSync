import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Collapse,
  TextField,
} from "@mui/material";
import { User } from "../mockData/users";
import { CompletedTasksDisplayObjectType } from "../mockData/completedTasks";

// Function to format the date to YYYY/MM/DD HH:mm:ss
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

const CompletedUserTasks = ({
  userCompletedTasks,
}: {
  userCompletedTasks: CompletedTasksDisplayObjectType[];
}) => {
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(
    null
  );
  const [users, setUsers] = useState<User[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);
  const [userDiscipline, setUserDiscipline] = useState<number>(0);

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
      const user = JSON.parse(userDataString);
      setUserDiscipline(user.discipline_id);
    }
  }, []);

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

  const handleUndoTaskCompletion = (task_id: number, reason: string) => {
    // get the "tasks" item, "completedTasks" item, "undoneTasks" item from local storage
    // update the task with the same task_id status to "inprogress"
    // add to the undoneTasks item {undone_id: length+1, task_id: task_id, reason: reason, undone_dateTime: time and date now in this format "2025-01-12T10:30:00Z" }
  };

  const handleExpandClick = (index: number) => {
    setExpandedTaskIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "transparent",
          background: `#535D68`,
          WebkitBackgroundClip: "text",
          textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
          paddingY: "24px",
        }}
      >
        Completed {getDisciplineById(userDiscipline)} Tasks
      </Typography>
      {userCompletedTasks.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="gray">
          No completed tasks for your team.
        </Typography>
      ) : (
        userCompletedTasks.map((task, index) => (
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

            <Typography>
              Completion date/time and user:
              <br />
              {formatDateTime(task.completion_datetime)} |{" "}
              {getUsernameById(task.completed_by)}
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
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  gap: { xs: 2 },
                }}
              >
                <TextField
                  label="Reason"
                  type="Reason for Undo"
                  variant="outlined"
                  sx={{
                    width: { xs: "100%" },
                  }}
                />{" "}
                <Button
                  variant="outlined"
                  sx={{ color: "#DB944A", borderColor: "#DB944A" }}
                  onClick={handleUndoTaskCompletion(task.task_id)}
                >
                  Undo Completion
                </Button>
              </Box>
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
        ))
      )}
    </Box>
  );
};

export default CompletedUserTasks;

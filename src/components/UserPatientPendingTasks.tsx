import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { Box, Typography, Button, Divider, Collapse } from "@mui/material";
import { User } from "../mockData/users";

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

const UserPatientPendingTasks = ({ userTasks }: { userTasks: TaskType[] }) => {
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
        {getDisciplineById(userDiscipline)} Tasks
      </Typography>
      {userTasks.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="gray">
          No pending tasks for your team.
        </Typography>
      ) : (
        userTasks.map((task, index) => (
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
            <Typography>
              Assigned By: {getUsernameById(task.assigned_by)}
            </Typography>
            <Typography>
              Assigned To: {getDisciplineById(task.discipline_id)}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
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
                <Button variant="contained" sx={{ backgroundColor: "#749D61" }}>
                  Complete
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

export default UserPatientPendingTasks;

import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { Box, Typography, Button, Divider, Collapse } from "@mui/material";
import { User } from "../mockData/users";
import TasksHeading from "./TasksHeading";
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

const UserPatientPendingTasks = ({
  userTasks,
  atComplete,
}: {
  userTasks: TaskType[];
  atComplete: Function;
}) => {
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(
    null
  );
  const [users, setUsers] = useState<User[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);
  const [userDiscipline, setUserDiscipline] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<User>();

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
      console.log(user);
      // setUserUsername(user.username);
      setUserInfo(user);
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

  const handelconfirmComplete = (task_id: number) => {
    // Get the "tasks" item, "completedTasks" item, "undoneTasks" item from local storage
    // Update the task with the same task_id status to "inprogress"
    // Add to the undoneTasks item: {undone_id: length+1, task_id: task_id, reason: reason, undone_dateTime: time and date now}
    console.log(`Completing task ${task_id} `);

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const completedTasks = JSON.parse(
      localStorage.getItem("completedTasks") || "[]"
    );
    console.log(
      "Initial completed tasks array from local storage",
      completedTasks
    );
    // Update task status to "inprogress"
    const taskIndex = tasks.findIndex((task: any) => task.task_id === task_id);
    if (taskIndex > -1) {
      tasks[taskIndex].status = "complete";
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    const targetUser = users.find(
      (user) => user.username === userInfo?.username
    );
    console.log("targetUser: ", targetUser);
    if (targetUser) {
      console.log(targetUser.user_id);
      // Add the undone task to the undoneTasks array
      const newCompletedTask = {
        completed_id: completedTasks.length + 1,
        task_id: task_id,
        completion_datetime: new Date().toISOString(),
        completed_by: targetUser.user_id,
      };

      completedTasks.push(newCompletedTask);
      console.log("AFTER PUSHING NEW COMPLETE", completedTasks);
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
      atComplete();
    }
  };

  return (
    <Box>
      <TasksHeading heading={`${getDisciplineById(userDiscipline)} Tasks`}/>
      {userTasks.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="gray">
          No pending tasks for your team.
        </Typography>
      ) : (
        userTasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 3,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              width: { xs: "330px", sm: "600px", md: "700px" },
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
            {/* Using Collapse for expandable content */}
            <Collapse in={expandedTaskIndex === index} sx={{ padding: "12px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Task description:
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
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#749D61" }}
                  onClick={() => handelconfirmComplete(task.task_id)}
                >
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

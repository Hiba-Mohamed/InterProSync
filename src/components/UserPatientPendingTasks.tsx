import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import { Box, Typography, Button, Collapse, TextField } from "@mui/material";
import { User } from "../mockData/users";
import TasksHeading from "./TasksHeading";
import ErrorMessage from "./ErrorMessage";

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
  const [userInfo, setUserInfo] = useState<User | undefined>();
  const [showDeleteReasonInput, setShowDeleteReasonInput] =
    useState<boolean>(false);
  const [targetTaskOfDeletion, setTargetTaskOfDeletion] = useState<number>(0);
  const [DeletionReason, setDeletionReason] = useState<string>("");

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

  const handleConfirmComplete = (task_id: number) => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const completedTasks = JSON.parse(
      localStorage.getItem("completedTasks") || "[]"
    );

    // Update task status to "complete"
    const taskIndex = tasks.findIndex((task: any) => task.task_id === task_id);
    if (taskIndex > -1) {
      tasks[taskIndex].status = "complete";
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const targetUser = users.find(
      (user) => user.username === userInfo?.username
    );
    if (targetUser) {
      const newCompletedTask = {
        completed_id: completedTasks.length + 1,
        task_id: task_id,
        completion_datetime: new Date().toISOString(),
        completed_by: targetUser.user_id,
      };

      completedTasks.push(newCompletedTask);
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
      atComplete();
    }
  };

  const handleDeleteClick = (task_id: number) => {
    setShowDeleteReasonInput(true);
    setTargetTaskOfDeletion(task_id);
  };

  const handleConfirmDelete = (task_Id: number, reason: string) => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const closedTasks = JSON.parse(
      localStorage.getItem("closedTasks") || "[]"
    );

    // Update task status to "complete"
    const taskIndex = tasks.findIndex((task: any) => task.task_id === task_Id);
    if (taskIndex > -1) {
      tasks[taskIndex].status = "closed";
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const targetUser = users.find(
      (user) => user.username === userInfo?.username
    );
    if (targetUser) {
      const newclosedTask = {
        closed_id: closedTasks.length + 1,
        task_id: task_Id,
        closer_user_id: userInfo?.user_id,
        closer_reason: reason,
        closed_datetime: new Date().toISOString(),
      };

      closedTasks.push(newclosedTask);
      localStorage.setItem("closedTasks", JSON.stringify(closedTasks));
      atComplete();
    }
  };

  const handleCancelDeletion = () => {
    setDeletionReason("");
    setTargetTaskOfDeletion(0);
    setShowDeleteReasonInput(false);
  };

  return (
    <Box>
      <TasksHeading heading={`${getDisciplineById(userDiscipline)} Tasks`} />
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
                {targetTaskOfDeletion !== task.task_id && (
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
                    onClick={() => handleDeleteClick(task.task_id)}
                  >
                    Delete
                  </Button>
                )}

                {targetTaskOfDeletion === task.task_id && (
                  <Box>
                    <TextField
                      label="Reason"
                      type="text"
                      variant="outlined"
                      value={DeletionReason}
                      onChange={(e) => setDeletionReason(e.target.value)} // Update state when the text changes
                      sx={{
                        width: { xs: "100%" },
                      }}
                    />
                    <ErrorMessage errorMessage="Warning: Task deletion is permanent and cannot be undone. Please ensure you are deleting the task for valid reasons such as duplication, incorrect patient, or task error." />{" "}
                    <Box sx={{ marginTop: 2 }}>
                      <Button
                        variant="outlined"
                        sx={{
                          marginRight: 1,
                          borderColor: "#blue",
                          color: "#blue",
                          "&:hover": {
                            borderColor: "#C45E7D",
                            backgroundColor: "rgba(196, 94, 125, 0.1)",
                          },
                        }}
                        onClick={() => handleCancelDeletion()}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="error" // Use the "error" color for a red button
                        onClick={() =>
                          handleConfirmDelete(task.task_id, DeletionReason)
                        } // Pass the reason here
                        sx={{ width: "100%" }} // Make the button fill the width
                      >
                        Confirm Delete
                      </Button>
                    </Box>
                  </Box>
                )}
                {targetTaskOfDeletion !== task.task_id && (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#749D61" }}
                    onClick={() => handleConfirmComplete(task.task_id)}
                  >
                    Complete
                  </Button>
                )}
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

export default UserPatientPendingTasks;

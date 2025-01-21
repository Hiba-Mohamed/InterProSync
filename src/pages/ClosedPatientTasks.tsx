import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TaskType } from "../mockData/tasks";
import PatientPagesNavigationLocationTitle from "../components/PatientPagesNavigationLocationTitle";
import { PatientType } from "../mockData/patients";
import { ClosedTask } from "../mockData/closedTasks";
import NotSignedInInterface from "../components/NotSignedInInterface";

const ClosedPatientTasks = () => {
  interface ClosedTaskFullInfoType {
    closed_id: number;
    task_id: number;
    closer_user_id: number;
    closer_reason: string;
    closed_datetime: string; // ISO 8601 date-time string
    discipline_id: number;
    assigned_by: number; // ID of the user or team
    patient_id: number;
    assignment_dateTime: string; // ISO 8601 date-time string
    status: string; // e.g., "inprogress", "closed"
    description: string;
  }

  const { patient_idString } = useParams();
  const [patientData, setPatientData] = useState<PatientType | null>(null);
  const [closedTaskFullInfoArray, setClosedTaskFullInfoArray] = useState<
    ClosedTaskFullInfoType[]
  >([]); // Fix state type
  const [users, setUsers] = useState<any[]>([]);
  const [disciplines, setDisciplines] = useState<any[]>([]);
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [userDiscipline, setUserDiscipline] = useState<number>(0);

  const getNeededArrays = () => {
    const patientsString = localStorage.getItem("patients");
    const tasksString = localStorage.getItem("tasks");
    const closedTasksString = localStorage.getItem("closedTasks");
    const userDataString = localStorage.getItem("userData");
    const storedUsers = localStorage.getItem("users");
    const storedDisciplines = localStorage.getItem("disciplines");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (storedDisciplines) {
      setDisciplines(JSON.parse(storedDisciplines));
    }
    if (
      patientsString &&
      tasksString &&
      closedTasksString &&
      patient_idString &&
      userDataString
    ) {
      const patient_id = parseInt(patient_idString, 10); // Convert patient_idString to a number
      const patients: PatientType[] = JSON.parse(patientsString);
      const allTasks: TaskType[] = JSON.parse(tasksString);
      const allclosedTasks: ClosedTask[] = JSON.parse(closedTasksString);
      // console.log(allclosedTasks);
      const userData = JSON.parse(userDataString);
      setUserDiscipline(userData.discipline_id);
      const userExists = userData.username !== "";
      if (userExists) {
        setSignedIn(true);
      }
      const selectedPatient = patients.find(
        (patient) => patient.patient_id === patient_id
      );

      if (selectedPatient) {
        setPatientData(selectedPatient);

        const patientTasks = allTasks.filter(
          (task) => task.patient_id === patient_id
        );

        const patientSpecificClosedTasks = patientTasks.filter(
          (task) => task.status === "closed"
        );
        // console.log(patientSpecificClosedTasks);
        const getClosedBy = (task: TaskType): number | null => {
          const closedTask = allclosedTasks.find(
            (closedTask) => closedTask.task_id === task.task_id
          );
          return closedTask ? closedTask.closer_user_id : null;
        };
        const getClosedId = (task: TaskType): number | null => {
          const closedTask = allclosedTasks.find(
            (closedTask) => closedTask.task_id === task.task_id
          );
          return closedTask ? closedTask.closed_id : null;
        };

        const getClosingReason = (task: TaskType): string | null => {
          const closedTask = allclosedTasks.find(
            (closedTask) => closedTask.task_id === task.task_id
          );
          return closedTask ? closedTask.closer_reason : null;
        };

        const getClosingDateTime = (task: TaskType): string | null => {
          const closedTask = allclosedTasks.find(
            (closedTask) => closedTask.task_id === task.task_id
          );
          return closedTask ? closedTask.closed_datetime : null;
        };
        const formatTasksWithAllInfo = (tasks: TaskType[]): any[] => {
          return tasks.map((task) => ({
            ...task,
            closed_id: getClosedId(task),
            closer_user_id: getClosedBy(task),
            closer_reason: getClosingReason(task),
            closed_datetime: getClosingDateTime(task),
          }));
        };

        setClosedTaskFullInfoArray(
          formatTasksWithAllInfo(patientSpecificClosedTasks)
        );
      }
    }
  };

  useEffect(() => {
    getNeededArrays();
  }, [patient_idString, userDiscipline]);

  // const handleUserTaskUpdate = () => {
  //   getNeededArrays();
  // };

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

  const formatDateTime = (dateTime: string): string => {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  if (!patientData) {
    return (
      <Box textAlign="center" marginTop={8}>
        <Typography>Loading patient data...</Typography>
      </Box>
    );
  }

  // if (isLoading) {
  //   return (
  //     <Box
  //       sx={{
  //         minHeight: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  return signedIn ?( 
    patientData && (
      <Box sx={{ minHeight: "100vh" }}>
        <PatientPagesNavigationLocationTitle
          title="Deleted Tasks"
          patientData={patientData}
        />
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            textAlign: { xs: "center", sm: "left" },
            padding: 2,
          }}
        >
          Deleted tasks will remain permanently recorded in the patient's file.
          Tasks may be deleted due to duplication, incorrect assignment, or
          other valid reasons.
        </Typography>

        {closedTaskFullInfoArray.length === 0 ? (
          <Typography variant="h6" textAlign="center" color="gray">
            No Deleted tasks for this patient.
          </Typography>
        ) : (
          closedTaskFullInfoArray.map((task, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: 3,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                width: { xs: "330px", sm: "500px", md: "700px" },
                margin: "auto", // Center the box
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
                  <strong>Assigned By:</strong>{" "}
                  {getUsernameById(task.assigned_by)}
                </Typography>
                <Typography>
                  <strong>Task_ID:</strong> {task.task_id}
                </Typography>
                <Typography>
                  <strong>Assigned To:</strong>{" "}
                  {getDisciplineById(task.discipline_id)}
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingX: "8px",
                  backgroundColor: "#EDF2F7",
                  color: "black",
                }}
              >
                <Typography>
                  <strong>Assigned on:</strong>{" "}
                  {formatDateTime(task.assignment_dateTime)}
                </Typography>
                <Typography>
                  <strong>Closed on:</strong>{" "}
                  {formatDateTime(task.closed_datetime)}
                </Typography>
                <Typography>
                  <strong>Closed By:</strong>{" "}
                  {getUsernameById(task.closer_user_id)}
                </Typography>
                <Typography>
                  <strong>Closing Reason:</strong> {task.closer_reason}
                </Typography>
              </Box>

              {/* Expand/Collapse Content with Smooth Transition */}
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Task Description:
                </Typography>
                <Typography>{task.description}</Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>
    )
  ):(<NotSignedInInterface />);
};

export default ClosedPatientTasks;

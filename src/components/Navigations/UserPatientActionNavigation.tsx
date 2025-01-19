import { PatientType } from "../../mockData/patients"
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserPatientActionNavigation = ({patientData}:{patientData:PatientType}) => {
      const navigate = useNavigate();

  return (
    <Box textAlign="center" marginBottom={4} marginTop={0}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allow buttons to wrap
          justifyContent: "space-between", // Center buttons
          alignItems: "center", // Center the buttons horizontally
          padding: { xs: "12px", sm: "20px" },
          gap: { xs: 2, sm: 0 }, // Increase gap between buttons on smaller screens
          width: { xs: "344px", sm: "760px", md: "1200px", lg: "1280px" },
        }}
      >
        <Button
          variant="text"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            width: { xs: "30%", sm: "auto" }, // 30% width to fit 3 buttons per row on mobile
            textAlign: "center",
            marginBottom: { xs: "12px", sm: "0" },
            padding: { xs: "1px", sm: "10px" },
            textTransform: "capitalize",
            color: "#445972",
          }}
          onClick={() => navigate("/userPatientList")}
        >
          My Patients List
        </Button>
        <Button
          variant="text"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            width: { xs: "30%", sm: "auto" },
            textAlign: "center",
            marginBottom: { xs: "12px", sm: "0" },
            padding: { xs: "1px", sm: "10px" },
            textTransform: "capitalize",
            color: "#445972",
          }}
          onClick={() =>
            navigate(`/AssignTaskUnderPatient/${patientData.patient_id}`)
          }
        >
          Assign Task
        </Button>
        <Button
          variant="text"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            width: { xs: "30%", sm: "auto" },
            textAlign: "center",
            marginBottom: { xs: "12px", sm: "0" },
            padding: { xs: "1px", sm: "10px" },
            textTransform: "capitalize",
            color: "#445972",
          }}
          onClick={() =>
            navigate(`/patientPendingTasks/${patientData.patient_id}`)
          }
        >
          Pending Tasks
        </Button>
        <Button
          variant="text"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            width: { xs: "30%", sm: "auto" },
            textAlign: "center",
            marginBottom: { xs: "12px", sm: "0" },
            padding: { xs: "1px", sm: "10px" },
            textTransform: "capitalize",
            color: "#445972",
          }}
          onClick={() =>
            navigate(`/CompletedPatientTasks/${patientData.patient_id}`)
          }
        >
          Completed Tasks
        </Button>
        <Button
          variant="text"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            width: { xs: "30%", sm: "auto" },
            textAlign: "center",
            marginBottom: { xs: "12px", sm: "0" },
            padding: { xs: "1px", sm: "10px" },
            textTransform: "capitalize",
            color: "#445972",
          }}
          onClick={() =>
            navigate(`/ClosedPatientTasks/${patientData.patient_id}`)
          }
        >
          Closed Tasks
        </Button>
        <Button
          variant="text"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            width: { xs: "30%", sm: "auto" },
            textAlign: "center",
            padding: { xs: "1px", sm: "10px" },
            textTransform: "capitalize",
            color: "#445972",
          }}
          onClick={() =>
            navigate(`/UndonePatientTasks/${patientData.patient_id}`)
          }
        >
          Undone Tasks
        </Button>
      </Box>
    </Box>
  );
}

export default UserPatientActionNavigation
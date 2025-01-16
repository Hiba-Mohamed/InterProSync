import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import RoleDisplayComponent from "../components/GettingStarted/RoleDisplayComponent";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  stepContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  stepNumber: {
    marginRight: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  roleOption: {
    width: "150px",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid #ccc",
  },
  activeRole: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
  },
  inputField: {
    margin: theme.spacing(1),
    width: "200px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const SelectedWardsPatientList = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const roles = [
    { name: "Medical Doctor", color: "#8DADD2" },
    { name: "Registered Nurse", color: "#A8E6CF" },
    { name: "Physiotherapy", color: "#FFD8B0" },
    { name: "Registered Dietitian", color: "#B0D9FF" },
    { name: "Pharmacist", color: "#FFCBCB" },
    { name: "Manager", color: "#D4A5FF" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box textAlign="center" marginBottom={4}>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "30px", md: "40px" },
            fontFamily: "Inter, sans-serif",
            fontWeight: 900,
            color: "transparent",
            background: "#5D7EA4",
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
          }}
        >
          Select Patient List
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {/* Select All Wards Checkbox */}
        <Box sx={{ paddingLeft: "10px", paddingBottom: "10px" }}>
          <Checkbox
            // checked={
            //   locations
            //     .find((location) => location.hospitalName === selectedHospital)
            //     ?.wards.every((ward) => selectedWards.includes(ward)) || false
            // }
            // onChange={handleSelectAllPatients}
            sx={{
              color: "grey", // Default unchecked color
              "&.Mui-checked": {
                color: "#9CCE84", // Custom checked color
              },
            }}
          />
          <Typography
            sx={{
              display: "inline-block",
              marginLeft: "10px",
              color: "#183B65",
            }}
          >
            Select All Displayed Patients
          </Typography>
        </Box>
        {/* iterate over the location selected and display the patients for that location */}
        <Box></Box>

      </Box>
      <Button variant="contained" sx={{ backgroundColor: "#183B65" }}>
        Confirm Patient List
      </Button>
    </Box>
  );
};

export default SelectedWardsPatientList;

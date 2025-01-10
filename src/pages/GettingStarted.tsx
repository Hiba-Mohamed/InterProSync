import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

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
    color: theme.palette.primary.main,
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

const GettingStarted = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState<string>("Registered Nurse");

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const roles = [
    "Medical Doctor",
    "Registered Dietitian",
    "Registered Nurse",
    "Physiotherapy",
    "Pharmacist",
    "Manager",
  ];

  return (
    <div className={classes.root}>
      <Box>
        {/* Header */}
        <Box textAlign="center" marginBottom={4}>
          <Typography variant="h4">Getting Started</Typography>
        </Box>

        {/* Step 1: Select Your Role */}
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Typography variant="h6" className={classes.stepNumber}>
            1
          </Typography>
          <Typography variant="h6">Select Your Role</Typography>
        </Box>

        {/* Roles Grid */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          gap={2}
        >
          {roles.map((role, index) => (
            <Box
              key={index}
              className={`${classes.roleOption} ${
                selectedRole === role ? classes.activeRole : ""
              }`}
              onClick={() => handleRoleChange(role)}
            >
              {role}
            </Box>
          ))}
        </Box>

        {/* Step 2: Enter Login Info */}
        <Box display="flex" alignItems="center" marginY={2}>
          <Typography variant="h6" className={classes.stepNumber}>
            2
          </Typography>
          <Typography variant="h6">Enter Login Info</Typography>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          gap={2}
        >
          <TextField
            className={classes.inputField}
            label="Username"
            variant="outlined"
          />
          <TextField
            className={classes.inputField}
            label="Password"
            type="password"
            variant="outlined"
          />
        </Box>

        {/* Step 3: Login */}
        <Box display="flex" alignItems="center" marginY={2}>
          <Typography variant="h6" className={classes.stepNumber}>
            3
          </Typography>
          <Typography variant="h6">Login</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          <Button variant="contained" color="primary">
            Guest Login
          </Button>
          <Button variant="contained" color="secondary">
            User Login
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default GettingStarted;

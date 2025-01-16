import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import RoleDisplayComponent from "../components/GettingStarted/RoleDisplayComponent";
import ProgressBar from "../components/GettingStarted/ProgressBar";
import Fade from "@mui/material/Fade";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  stepContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    opacity: 0, // Initially invisible
    animation: `$slideIn 1s forwards`, // Apply the slide-in animation
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

const GettingStarted = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);

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

  // Show the progress bar after 1 second for demo purposes
  setTimeout(() => {
    setShowProgressBar(true);
  }, 200);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
          Getting Started <br />
          (Guests)
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"center" }}>
        {/* ProgressBar */}
        <Fade in={showProgressBar} timeout={1000}>
          <div>
            <ProgressBar />
          </div>
        </Fade>
        {/* Step 1: Select Your Role */}
        <Box>
          <Fade in={showProgressBar} timeout={1000}>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "24px", md: "30px" },
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  color: "transparent",
                  background: "#5D7EA4",
                  WebkitBackgroundClip: "text",
                  textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                  paddingTop: "40px",
                  paddingLeft: "20px",
                }}
              >
                Select Your Role
              </Typography>
            </Box>
          </Fade>

          {/* Roles Grid */}
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: { xs: "150px", sm: "110px" },
            }}
          >
            {roles.map((role) => (
              <RoleDisplayComponent
                key={role.name}
                roleDescription={role.name}
                roleColor={role.color}
                isSelected={selectedRole === role.name}
                onSelect={handleRoleChange}
              />
            ))}
          </Box>

          {/* Step 2: Enter Login Info */}
          <Fade in={showProgressBar} timeout={1000}>
          <Box
            display="flex"
            marginY={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              paddingLeft: { xs: "16px", sm: "20px" },
              paddingTop: { xs: "30px", sm: "12px" },
              gap: { xs: 4, sm: 12 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                color: "transparent",
                background: "#5D7EA4",
                WebkitBackgroundClip: "text",
                textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                textAlign: "start",
              }}
            >
              Select a Username
            </Typography>
          </Box>
          </Fade>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: { xs: "80px", sm: "100px" },
            }}
          >
            <TextField
              className={classes.inputField}
              label="Username"
              variant="outlined"
              sx={{
                width: { xs: "100%" },
              }}
            />
          </Box>

          {/* Step 3: Login */}
          <Fade in={showProgressBar} timeout={1000}>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              paddingLeft: "20px",
              paddingTop: { xs: "90px", sm: "0px", md: "30px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "24px", md: "30px" },
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                color: "transparent",
                background: "#5D7EA4",
                WebkitBackgroundClip: "text",
                textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
              }}
            >
              Login
            </Typography>
          </Box>
          </Fade>
          <Box
            display="flex"
            justifyContent="space-between"
            marginTop={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: "100px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "50px",
            }}
          >
            <Button variant="contained" sx={{ backgroundColor: "#8DADD2" }}>
              Guest Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GettingStarted;

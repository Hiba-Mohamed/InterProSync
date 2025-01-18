import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import RoleDisplayComponent from "../components/GettingStarted/RoleDisplayComponent";
import ProgressBar from "../components/GettingStarted/ProgressBar";
import Fade from "@mui/material/Fade";
import { hospitals } from "../mockData/hospitals";
import { wards } from "../mockData/wards";
import { rooms } from "../mockData/rooms";
import { patients } from "../mockData/patients";
import { closedTasks } from "../mockData/closedTasks";
import { completedTasks } from "../mockData/completedTasks";
import { disciplines } from "../mockData/disciplines";
import { tasks } from "../mockData/tasks";
import { undoneTasks } from "../mockData/undoneTasks";
import { userData } from "../mockData/userData";
import { users } from "../mockData/users";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/ErrorMessage";



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
  let navigate = useNavigate();
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [emptyRoleErrorMessage, setEmptyRoleErrorMessage] =
    useState<string>("");
  const [emptyUsernameErrorMessage, setEmptyUsernameErrorMessage] =
    useState<string>("");

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const roles = [
    { name: "Medical Doctor", color: "#8DADD2", discipline_id: 2 },
    { name: "Registered Nurse", color: "#A8E6CF", discipline_id: 1 },
    { name: "Physiotherapy", color: "#FFD8B0", discipline_id: 3 },
    { name: "Registered Dietitian", color: "#B0D9FF", discipline_id: 4 },
    { name: "Pharmacist", color: "#FFCBCB", discipline_id: 5 },
    { name: "Manager", color: "#D4A5FF", discipline_id: 6 },
  ];

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  

  const handleGuestLogin = () => {

    if (!selectedRole && username.trim() === "") {
      setEmptyRoleErrorMessage(
        "You did not select a role. Please Select Your Role !"
      );
      setEmptyUsernameErrorMessage(
        "Username is empty. Please enter a username to proceed !"
      );
      return; // Prevent further action if the role is not selected
    }
    else{
    if (username.trim() === "") {
      setEmptyUsernameErrorMessage(
        "Username is empty. Please enter a username to proceed !"
      );
      setEmptyRoleErrorMessage("")
      return; // Prevent further action if the username is empty
    }
    else{
    if (!selectedRole) {
      setEmptyRoleErrorMessage(
        "You did not select a role. Please Select Your Role !"
      );
      setEmptyUsernameErrorMessage("")
      return; // Prevent further action if the role is not selected
    }
    else{
       setEmptyRoleErrorMessage("")
       setEmptyUsernameErrorMessage("")
    // Find the selected role
    const selectedRoleData = roles.find((role) => role.name === selectedRole);

    // If the role is valid, update userData with the discipline_id
    if (selectedRoleData) {
      const updatedUserData = {
        ...userData,
        userName: username,
        discipline_id: selectedRoleData.discipline_id, // Add discipline_id here
      };

      // Store the updated user data in localStorage
      localStorage.setItem("userData", JSON.stringify(updatedUserData));

      // Optionally, you could redirect to another page or handle further logic
      console.log("Logged in as:", username);
      navigate("/wardSelection");
    }

    }

    }

  };}

  useEffect(() => {
    // Check if the user data already exists in localStorage
    const existingUserData = localStorage.getItem("userData");

    if (!existingUserData) {
      // Store mock data only if userData is not already in localStorage
      localStorage.setItem("hospitals", JSON.stringify(hospitals));
      localStorage.setItem("wards", JSON.stringify(wards));
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("rooms", JSON.stringify(rooms));
      localStorage.setItem("patients", JSON.stringify(patients));
      localStorage.setItem("closedTasks", JSON.stringify(closedTasks));
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
      localStorage.setItem("disciplines", JSON.stringify(disciplines));
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("undoneTasks", JSON.stringify(undoneTasks));

      // Check if userData is empty and set default only if it's empty
      const updatedUserData = { ...userData, userName: username || "" };
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }

    // Show the progress bar after 1 second for demo purposes
    setTimeout(() => {
      setShowProgressBar(true);
    }, 200);
  }, [username]); // The empty array ensures this runs only once when the component mounts

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
        minHeight: "100vh",
        marginBottom: "500px",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
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
              value={username}
              onChange={handleUsernameChange}
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
          {emptyRoleErrorMessage === "" ? (
            ""
          ) : (
            <ErrorMessage errorMessage={emptyRoleErrorMessage} />
          )}
          {emptyUsernameErrorMessage && (
            <ErrorMessage errorMessage={emptyUsernameErrorMessage} />
          )}
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
            <Button
              variant="contained"
              sx={{ backgroundColor: "#8DADD2" }}
              onClick={handleGuestLogin}
            >
              Guest Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GettingStarted;

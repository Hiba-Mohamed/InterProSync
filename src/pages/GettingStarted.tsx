import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import RoleDisplayComponent from "../components/GettingStarted/roleDisplayComponent";

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

const GettingStarted = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState<string>("Registered Nurse");

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  const roles = [
    { name: "Medical Doctor", color: "#699DDA" },
    { name: "Registered Nurse", color: "#72CAA9" },
    { name: "Physiotherapy", color: "#FFC181" },
    { name: "Registered Dietitian", color: "#85C4FF" },
    { name: "Pharmacist", color: "#FF8484" },
    { name: "Manager", color: "#C27FFF" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: {xs:"", sm:"center"},
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
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
          Getting Started
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="images/progressBarComponents/firstBarComponent.png"
            sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
          />
          <Box
            component="img"
            src="images/progressBarComponents/first-step.png"
            sx={{ width: "50px", padding: "4px" }}
            // sx={{ width: { xs: "40px", sm: "40px", md: "40px" } }}
          />
          {/* the area between the two circles */}
          <Box
            component="img"
            src="images/progressBarComponents/under-circle.png"
            sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
          />
          <Box
            component="img"
            src="images/progressBarComponents/between.png"
            sx={{
              width: { xs: "8px", sm: "10px", md: "12px" },
              height: { xs: "500px", sm: "290px", md: "310px" },
            }}
          />
          <Box
            component="img"
            src="images/progressBarComponents/above-circle.png"
            sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
          />
          {/* ------------------------------------- */}
          <Box
            component="img"
            src="images/progressBarComponents/second-step.png"
            sx={{ width: "50px", padding: "4px" }}
          />
          {/* the area between the two circles */}
          <Box
            component="img"
            src="images/progressBarComponents/under-circle.png"
            sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
          />
          <Box
            component="img"
            src="images/progressBarComponents/betweenShort.png"
            sx={{
              width: { xs: "8px", sm: "10px", md: "12px" },
              height: { xs: "200px", sm: "120px", md: "140px" },
            }}
          />
          <Box
            component="img"
            src="images/progressBarComponents/above-circle.png"
            sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
          />
          {/* ------------------------------------- */}
          <Box
            component="img"
            src="images/progressBarComponents/third-step.png"
            sx={{ width: "50px", padding: "4px" }}
          />
          <Box
            component="img"
            src="images/progressBarComponents/lastBarComponent.png"
            sx={{ width: { xs: "8px", sm: "10px", md: "12px" } }}
          />
        </Box>

        {/* Step 1: Select Your Role */}
        <Box>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "24px", md: "30px" },
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

          {/* Roles Grid */}
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: "100px",
            }}
          >
            {roles.map((role, index) => (
              <RoleDisplayComponent
                roleDescription={role.name}
                roleColor={role.color}
              />
            ))}
          </Box>

          {/* Step 2: Enter Login Info */}
          <Box
            display="flex"
            alignItems="center"
            marginY={2}
            sx={{
              paddingLeft: "20px",
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
              Enter Login Info
            </Typography>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: "100px",
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
            <TextField
              className={classes.inputField}
              label="Password"
              type="password"
              variant="outlined"
              sx={{
                width: { xs: "100%" },
              }}
            />
          </Box>

          {/* Step 3: Login */}
          <Box
            display="flex"
            alignItems="center"
            marginY={2}
            sx={{
              paddingLeft: "20px",
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
          <Box
            display="flex"
            justifyContent="space-between"
            marginTop={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: "100px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
            }}
          >
            <Button variant="contained" sx={{ backgroundColor: "#8DADD2" }}>
              Guest Login
            </Button>
            <Button variant="outlined" sx={{ color: "#183B65" }}>
              User Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GettingStarted;

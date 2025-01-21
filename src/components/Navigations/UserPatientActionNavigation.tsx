import { useState } from "react";
import { PatientType } from "../../mockData/patients";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useNavigate } from "react-router-dom";

const UserPatientActionNavigation = ({
  patientData,
}: {
  patientData: PatientType;
}) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const menuItems = [
    { label: "My Patients List", route: "/userPatientList" },
    {
      label: "Assign Task",
      route: `/AssignTaskUnderPatient/${patientData.patient_id}`,
    },
    {
      label: "Pending Tasks",
      route: `/patientPendingTasks/${patientData.patient_id}`,
    },
    {
      label: "Completed Tasks",
      route: `/CompletedPatientTasks/${patientData.patient_id}`,
    },
    {
      label: "Deleted Tasks",
      route: `/ClosedPatientTasks/${patientData.patient_id}`,
    },
    {
      label: "Ward Selection",
      route: `/wardSelection`,
    },
    // {
    //   label: "Undone Tasks",
    //   route: `/UndonePatientTasks/${patientData.patient_id}`,
    // },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      {/* Hamburger Menu for Mobile */}
      <Box
        sx={{
          display: { xs: "flex", sm:"none" },
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleDrawerToggle}  sx={{ background: "linear-gradient(to right,rgb(39, 94, 149) ,rgb(146, 170, 195))", borderRadius:"0px", borderBottomLeftRadius:"5px", paddingY:"2px", marginBottom:"6px"}}>
          <Typography sx={{fontSize:"12px", color:"white"}}>Patient Pages</Typography>
          <AssignmentIndIcon sx={{color:"white"}} />
        </IconButton>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.route);
                  setDrawerOpen(false); // Close drawer after navigation
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Desktop Buttons */}
      <Box
        sx={{
          backgroundColor: "#E1EFFF",
          display: { xs: "none", sm: "flex" }, // Show buttons only on larger screens
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, sm: 0 },
          // width: { xs: "344px", sm: "760px", md: "1200px", lg: "1280px" },
        }}
      >
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="text"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "10px", sm: "10px", md: "12px" },
              width: { xs: "30%", sm: "auto" },
              textAlign: "center",
              marginBottom: { xs: "12px", sm: "0" },
              textTransform: "capitalize",
              color: "black",
            }}
            onClick={() => navigate(item.route)}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default UserPatientActionNavigation;

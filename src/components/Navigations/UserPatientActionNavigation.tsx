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
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DeleteIcon from "@mui/icons-material/Delete";
import WardIcon from "@mui/icons-material/Hotel";
import AssignmentIcon from "@mui/icons-material/Assignment"; // For Assign Task
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
    {
      label: "My Patients List",
      route: "/userPatientList",
      icon: <RecentActorsIcon />,
    },
    {
      label: "Assign Task",
      route: `/AssignTaskUnderPatient/${patientData.patient_id}`,
      icon: <AssignmentIcon />, // Assignment icon for Assign Task
    },
    {
      label: "Pending Tasks",
      route: `/patientPendingTasks/${patientData.patient_id}`,
      icon: <AccessTimeFilledIcon />, // Time icon for Pending Tasks
    },
    {
      label: "Completed Tasks",
      route: `/CompletedPatientTasks/${patientData.patient_id}`,
      icon: <CheckCircleIcon/>,
    },
    {
      label: "Deleted Tasks",
      route: `/ClosedPatientTasks/${patientData.patient_id}`,
      icon: <DeleteIcon />,
    },
    {
      label: "Ward Selection",
      route: `/wardSelection`,
      icon: <WardIcon />,
    },
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
          display: { xs: "flex", sm: "none" },
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            borderRadius: "6px",
            paddingX: "10px", // Balanced padding for a more subtle feel
            boxShadow: "none", // No shadow for a cleaner look
            "&:hover": {
              background:
                "linear-gradient(to right, rgb(39, 94, 149), rgb(130, 160, 190))", // Slightly muted hover effect
            },
          }}
        >
     
          <AssignmentIndIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            boxShadow: "none", // Remove the paper shadow completely
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.route);
                  setDrawerOpen(false); // Close drawer after navigation
                }}
                sx={{
                  backgroundColor: "white",
                  marginY: "24px",
                  borderTopRightRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {item.icon}
                  <ListItemText primary={item.label} />
                </Box>
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

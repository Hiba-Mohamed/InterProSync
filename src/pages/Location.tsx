import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import ProgressBar from "../components/LocationPage/ProgressBar";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

const Location = () => {
  const classes = useStyles();
  const [selectedHospital, setSelectedHospital] = useState("Hospital 1");
  const [selectedWards, setSelectedWards] = useState<string[]>([]);

  const locations = [
    {
      hospitalName: "Hospital 1",
      wards: ["Ward 11", "Ward 12", "Ward 13", "Ward 14", "Ward 15"],
    },
    {
      hospitalName: "Hospital 2",
      wards: ["Ward 21", "Ward 22", "Ward 23", "Ward 24", "Ward 25"],
    },
  ];

  const handleHospitalSelect = (hospitalName: string) => {
    setSelectedHospital(hospitalName);
    setSelectedWards([]); // Clear wards selection when switching hospitals
  };

  const handleWardToggle = (ward: string) => {
    setSelectedWards((prevWards) => {
      if (prevWards.includes(ward)) {
        return prevWards.filter((w) => w !== ward);
      } else {
        return [...prevWards, ward];
      }
    });
  };

  const handleSelectAllWards = () => {
    const allWards = locations.find(
      (location) => location.hospitalName === selectedHospital
    )?.wards;
    if (allWards) {
      setSelectedWards((prevWards) => {
        return prevWards.length === allWards.length ? [] : allWards;
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
        minHeight: "100vh",
        paddingBottom: "500px",
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
          Select Location
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <ProgressBar />

        {/* Step 1: Select Your Role */}
        <Box>
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
              paddingBottom: "30px",
            }}
          >
            Select Hospital
          </Typography>

          {/* Hospitals Grid */}
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            sx={{ paddingLeft: "20px", paddingBottom: "80px" }}
          >
            {locations.map((location) => (
              <Box
                key={location.hospitalName}
                onClick={() => handleHospitalSelect(location.hospitalName)}
                sx={{
                  backgroundColor: "white",
                  outline:
                    selectedHospital === location.hospitalName
                      ? "4px solid #9CCE84"
                      : "transparent",

                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  height: { xs: "30px", sm: "40px", md: "50px" },
                  width: { xs: "200px", sm: "250px", md: "300px" },
                  borderRadius: "3px",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    color: "transparent",
                    background: "#5D7EA4",
                    WebkitBackgroundClip: "text",
                    textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                    paddingTop: "30px",
                    paddingLeft: "20px",
                    paddingBottom: "30px",
                  }}
                >
                  {location.hospitalName}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Step 2: Display Wards for Selected Hospital */}
          {selectedHospital && (
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "30px" },
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  color: "transparent",
                  background: "#5D7EA4",
                  WebkitBackgroundClip: "text",
                  textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                  paddingLeft: "20px",
                }}
              >
                Select Ward
              </Typography>

              {/* Select All Wards Checkbox */}
              <Box sx={{ paddingLeft: "20px", paddingBottom: "10px" }}>
                <Checkbox
                  checked={
                    locations
                      .find(
                        (location) => location.hospitalName === selectedHospital
                      )
                      ?.wards.every((ward) => selectedWards.includes(ward)) ||
                    false
                  }
                  onChange={handleSelectAllWards}
                  sx={{
                    color: "grey", // Default unchecked color
                    "&.Mui-checked": {
                      color: "#9CCE84", // Custom checked color
                    },
                  }}
                />
                <Typography
                  sx={{ display: "inline-block", marginLeft: "10px" }}
                >
                  Select All Wards
                </Typography>
              </Box>

              {/* Wards Grid with Checkboxes */}
              <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
                gap={2}
                sx={{
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  height: { xs: "270px", sm: "170px", md: "190px" }, // Fixed height
                  overflowY: "auto", // Scrollable if content overflows
                  border: "1px solid #ECF3FA", // Optional: Add a border for clarity
                  borderRadius: "8px", // Optional: Rounded corners
                  backgroundColor: "#ECF3FA",
                }}
              >
                {locations
                  .find(
                    (location) => location.hospitalName === selectedHospital
                  )
                  ?.wards.map((ward) => (
                    <Box
                      key={ward}
                      sx={{
                        backgroundColor: "white",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        height: { xs: "30px", sm: "40px", md: "50px" },
                        width: { xs: "200px", sm: "250px", md: "300px" },
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      <Checkbox
                        checked={selectedWards.includes(ward)}
                        onChange={() => handleWardToggle(ward)}
                        sx={{
                          color: "grey", // Default unchecked color
                          "&.Mui-checked": {
                            color: "#9CCE84", // Custom checked color
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "18px", sm: "20px", md: "24px" },
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          color: "transparent",
                          background: "#5D7EA4",
                          WebkitBackgroundClip: "text",
                          textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
                          paddingTop: "40px",
                          paddingLeft: "20px",
                          paddingBottom: "30px",
                        }}
                      >
                        {ward}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}

          {/* Step 3: Confirm */}
          <Box
            display="flex"
            justifyContent="space-between"
            marginTop={2}
            sx={{
              paddingLeft: "20px",
              paddingBottom: "20px",
              paddingTop: "40px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "20px",
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
              Confirm
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#8DADD2" }}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Location;

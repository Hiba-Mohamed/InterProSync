import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid";
import { wards } from "../mockData/wards";

const WardSelection = () => {
  const [selectedwards, setSelectedwards] = useState<string[]>([]);

  const handleSelectAllwards = () => {
    if (selectedwards.length === wards.length) {
      setSelectedwards([]);
    } else {
      setSelectedwards(wards.map((ward) => ward.ward_id));
    }
  };

  const handleSelectward = (id: string) => {
    setSelectedwards((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  // Group wards by hospital_id
  const groupedWards = wards.reduce(
    (acc, ward) => {
      const hospitalId = ward.hospital_id;
      if (!acc[hospitalId]) {
        acc[hospitalId] = [];
      }
      acc[hospitalId].push(ward);
      return acc;
    },
    {} as { [key: number]: typeof wards }
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { xs: "40px", sm: "50px", md: "60px" },
        minHeight: "100vh",
        marginBottom: "500px",
      }}
    >
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
          Ward Selection
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "flex-end" },
          width: "100%",
          padding: "12px",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleSelectAllwards}
          sx={{
            color: "#183B65",
            borderColor: "#183B65",
            "&:hover": {
              borderColor: "#9CCE84",
              backgroundColor: "#9CCE84",
              color: "white",
            },
          }}
        >
          {selectedwards.length === wards.length
            ? "Deselect All"
            : "Select All Displayed Wards"}
        </Button>
      </Box>
      <Box sx={{ width: "100%", marginTop:"40px" }}>
        {Object.entries(groupedWards).map(([hospitalId, wards]) => (
          <Box key={hospitalId} sx={{ marginBottom: "100px" }}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginBottom: "30px" , fontWeight:800}}
            >
              Hospital {hospitalId}
            </Typography>
            <Grid2 container spacing={2}>
              {wards.map((ward) => (
                <Grid2
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={ward.ward_id}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="outlined" // Keep this as outlined for the base style
                    onClick={() => handleSelectward(ward.ward_id)}
                    sx={{
                      width: "80%",
                      textAlign: "center",
                      fontSize:{xs:"18px", md:"22px"},
                      backgroundColor: "#F5FAFF",
                      color:"#445972",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      borderWidth:"4px",
                      borderColor: selectedwards.includes(ward.ward_id)
                        ? "#9CCE84"
                        : "transparent",
                      
                      textTransform: "none", // Ensure text is not all caps
                      "&:hover": {},
                    }}
                  >
                    {ward.ward_name}
                  </Button>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#183B65", marginTop: "20px" }}
      >
        Confirm Ward List
      </Button>
    </Box>
  );
};

export default WardSelection;

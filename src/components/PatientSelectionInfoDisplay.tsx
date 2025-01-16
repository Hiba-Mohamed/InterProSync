import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PatientSelectionInfoDisplayProps {
  roomNumber: number;
  patientName: string;
  healthNumber: number;
  isSelected: boolean; 
  onClick: () => void; 
}

const PatientSelectionInfoDisplay: React.FC<
  PatientSelectionInfoDisplayProps
> = ({ roomNumber, patientName, healthNumber, isSelected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        outline: isSelected ? "3px solid #9CCE84" : "transparent",
        cursor: "pointer",
        transition: "outline 0.3s",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#A5B8CE",
          color: "white",
          paddingX: "12px",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>Room</Typography>
        <Typography sx={{ fontWeight: 700 }}>{roomNumber}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          color: "#183B65",
          width: "200px",
          paddingLeft: "12px",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>{patientName}</Typography>
        <Typography sx={{ fontWeight: 700 }}>HN-{healthNumber}</Typography>
      </Box>
    </Box>
  );
};

export default PatientSelectionInfoDisplay;

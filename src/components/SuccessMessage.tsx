import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { FaRegCheckCircle } from "react-icons/fa";

const SuccessMessage = ({successMessage}:{successMessage:string}) => {
  return (
    <Box
      sx={{
        border: "1px solid green", // Red border for the error message
        padding: "2px",
        borderRadius: "5px",
        marginTop: "10px",
        display: "flex", // Ensures icon and message align side by side
        alignItems: "center", // Vertically aligns the icon with the text
      }}
    >
      <FaRegCheckCircle
        color="green"
        style={{ marginRight: "8px", fontSize: "30px", padding:2 }}
      />{" "}
      {/* React icon */}
      <Typography color="success" variant="body1">
        {" "}
        {/* Using MUI's color variant */}
        {successMessage}
      </Typography>{" "}
    </Box>
  );
};

export default SuccessMessage;

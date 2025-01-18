import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { AiOutlineWarning } from "react-icons/ai";

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Box
      sx={{
        border: "1px solid red", // Red border for the error message
        padding: "8px",
        borderRadius: "5px",
        marginTop: "10px",
        display: "flex", // Ensures icon and message align side by side
        alignItems: "center", // Vertically aligns the icon with the text
      }}
    >
      <AiOutlineWarning
        color="red"
        style={{ marginRight: "8px", fontSize: "40px" }}
      />{" "}
      {/* React icon */}
      <Typography color="error" variant="body1">
        {" "}
        {/* Using MUI's color variant */}
        {errorMessage}
      </Typography>{" "}
    </Box>
  );
};

export default ErrorMessage;

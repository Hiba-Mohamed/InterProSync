import { Typography } from "@mui/material";
const TasksHeading = ({heading}:{heading:string}) => {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: 800,
        color: "transparent",
        background: `#535D68`,
        WebkitBackgroundClip: "text",
        textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
        paddingY: "24px",
        paddingX: "12px",
      }}
    >
      {heading}
    </Typography>
  );
}

export default TasksHeading
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import SpeedOutlined from "@mui/icons-material/SpeedOutlined";
import { Box, Typography } from "@mui/material";

// Reusable component for styled "InterProSync" text
const InterProSyncText = () => (
  <>
    <span style={{ color: "#183B65", fontWeight: "bold" }}>InterPro</span>
    <span style={{ color: "#399E85", fontWeight: "bold" }}>Sync</span>
  </>
);

const FeaturesComponent = () => {
  const featuresObjectArray = [
    {
      title: "COMMUNICATION",
      text: (
        <>
          At <InterProSyncText /> , we prioritize seamless communication. Our
          platform ensures healthcare professionals can stay connected in
          real-time, allowing for clear and concise exchanges that reduce delays
          and enhance patient outcomes.
        </>
      ),
      color: "#399E85",
      image: "images/featuresImages/desktop/communication.png",
      icon: <QuestionAnswerOutlined />,
    },
    {
      title: "COLLABORATION",
      text: (
        <>
          Teamwork is crucial in healthcare. <InterProSyncText /> fosters
          collaboration by creating a shared space for professionals to work
          together, ensuring coordinated efforts across departments and
          improving the overall care process.
        </>
      ),
      color: "#183B65",
      image: "images/featuresImages/desktop/collaboration.png",
      icon: <PeopleAltOutlined />,
    },
    {
      title: "EFFICIENCY",
      text: (
        <>
          <InterProSyncText /> is designed to streamline workflows, reducing
          manual tasks and minimizing errors. With a focus on efficiency,
          healthcare teams can dedicate more time to patient care, improving
          outcomes.
        </>
      ),
      color: "#46B9B9",
      image: "images/featuresImages/desktop/efficiency.png",
      icon: <SpeedOutlined />,
    },
    {
      title: "INNOVATION",
      text: (
        <>
          We embrace technology to push healthcare forward. <InterProSyncText />{" "}
          incorporates cutting-edge tools that provide real-time updates and
          AI-driven insights, helping professionals stay ahead in an
          ever-changing environment.
        </>
      ),
      color: "#0B1C31",
      image: "images/featuresImages/desktop/innovation.png",
      icon: <AutoAwesome />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 8, md:12, lg:16 },
        px: 2,
        py: 8,
        alignItems: "center",
      }}
    >
      {featuresObjectArray.map((element, index) => (
        <Box
          key={index}
          sx={{ display: "flex", flexDirection: "row", gap: { xs: 2 } }}
        >
          <Box
            component="img"
            src={element.image}
            sx={{
              width: { xs: "40px", sm: "55px", md:"80px" },
              height: { xs: "150px", sm: "180px", md:"250px"},
            }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "30px", md:"40px" },
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                color: "transparent",
                background: element.color,
                WebkitBackgroundClip: "text",
                textShadow: "2px 5px 5px rgba(255, 255, 255, 0.4)",
              }}
            >
              {element.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "18px", md:"30px", },
                width: { xs: "310px", sm: "450px", md:"700px", lg:"1000px" },
              }}
            >
              {element.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FeaturesComponent;

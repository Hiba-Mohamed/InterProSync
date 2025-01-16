import { useState, useEffect } from "react";
import { Box, Typography, Zoom } from "@mui/material";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import QuestionAnswerOutlined from "@mui/icons-material/QuestionAnswerOutlined";
import SpeedOutlined from "@mui/icons-material/SpeedOutlined";

const InterProSyncText = () => (
  <>
    <span style={{ color: "#183B65", fontWeight: "bold" }}>InterPro</span>
    <span style={{ color: "#399E85", fontWeight: "bold" }}>Sync</span>
  </>
);

const FeaturesComponent = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const featureElements = document.querySelectorAll(".feature");

    featureElements.forEach((element, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
          incorporates cutting-edge tools that provide real-time updates, helping professionals stay ahead in an
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
        gap: { xs: 8, md: 12, lg: 16 },
        px: 2,
        py: 8,
        alignItems: "center",
      }}
    >
      {featuresObjectArray.map((element, index) => (
        <Zoom
          key={index}
          in={visibleIndexes.includes(index)}
          style={{ transitionDelay: `${index * 400}ms` }}
        >
          <Box
            className="feature"
            component="article"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 2 },
              p: 2,
              border: "2px solid transparent",
              borderRadius: "12px",
              "&:hover": {
                border: `2px solid ${element.color}`,
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
              <Box
                component="img"
                src={element.image}
                alt={`${element.title} illustration`}
                sx={{
                  width: { xs: "40px", sm: "55px", md: "80px" },
                  height: { xs: "150px", sm: "180px", md: "250px" },
                  objectFit: "contain",
                }}
              />

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "30px", md: "40px" },
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  color: "transparent",
                  background: element.color,
                  WebkitBackgroundClip: "text",
                  textShadow: "2px 5px 5px rgba(255, 255, 255, 0.4)",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {element.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "30px" },
                  width: {
                    xs: "310px",
                    sm: "450px",
                    md: "700px",
                    lg: "1000px",
                  },
                }}
              >
                {element.text}
              </Typography>
            </Box>
          </Box>
        </Zoom>
      ))}
    </Box>
  );
};

export default FeaturesComponent;

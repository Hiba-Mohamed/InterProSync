import { Box, Typography, Fade, Grow, Slide } from "@mui/material";

const About = () => {
  const InterProSyncText = () => (
    <>
      <span style={{ color: "#183B65", fontWeight: "bold" }}>InterPro</span>
      <span style={{ color: "#399E85", fontWeight: "bold" }}>Sync</span>
    </>
  );

  const aboutSectionsArray = [
    {
      title: (
        <>
          What is <InterProSyncText />
        </>
      ),
      text: (
        <>
          <InterProSyncText /> is a task management tool for interprofessional
          healthcare teams, enabling streamlined collaboration, task tracking,
          and communication. It centralizes updates and assignments, helping
          team members coordinate patient care more efficiently.
        </>
      ),
      color: "#183B65",
      image: "images/aboutPage/pic2.jpg",
    },
    {
      title: "Our Mission",
      text: (
        <>
          At <InterProSyncText />, our goal is to simplify and optimize the flow
          of communication within healthcare teams. By offering an intuitive
          interface and robust tools, we empower healthcare professionals to
          focus on what truly matters: patient care.
        </>
      ),
      color: "#1E5C45",
      image: "images/aboutPage/pic1.jpg",
    },
    {
      title: "Key Features",
      text: (
        <>
          <strong>Task Management: </strong>Organize and assign tasks to ensure
          nothing falls through the cracks.
          <br />
          <strong> Tablet Accessibility: </strong> Empower healthcare teams to
          easily carry and use tablets across different hospital wards, ensuring
          seamless connectivity and access to critical information on-the-go.
        </>
      ),
      color: "#399E85",
      image: "images/aboutPage/pic3.jpg",
    },
    {
      title: (
        <>
          Why <InterProSyncText />
        </>
      ),
      text: (
        <>
          Healthcare is a team effort, and communication gaps can lead to
          delays, errors, and compromised patient care. <InterProSyncText />{" "}
          bridges these gaps by offering a centralized platform for all team
          members to communicate and collaborate effectively, ensuring a
          smoother workflow and better patient outcomes.
        </>
      ),
      color: "#39949E",
      image: "images/aboutPage/pic4.jpg",
    },
    {
      title: "Get Involved",
      text: (
        <>
          Join us in revolutionizing healthcare communication. Whether you're a
          healthcare professional or an organization, <InterProSyncText />{" "}
          offers the tools you need to stay connected and improve patient care.
        </>
      ),
      color: "#0E414C",
      image: "images/aboutPage/pic5.png",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 8, sm: 16, md: 20 },
        py: { xs: 6, md: 22 },
        px: 1,
        alignItems: "center",
      }}
    >
      {aboutSectionsArray.map((element, index) => (
        <Box
          key={index}
          sx={{ display: "flex", flexDirection: "row", gap: { xs: 2 } }}
        >
          {/* Animation Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  backgroundColor: element.color,
                  borderTopLeftRadius: { xs: "8px", md: "20px" },
                  width: { xs: "20px", sm: "25px", md: "50px" },
                  height: { xs: "100px", sm: "80px", md: "150px" },
                }}
              ></Box>
            </Fade>
            <Grow in={true} timeout={1000}>
              <Box
                component="img"
                src={element.image}
                sx={{
                  borderRadius: "200px",
                  width: { xs: "80px", sm: "120px", md: "180px" },
                  height: { xs: "80px", sm: "120px", md: "180px" },
                }}
              />
            </Grow>
          </Box>

          {/* Title and Text */}
          <Slide direction="up" in={true} timeout={1500}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "30px", md: "40px" },
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  color: "transparent",
                  background: element.color,
                  WebkitBackgroundClip: "text",
                }}
              >
                {element.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "30px" },
                  width: {
                    xs: "250px",
                    sm: "500px",
                    md: "600px",
                    lg: "1000px",
                  },
                }}
              >
                {element.text}
              </Typography>
            </Box>
          </Slide>
        </Box>
      ))}
    </Box>
  );
};

export default About;

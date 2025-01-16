import { Box, Fade, Slide } from "@mui/material";
import WelcomeText from "./WelcomeText";
import ButtonsComponent from "./ButtonsComponent";
import IconsComponent from "./IconsComponent";

const TopHomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: 'url("background-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        animation: "fadeIn 2s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "column" },
          background: {
            xs: "linear-gradient(to bottom, rgba(245, 250, 255, 0.97)34%, rgba(97, 120, 146, 0.97)78%)",
            sm: "linear-gradient(to bottom, rgba(245, 250, 255, 0.97)20%, rgba(97, 120, 146, 0.97)75%)",
            lg: "linear-gradient(to bottom, rgba(245, 250, 255, 0.97)34%, rgba(97, 120, 146, 0.97)78%)",
          },
          gap: { xs: 4, sm: 8, md: 6, lg: 8 },
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Slide direction="up" in timeout={1000}>
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
              px: { sx: 4, sm: 8 },
              display: "flex",
              flexDirection: { xs: "column" },
              gap: { xs: "48px", sm: "48px" },
            }}
          >
            <WelcomeText />
            <ButtonsComponent />
          </Box>
        </Slide>
        <Fade in timeout={2000}>
          <IconsComponent />
        </Fade>
      </Box>
    </Box>
  );
};

export default TopHomePage;

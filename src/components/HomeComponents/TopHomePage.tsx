import WelcomeText from "./WelcomeText";
import ButtonsComponent from "./ButtonsComponent";
import IconsComponent from "./IconsComponent";
import { Box } from "@mui/material";

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
        }}
      >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "column" },
        background: {
          xs: "linear-gradient(to bottom, rgba(245, 250, 255, 0.97)34%, rgba(11, 29, 50, 0.97)78%)",
          sm: "linear-gradient(to bottom, rgba(245, 250, 255, 0.97)20%, rgba(11, 29, 50, 0.97)75%)",
          lg: "linear-gradient(to bottom, rgba(245, 250, 255, 0.97)34%, rgba(11, 29, 50, 0.97)78%)",
        },
        gap: { xs: 4, sm: 8, md: 6, lg: 8 },
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
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
      <IconsComponent />
    </Box>
    </Box>
  );
};

export default TopHomePage;

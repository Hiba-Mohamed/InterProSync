import { Box } from "@mui/material";
import FeaturesComponent from "../components/HomeComponents/FeaturesComponent";
import TopHomePage from "../components/HomeComponents/TopHomePage";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom:"300px"
        }}
      >
        <TopHomePage />
        <FeaturesComponent />
      </Box>
    </>
  );
};

export default Home;

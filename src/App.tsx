import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import NavBar from "./components/Navigations/NavBar";
import GettingStarted from "./pages/GettingStarted";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./pages/ComingSoon";
import Location from "./pages/Location";
import SelectedWardsPatientList from "./pages/SelectedWardsPatientList";
import WardSelection from "./pages/WardSelection";
import HospitalsPatientSelection from "./pages/HospitalsPatientSelection";
import UserPatientList from "./pages/UserPatientList";
import PatientPendingTasks from "./pages/PatientPendingTasks";
import CompletedPatientTasks from "./pages/CompletedPatientTasks";
import SearchCompletedTasks from "./pages/SearchCompletedTasks";
import SearchPendingTasks from "./pages/SearchPendingTasks";
import ClosedPatientTasks from "./pages/ClosedPatientTasks";
import UndonePatientTasks from "./pages/UndonePatientTasks";
import AssignTaskUnderPatient from "./pages/AssignTaskUnderPatient";
import ScrollToTop from "./components/ScrollToTop";
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif', // Apply Inter font globally
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(to right, #F6F6F6, #ECF3FA)", // Gradient from left to right
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          overflowX: "hidden", // Prevents horizontal scrolling
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures global typography */}
      <Box sx={{ minHeight: "100vh" }}>
        {" "}
        {/* Ensure min height covers full screen */}
        <>
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/getStarted" element={<GettingStarted />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
            <Route path="/location" element={<Location />} />
            <Route
              path="/SelectedWardsPatientList"
              element={<SelectedWardsPatientList />}
            />
            <Route path="/wardSelection" element={<WardSelection />} />
            <Route
              path="/HospitalsPatientSelection"
              element={<HospitalsPatientSelection />}
            />
            <Route path="/userPatientList" element={<UserPatientList />} />
            <Route
              path="/patientPendingTasks/:patient_idString"
              element={<PatientPendingTasks />}
            />
            <Route
              path="/CompletedPatientTasks/:patient_idString"
              element={<CompletedPatientTasks />}
            />
            <Route
              path="/SearchCompletedTasks/:patient_idString"
              element={<SearchCompletedTasks />}
            />
            <Route
              path="/SearchPendingTasks/:patient_idString"
              element={<SearchPendingTasks />}
            />
            <Route
              path="/ClosedPatientTasks/:patient_idString"
              element={<ClosedPatientTasks />}
            />
            <Route
              path="/UndonePatientTasks/:patient_idString"
              element={<UndonePatientTasks />}
            />
            <Route
              path="/AssignTaskUnderPatient/:patient_idString"
              element={<AssignTaskUnderPatient />}
            />
          </Routes>
          <Footer />
        </>
      </Box>
    </ThemeProvider>
  );
}

export default App;

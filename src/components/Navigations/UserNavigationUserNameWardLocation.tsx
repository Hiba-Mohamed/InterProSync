import { Box, Typography} from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useTheme, useMediaQuery } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { UserData } from "../../mockData/userData";
import { WardType } from "../../mockData/wards";

const UserNavigationUserNameWardLocation = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [userName, setUserName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  useEffect(() => {

    const userDataString = localStorage.getItem("userData");
    const wardsString = localStorage.getItem("wards");

    if (userDataString && wardsString) {
      let locationList = "";
      const userData: UserData = JSON.parse(userDataString);
      const allWards: WardType[] = JSON.parse(wardsString);
    const getWardName = (ward_id: string) => {
      const ward = allWards.find((ward: WardType) => ward.ward_id === ward_id);
      return ward ? ward.ward_name : "Unknown";
    };
      const userExists = userData.username !== "";
      if (userExists) {
        setUserName(userData.username);
      }
      //   if (userData.chosenWardOrWards.length > 7) {
      //     setLocation("Multi Wards");
      //   }
      //   if(userData.chosenWardOrWards.length >1){

      //   }
      for (let i = 0; i < userData.chosenWardOrWards.length; i++) {
        const wardName = getWardName(userData.chosenWardOrWards[i]);
        // console.log(wardName)
        const newLocationList = locationList + wardName + " | ";
        locationList = newLocationList;
        // console.log(locationList)
      }
      setLocation(locationList)

    }
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "start", sm: "start" },
        background: {
          xs: "linear-gradient(to right,rgb(39, 94, 149) ,rgb(146, 170, 195))",
          sm: "linear-gradient(to right,rgb(39, 94, 149) ,rgb(146, 170, 195))",
        },
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 1, sm: 2, lg: 2 },
          justifyContent: "center",
          padding: { sm: "8px" },
          borderBottomRightRadius: { sm: "5px" },
        }}
      >
        <AccountCircleIcon
          fontSize={"medium"}
          style={{ color: isSmallScreen ? "white" : "white",paddingRight:isSmallScreen? "4px":"0px"  }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 400,
            color: { xs: "white", sm: "white" },
            background: `white`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { xs: "16px", sm: "12px", lg: "16px" },
          }}
        >
          {userName}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row-reverse", sm: "row" },
          gap: { xs: 1, sm: 2, lg: 2 },
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "0px", sm: "8px" },
          borderBottomLeftRadius: { sm: "5px" },
        }}
      >
        {" "}
        <Typography
          sx={{
            textAlign: "end",
            fontWeight: 400,
            color: { xs: "white", sm: "white" },
            background: `white`,
            WebkitBackgroundClip: "text",
            textShadow: "2px 5px 5px rgba(255, 255, 255, 0.3)",
            fontSize: { xs: "10px", sm: "10px", lg: "12px" },
            width: { xs: "265px", sm: "350px" },
          }}
        >
          {location}
        </Typography>
        <LocationCityIcon
          fontSize={"medium"}
          style={{ color: isSmallScreen ? "white" : "white", paddingRight:isSmallScreen? "4px":"0px" }}
        />
      </Box>
    </Box>
  );
};

export default UserNavigationUserNameWardLocation;

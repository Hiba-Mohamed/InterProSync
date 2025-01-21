import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
          gap: { xs: 1 },
          paddingTop: { xs: "80px" },
          paddingBottom: { xs: "80px" },
          px: 2,
          background:
            "linear-gradient(to right, #F6F6F6, rgba(141, 173, 210, 0.2))",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
            gap: { xs: 2 },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="images/logo.png"
            alt="Responsive"
            sx={{
              width: { xs: "50px" }, // Image takes full width of its container
              height: "auto", // Maintains aspect ratio
              maxWidth: "500px", // Optional: limit maximum width
            }}
          />

          {/* Text on the right */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* InterproSync with bolder, wider font */}
            <Typography
              color="#183B65"
              variant="h5"
              component="div"
              sx={{
                fontWeight: 800, // Increase font weight for a thicker look
                fontStretch: "ultra-condensed", // Makes the letters appear fatter horizontally
                // Increase letter spacing to make it wider
                width: "100%", // Make sure the text takes full width
                textAlign: "left",
                fontSize: { xs: "24px", sm: "20px" },
              }}
            >
              Interpro
              <span style={{ color: "#399E85" }}>Sync</span>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "10px", sm: "9px" },
                fontWeight: 800,
                width: "100%",
                textAlign: "left",
              }}
              color="#000000"
            >
              Connecting Healthcare Teams
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: { xs: "11px" } }}>
          <strong>Designed and Created by:</strong> Hiba Mohamed
        </Typography>
        <Typography sx={{ fontSize: { xs: "11px" }, textAlign: "center" }}>
          <strong>Credits: </strong> Some icons are sourced from Icon8 Figma
          plugin, and images used in this application are sourced from Unsplash.
        </Typography>
        <Typography sx={{ fontSize: { xs: "11px" } }}>
          <strong>Disclaimer: </strong> Data used for guest login is mock data.
        </Typography>
        <Typography sx={{ fontSize: { xs: "11px" } }}>
          <strong>Inquiries: </strong> hiba.mohamed.dev@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

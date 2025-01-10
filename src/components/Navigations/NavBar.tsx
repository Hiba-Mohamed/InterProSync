import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to right, #F6F6F6, rgba(141, 173, 210, 0.2))",
        boxShadow: "none", // Optional: Removes default shadow for a clean look
        height: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title / Logo */}
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          {/* Logo */}
          <img
            src="/public/logo.png" // Replace with the actual path to your logo image
            alt="Logo"
            style={{ width: "40px", height: "auto", marginRight: "4px" }}
          />

          {/* Text on the right */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%", // Make sure the box takes up the full available width
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
                fontSize: { xs: "16px", sm: "20px" },
              }}
            >
              Interpro
              <span style={{ color: "#399E85" }}>Sync</span>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "7px", sm: "9px" },
                fontWeight: 700,
                width: "100%",
                textAlign: "left",
              }}
              color="#000000"
            >
              Connecting Healthcare Teams
            </Typography>
          </Box>
        </Box>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            color: "#183B65",
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontWeight: 600 }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/comingSoon"
            sx={{ whiteSpace: "nowrap", fontWeight: 600 }}
          >
            Get Started
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ fontWeight: 600 }}
          >
            About
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon sx={{ color: "#183B65" }} />
          </IconButton>
          {/* Mobile Menu Items */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#FFFFFFF",
                color: "#183B65",
              },
            }}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
            <MenuItem
              component={Link}
              to="/comingSoon"
              onClick={handleMenuClose}
            >
              Get Started
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

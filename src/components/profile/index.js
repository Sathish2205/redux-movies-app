import * as React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserAuth from "./user";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const currentUser = UserAuth();

  // ✅ Firebase Config
  const firebaseConfig = {
    apiKey: "AIzaSyBNyiEVgev7_Xc1TIyNFYzX2ih2BB1SyCc",
    authDomain: "movies-app-8f3eb.firebaseapp.com",
    projectId: "movies-app-8f3eb",
    storageBucket: "movies-app-8f3eb.firebasestorage.app",
    messagingSenderId: "115533146705",
    appId: "1:115533146705:web:82a642ae002d69d707e670",
    measurementId: "G-78Z86TTQB4",
  };

  const auth = getAuth();

  // ✅ State for menu handling
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAnotherLogin = () => {
    handleMenuClose();
    navigate("/signin");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed Out Successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleAnotherLogin}>Login Another Account</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ✅ Desktop View */}
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
          <Typography sx={{ ml: 1, fontSize: "0.9rem" }}>
            {currentUser?.email}
          </Typography>
        </IconButton>
      </Box>

      {/* ✅ Mobile View */}
      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account menu"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen} // <-- ✅ Added click handler
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>

      {renderMenu}
    </Box>
  );
}

import * as React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPass1 } from "../slice/movieSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.movies.name);
  const email = useSelector((state) => state.movies.email);
  const pass1 = useSelector((state) => state.movies.pass1);

  const changeEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const changePass1 = (e) => {
    dispatch(setPass1(e.target.value));
  };

  const onClickLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass1)
      .then(() => {
        // alert("Logged In Successfully")
        toast.success("Logged In Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Username or password is not matching");
      });
  };

  const firebaseConfig = {
    apiKey: "AIzaSyBNyiEVgev7_Xc1TIyNFYzX2ih2BB1SyCc",
    authDomain: "movies-app-8f3eb.firebaseapp.com",
    projectId: "movies-app-8f3eb",
    storageBucket: "movies-app-8f3eb.firebasestorage.app",
    messagingSenderId: "115533146705",
    appId: "1:115533146705:web:82a642ae002d69d707e670",
    measurementId: "G-78Z86TTQB4",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <br />
      <form>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          Login to Movies App
        </Typography>
        <TextField
          sx={{ width: { xs: "100%", sm: "400px" }, mb: 3 }}
          helperText="Please enter your E-mail"
          id="demo-helper-text-misaligned"
          label="E-mail"
          value={email}
          onChange={changeEmail}
        />
        <br />
        <TextField
          sx={{ width: { xs: "100%", sm: "400px" } }}
          helperText="Please enter your Password"
          id="demo-helper-text-misaligned"
          type="password"
          label="Password"
          value={pass1}
          onChange={changePass1}
        />
        <br />
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 3,
            py: 1.2,
            fontWeight: "bold",
            backgroundColor: "#00c6ff",
            backgroundImage: "linear-gradient(90deg, #0072ff, #00c6ff)",
            borderRadius: 3,
            textTransform: "none",
            fontSize: "1rem",
            "&:hover": {
              backgroundImage: "linear-gradient(90deg, #00c6ff, #0072ff)",
              boxShadow: "0 4px 15px rgba(0, 114, 255, 0.4)",
            },
          }}
          onClick={onClickLogIn}
        >
          Log In
        </Button>
        <br />
        Don't Have an Account ?<Link to={"/signin"}> Sign In</Link>
      </form>
      <br />
    </Box>
  );
}

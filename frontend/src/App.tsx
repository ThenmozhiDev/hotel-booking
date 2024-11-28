import React from "react";
import "./App.css";
import Header from "./header/Header";
import { Box } from "@mui/material";
import Footer from "./footer/Footer";
import AppRouter from "./routes/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Box>
      <ToastContainer />
      <AppRouter />
    </Box>
  );
}

export default App;

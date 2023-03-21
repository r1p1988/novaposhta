import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CheckCMR from "./pages/CheckCMR";
import DepartmentsList from "./pages/DepartmentsList";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e74646",
    },
    secondary: {
      main: "#fb7756",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<CheckCMR />} />
            <Route path="/departments" element={<DepartmentsList />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckCMR from "./pages/CheckCMR";
import DepartmentsList from "./pages/DepartmentsList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CheckCMR />} />
          <Route path="/departments" element={<DepartmentsList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

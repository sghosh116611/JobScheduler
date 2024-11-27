import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobFormPage from "./pages/JobFormPage.js";
import JobStatusPage from "./pages/JobStatusPage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<JobFormPage />} />
      <Route path="/status" element={<JobStatusPage />} />
    </Routes>
  </Router>
);

export default App;

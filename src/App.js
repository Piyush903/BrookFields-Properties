import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home"; // Example of another component for demonstration
import SiteIssueManagement from "./Components/Request";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/request" element={<SiteIssueManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

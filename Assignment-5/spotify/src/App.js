import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;

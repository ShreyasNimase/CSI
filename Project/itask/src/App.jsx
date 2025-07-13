import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

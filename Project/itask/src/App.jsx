import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import Home from "./components/home/Home";
import Board from "./components/kanban/Board";
import Layout from "./components/Layout";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route element={<Layout />}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/kanban" element={<Board />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

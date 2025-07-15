import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import Home from "./components/home/Home";
import Layout from "./components/Layout";
import KanbanPage from "./components/kanban/KanbanPage";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route element={<Layout />}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/kanban" element={<KanbanPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

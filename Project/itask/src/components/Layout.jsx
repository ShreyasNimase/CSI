import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-layout"> {/* ✅ Make this the full flex wrapper */}
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const App = () => {
  const activeMenu = true;

  return (
    <div className="flex min-h-screen dark:bg-main-dark-bg ">
      <Router>
        <div className="fixed bottom-4 right-4 z-[1000]">
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-x1 hower:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            Sidbar
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
        )}
      </Router>
    </div>
  );
};

export default App;

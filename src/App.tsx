// import React from "react";
import "./stylesheets/css/index.css";
import "../src/stylesheets/sass/index.scss";
import TopBar from "./components/LayoutItems/TopBar";
import Dashboard from "./pages/Dashboard";
const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-wyBlue">
      <TopBar />
      <Dashboard />
    </main>
  );
};

export default App;

import React from "react";

const TopBar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full bg-wyPurple mb-16 py-1">
      <div className="global-container flex items-center justify-between">
        <img src={require("../../assets/img/logo.svg").default} alt="" />

        <div className="flex items-center gap-5">
          <img
            src={require("../../assets/img/bell.svg").default}
            alt=""
            className="px-5 border-r border-l border-white py-5 border-opacity-10 mr-16"
          />

          <div className="text-white">
            <h1 className="font-Ciruclar font-medium text-lg">Jerryson Ibe</h1>

            <p className="font-Ciruclar text-right text-sm">View Profile</p>
          </div>

          <img src={require("../../assets/img/avatar.svg").default} alt="" />

          <img src={require("../../assets/img/caret.svg").default} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;

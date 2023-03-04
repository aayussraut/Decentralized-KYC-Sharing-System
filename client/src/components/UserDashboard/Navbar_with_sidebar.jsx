import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import "./home.css";

const Navbar_Sidebar = () => {
  // console.log(user.username);
  return (
    <div>
      <Navbar />

      <Sidebar />
    </div>
  );
};
export default Navbar_Sidebar;

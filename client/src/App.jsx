import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import ProtectedBankRoutes from "./components/BankDashboard/ProtectedBankRoutes";
import ProtectedUserRoutes from "./components/UserDashboard/ProtectedUserRoutes";
// import UserDashboard from "./components/UserDashboard/UserDashboard";
// import CheckRoutes from "./components/UserDashboard/UserRoutes";
// import { isAuthenticated } from "./helpers/authentication";

// const router=createBroserRouter([{
//   path:"/",
// }])
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/user/*" element={<ProtectedUserRoutes />}></Route>

        <Route path="/nrb/*" element={<ProtectedBankRoutes />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Login /> */}
      {/* <Register /> */}
      {/* 
      <UserDashboard /> */}
      {/* <BankDashboard /> */}
    </>
  );
}

import { Routes, Route, Navigate } from "react-router-dom";
import BankDashboard from "./Dashboard";
import { isAuthenticated } from "../../helpers/authentication";
import RequestUserKYC from "./RequestUserKYC";
import AddRecords from "./AddRecords";
import AllRecords from "./AllRecords";
import RecentRequest from "./RecentRequest";
import NotFound from "../pages/NotFound";

//main kaam bhaneko chai bank lai matra bank ko pages haru ma access diney
export default function ProtectecddBankRoutes() {
  if (isAuthenticated() && isAuthenticated().role === 1) {
    return (
      <Routes>
        {/*nrb/dashboard*/}
        <Route path="dashboard" element={<BankDashboard />} />{" "}
        {/*nrb/requestaccess*/}
        <Route path="requestaccess" element={<RequestUserKYC />} />
        {/*nrb/addrecords*/}
        <Route path="addrecords" element={<AddRecords />} />
        <Route path="allrecords" element={<AllRecords />} />
        <Route path="recentrequest" element={<RecentRequest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  return <Navigate to="/signin" />;
}

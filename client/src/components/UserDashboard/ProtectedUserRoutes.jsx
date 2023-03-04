import { Navigate, Routes, Route } from "react-router-dom";
import { isAuthenticated } from "../../helpers/authentication";
import UserDashboard from "./UserDashboard";
import NotFound from "../pages/NotFound";
import UploadKYC from "./UploadKYC";
import Navbar_Sidebar from "./Navbar_with_sidebar";
import CheckRequest from "./CheckRequest";
import MyDetails from "./MyDetails";
// import { Route } from "react-router-dom";

//main kaam bhaneko chai user lai matra user ko pages haru ma access diney
export default function ProtectedUserRoutes(props) {
  //   const navigate = useNavigate();
  if (isAuthenticated() && isAuthenticated().role === 0) {
    // return props.children;
    return (
      <Routes>
        <Route path="dashboard" element={<UserDashboard />} />

        <Route path="mydetails" element={<MyDetails />} />
        <Route path="uploadkyc" element={<UploadKYC />} />
        <Route path="checkrequest" element={<CheckRequest />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}

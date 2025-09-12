import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Layout from "../Landingpage/Layout";
import About from "../Landingpage/AboutUs";
import LostItem from "../Landingpage/LostItem";
import FoundItem from "../Landingpage/FoundItem";
import ReportFoundItem from "../Landingpage/ReportFoundItem";
import ReportLostItem from "../Landingpage/ReportLostItem";
import ScrollToTop from "../Landingpage/ScrollTop";
import UserFoundItem from "../Dashboard/admin/AdminFoundItem";
import ContactMessagesPage from "../Dashboard/admin/ContactMessages";
import UserLostItem from "../Dashboard/admin/AdminLostItem";
import { Users } from "lucide-react";
import LandingAuth from "../Landingpage/auth";
import Login from "../Landingpage/login";
import Signup from "../Landingpage/signup";
import AdminDashHome from "../Dashboard/admin/AdminDashHome";
import UserDashHome from "../Dashboard/userDash/UserDashHome";
import AdminManagement from "../Dashboard/admin/AdminManagement";
import AdminLostItem from "../Dashboard/admin/AdminFoundItem";
import AdminDashLayout from "../Dashboard/admin/AdminDashLayout";
import UserDashLayout from "../Dashboard/userDash/UserDashLayout";

const AppRaute = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/LandingAuth" element={<LandingAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />

          {/* admin */}

        <Route path="/admin" element={<AdminDashLayout />}>
          <Route index element={<AdminDashHome />} />
          <Route path="admin" element={<AdminDashHome />} />
          <Route path="users" element={<AdminManagement />} />
          <Route path="userfounditem" element={<AdminLostItem />} />
          <Route path="userlostitem" element={<AdminLostItem />} />
          <Route path="message" element={<ContactMessagesPage />} />
        </Route>

        {/* userdash */}
        <Route path="/userDash" element={<UserDashLayout />}>
          <Route index element={<UserDashHome />} />
          <Route path="userdash" element={<UserDashHome />} />
          <Route path="userfounditem" element={<UserFoundItem />} />
          <Route path="userlostitem" element={<UserLostItem />} />
        </Route>


        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="home" element={<About />} />
          <Route path="founditem" element={<FoundItem />} />
          <Route path="lostitem" element={<LostItem />} />
          <Route path="reportfounditem" element={<ReportFoundItem />} />
          <Route path="reportlostitem" element={<ReportLostItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRaute;

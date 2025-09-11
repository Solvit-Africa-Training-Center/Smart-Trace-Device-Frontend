import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Layout from "../Landingpage/Layout";
import About from "../Landingpage/AboutUs";
import LostItem from "../Landingpage/LostItem";
import FoundItem from "../Landingpage/FoundItem";
import ReportFoundItem from "../Landingpage/ReportFoundItem";
import ReportLostItem from "../Landingpage/ReportLostItem";
import UserDashLayout from "../Dashboard/userdash/UserDashLayout";
import UserDashHome from "../Dashboard/userdash/UserDashHome";
import ScrollToTop from "../Landingpage/ScrollTop";
import UserFoundItem from "../Dashboard/userdash/UserFoundItem";
import ContactMessagesPage from "../Dashboard/userdash/ContactMessages";
import UserLostItem from "../Dashboard/userdash/UserLostItem";
import { Users } from "lucide-react";
import UserManagement from "../Dashboard/userdash/UsersManagement";
import LandingAuth from "../Landingpage/auth";
import Login from "../Landingpage/login";
import Signup from "../Landingpage/signup";

const AppRaute = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/LandingAuth" element={<LandingAuth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/userdash" element={<UserDashLayout />}>
          <Route index element={<UserDashHome />} />
          <Route path="userdash" element={<UserDashHome />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="userfounditem" element={<UserFoundItem />} />
          <Route path="userlostitem" element={<UserLostItem />} />

          <Route path="message" element={<ContactMessagesPage />} />
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

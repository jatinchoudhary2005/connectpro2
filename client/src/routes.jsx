import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import RoleSelection from "./pages/auth/RoleSelection";
import Home from "./pages/Home/Home";
import Verification from "./pages/Profile/Verification";
import BrowseMentors from "./pages/Mentors/BrowseMentors";
import MentorProfile from "./pages/Mentors/MentorProfile";
import BookSession from "./pages/Booking/BookSession";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/role" element={<RoleSelection />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/mentors" element={<BrowseMentors />} />
        <Route path="/mentor/:id" element={<MentorProfile />} />
        <Route path="/book/:id" element={<BookSession />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

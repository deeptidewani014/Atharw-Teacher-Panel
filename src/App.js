import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header1 from "./components/Header/Header1";
import TeacherHomepage from "./pages/TeacherHomePage/TeacherHomepage";
import Startteaching from "./pages/Startteaching/Startteaching";
import LiveClasses from "./pages/Liveclasses/Liveclasses";
import Todaytopic from "./pages/Today'stopic/Today'stopic";
export default function App() {
  return (
    <>
      <Router>
        <Header1 />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="teacherhomepage" element={<TeacherHomepage />} />
          <Route path="startteaching" element={<Startteaching />} />
          <Route path="liveclasses" element={<LiveClasses />} />
          <Route path="todaytopic" element={<Todaytopic />} />
        </Routes>
      </Router>
    </>
  );
}

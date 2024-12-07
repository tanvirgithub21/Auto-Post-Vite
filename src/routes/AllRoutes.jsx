import React from "react";
import { Routes, Route } from "react-router";
import App from "../App";
import Navbar from "../components/navbar/Navbar";
import AddContent from "../pages/addContent/AddContent";
import AddPage from "../pages/addPage/AddPage";
import VideoDatabase from "../pages/videoDatabase/VideoDatabase";

export default function AllRoutes() {
  return (
    <div className="dark dark:bg-[#0E1628] dark:text-[#b9cbe5] min-h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-content" element={<AddContent />} />
        <Route path="/add-page" element={<AddPage />} />
        <Route path="/video-database" element={<VideoDatabase />} />
      </Routes>
    </div>
  );
}

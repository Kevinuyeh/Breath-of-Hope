import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LeaderBoard from "./Components/LeaderBoard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AdminHome from "./Admin/AdminHome";
import AdminLeaderBoard from "./Admin/AdminLeaderBoard";
import UserLeaderBoard from "./Admin/UserLeaderBoard";
import SessionPage from "./Pages/SessionPage";
import ScrollToTop from "./Components/ScrollToTop";
import UploadVideo from "./Admin/UploadVideo";
import VideoPage from "./Pages/VideoPage";
import UserHome from "./Components/UserHome";
import UploadVidLink from "./Admin/UploadVidLink";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/userpage" element={<UserHome/>} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="adminleaderboard" element={<AdminLeaderBoard/>} />
          <Route path="userleaderboard" element={<UserLeaderBoard/>} />
          <Route path="sessionpage" element={<SessionPage/>} />
          <Route path="uploadvideo" element={<UploadVideo/>} />
          <Route path="uploadvidlink" element={<UploadVidLink/>} />
          <Route path="videopage" element={<VideoPage/>} />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;

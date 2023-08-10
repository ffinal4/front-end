import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UploadPage from "./pages/UploadPage";
import MainLayout from "./components/Layout";
import TradeListPage from "./pages/TradeListPage";
import DetailPage from "./pages/DetailPage";
import MyPocketPage from "./pages/MyPocketPage";
import MyPage from "./pages/MyPage";
import EditProfilePage from "./pages/EditProfilePage";
import ChattingPage from "./pages/ChattingPage";
import AuctionUploadPage from "./pages/AuctionUploadPage";
import TradeRequestPage from "./pages/TradeRequestPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/chat" element={<ChattingPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/tradelist" element={<TradeListPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/myPocket" element={<MyPocketPage />} />
            <Route path="/editprofile" element={<EditProfilePage />} />
            <Route path="/auctionupload" element={<AuctionUploadPage />} />
            <Route path="/traderequest" element={<TradeRequestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

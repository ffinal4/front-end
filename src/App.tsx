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
import StartRatingPage from "./pages/StartRatingPage";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import RatingPage from "./pages/RatingPage";
import MyAuctionCheckPage from "./pages/MyAuctionCheckPage";
import AuctionDetailPage from "./pages/AuctionDetailPage";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/chat" element={<ChattingPage />} />
            <Route path="/ratingstart" element={<StartRatingPage />} />
            <Route path="/rating" element={<RatingPage />} />
            <Route path="/" element={<MainPage />} />
            <Route element={<MainLayout />}>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/tradelist" element={<TradeListPage />} />
              <Route path="/detail/:goodsId" element={<DetailPage />} />
              <Route path="/myPocket" element={<MyPocketPage />} />
              <Route path="/editprofile" element={<EditProfilePage />} />
              <Route path="/auctionupload" element={<AuctionUploadPage />} />
              <Route path="/traderequest" element={<TradeRequestPage />} />
              <Route path="/auctioncheck" element={<MyAuctionCheckPage />} />
              <Route path="/auctiondetail/:goodsId" element={<AuctionDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

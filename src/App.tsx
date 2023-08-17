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
import ZzimListPage from "./pages/ZzimListPage";
import AuctionListPage from "./pages/AuctionListPage";

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
            <Route path="/mypocket" element={<MyPocketPage />} />
            <Route element={<MainLayout />}>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/tradelist" element={<TradeListPage />} />
              <Route path="/detail/:goodsId" element={<DetailPage />} />
              <Route path="/editprofile" element={<EditProfilePage />} />
              <Route path="/auctionupload" element={<AuctionUploadPage />} />
              <Route path="/traderequest" element={<TradeRequestPage />} />
              <Route path="/auctioncheck" element={<MyAuctionCheckPage />} />
              <Route path="/auctiondetail/:auctionId" element={<AuctionDetailPage />} />
              <Route path="/zzimlist" element={<ZzimListPage />} />
              <Route path="/auctionlist" element={<AuctionListPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

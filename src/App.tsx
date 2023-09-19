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
import Footer from "./components/common/Footer";
import UserPocketPage from "./pages/UserPocketPage";
import ScrollTop from "./utils/ScrollTop";
import { RecoilRoot } from "recoil";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import SearchPage from "./pages/SearchPage";
import ChattingPage2 from "./pages/ChattingPage2";
import PasswordChangePage from "./pages/PasswordChangePage";
import HelperButton from "./components/common/Helper/HelperButton";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollTop />
            <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/ratingstart" element={<StartRatingPage />} />
              <Route path="/rating" element={<RatingPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/mypocket" element={<MyPocketPage />} />
              <Route
                path="/userpocket/:nickname"
                element={<UserPocketPage />}
              />
              <Route path="/traderequest" element={<TradeRequestPage />} />
              <Route path="/auctioncheck" element={<MyAuctionCheckPage />} />
              <Route path="/serviceuse" element={<TermsOfServicePage />} />
              <Route path="/chat" element={<ChattingPage />} />
              <Route element={<MainLayout />}>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/tradelist" element={<TradeListPage />} />
                <Route path="/detail/:goodsId" element={<DetailPage />} />
                <Route path="/editprofile" element={<EditProfilePage />} />
                <Route
                  path="/passwordchange"
                  element={<PasswordChangePage />}
                />
                <Route path="/auctionupload" element={<AuctionUploadPage />} />
                <Route
                  path="/auctiondetail/:auctionId"
                  element={<AuctionDetailPage />}
                />
                <Route path="/zzimlist" element={<ZzimListPage />} />
                <Route path="/search/:keyword" element={<SearchPage />} />
                <Route path="/auctionlist" element={<AuctionListPage />} />
              </Route>
            </Routes>
            <HelperButton />
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;

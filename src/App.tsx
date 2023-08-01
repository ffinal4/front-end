import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SearchInput from "./components/common/SearchInput";
import UploadPage from "./pages/UploadPage";
import MainLayout from "./components/Layout";
import TradeListPage from "./pages/TradeListPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SearchInput />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/tradelist" element={<TradeListPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

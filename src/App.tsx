import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SearchInput from "./components/common/SearchInput";
import UploadPage from "./pages/UploadPage";
import { MainLayout } from "./components/Layout";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <BrowserRouter>
          <Header />
          <SearchInput />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </div>
  );
}

export default App;

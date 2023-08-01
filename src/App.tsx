import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";
import UploadPage from "./pages/UploadPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<div>로그인페이지임!</div>} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

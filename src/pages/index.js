import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import DashboardPage from "./dashboard";
import LoginPage from "./home";
import MarketSharePage from "./marketshare";
import PromoterPage from "./promoter";
import FunnelPage from "./funnel";
import AwarenessPage from "./awareness";
import ConsiderationPage from "./consideration";
import AboutPage from "./about";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/market" element={<MarketSharePage />} />
          <Route path="/promoter" element={<PromoterPage />} />
          <Route path="/funnel" element={<FunnelPage />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/consideration" element={<ConsiderationPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);
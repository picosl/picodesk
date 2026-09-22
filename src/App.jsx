
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Download from "./pages/Download";
import Changelog from "./pages/Changelog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";

import { trackVisit } from "./utils/analytics.js";


function RouteTracker() {
  useEffect(() => {
    trackVisit();
  }, []);

  return null;
}


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/download" element={<Download />} />
          <Route path="/support" element={<Support />} />
          <Route path="/changelog" element={<Changelog />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <RouteTracker />
    </>
  );
}

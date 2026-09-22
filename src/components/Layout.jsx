import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#070d1b] text-white">
      <Header />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
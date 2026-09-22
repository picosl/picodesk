import {
  BookOpen,
  Download,
  HelpCircle,
  Laptop,
} from "lucide-react";

import SupportHero from "../components/SupportHero";
import SupportSidebar from "../components/SupportSidebar";
import QuickActions from "../components/QuickActions";
import InstallationGuide from "../components/InstallationGuide";
import FAQ from "../components/FAQ";
import SupportCTA from "../components/SupportCTA";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";

const sections = [
  {
    id: "installation",
    title: "Installation Guide",
    icon: Laptop,
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    icon: HelpCircle,
  },
  {
    id: "download",
    title: "Download",
    icon: Download,
  },
];

export default function Support() {
  return (
    <main className="relative overflow-hidden bg-[#020617]">
      <ScrollProgress />
      <BackToTop />

      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        <div className="absolute left-[-250px] top-0 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute right-[-250px] top-[500px] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
        />

      </div>

      {/* ================= Content ================= */}

      <div className="relative">

        {/* <SupportHero /> */}

        <QuickActions />

        <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

            {/* Sidebar */}

            <SupportSidebar sections={sections} />

            {/* Main Content */}

            <div className="space-y-28">

              <section
                id="installation"
                className="scroll-mt-32"
              >
                <div className="mb-10">

                  <span
                    className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-500/30
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-blue-300
                  "
                  >
                    <Laptop size={16} />

                    Installation Guide

                  </span>

                  <h2
                    className="
                    mt-6
                    text-4xl
                    font-extrabold
                    text-white
                  "
                  >
                    Install PicoDesk
                    <br />

                    in just a few minutes

                  </h2>

                  <p
                    className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-400
                  "
                  >
                    Follow the step-by-step installation guide below.
                    Each step includes screenshots and detailed explanations
                    to help you complete the installation successfully.
                  </p>

                </div>

                <InstallationGuide />

              </section>

              <section
                id="faq"
                className="scroll-mt-32"
              >

                <FAQ />

              </section>

              <section
                id="download"
                className="scroll-mt-32"
              >

                <SupportCTA />

              </section>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
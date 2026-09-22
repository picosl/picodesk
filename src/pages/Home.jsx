import { useEffect, useState } from "react";

import {
  ArrowRight,
  Gauge,
  Globe2,
  MonitorSmartphone,
  ShieldCheck,
  Users,
  Zap,
  Eye,
} from "lucide-react";

import Button from "../components/Button";

const features = [
  [
    ShieldCheck,
    "Enterprise Security",
    "End-to-end encryption and a zero-trust connection model protect every session.",
  ],
  [
    Zap,
    "Ultra-Low Latency",
    "A fast connection experience that feels smooth and responsive.",
  ],
  [
    Globe2,
    "Global Access",
    "Connect to your computers securely from anywhere in the world.",
  ],
  [
    MonitorSmartphone,
    "Cross-Device Access",
    "Use PicoDesk across supported desktop and mobile devices.",
  ],
  [
    Users,
    "Team Management",
    "Organize users, devices and access permissions from one place.",
  ],
  [
    Gauge,
    "High Performance",
    "Enjoy clear remote video with efficient hardware acceleration.",
  ],
];

export default function Home() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    fetch("/api/analytics/stats.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load analytics");
        }

        return response.json();
      })
      .then((data) => {
        setVisitors(data.visitors || 0);
      })
      .catch((error) => {
        console.error("Analytics error:", error);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#020617]">
        {/* Background Glow */}
        <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>

            <span className="text-sm font-medium text-slate-300">
              Trusted Remote Desktop Software
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Built for
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Speed
            </span>
            <br />
            Designed for
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Security
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
            Access your Windows computers securely from anywhere with
            lightning-fast performance, end-to-end encryption, and an intuitive
            remote desktop experience for individuals and businesses.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
            {/* Primary Button */}
            <Button
              to="/download"
              className="
                group
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                via-blue-500
                to-cyan-500
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                shadow-[0_10px_40px_rgba(37,99,235,0.35)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.55)]
                active:scale-95
              "
            >
              Download for Windows
              <ArrowRight
                className="
                  ml-2
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>

            {/* Secondary Button */}
            <Button
              to="/features"
              variant="outline"
              className="
                rounded-2xl
                border
                border-slate-700
                bg-white/5
                px-8
                py-4
                text-lg
                font-semibold
                text-slate-200
                backdrop-blur-xl
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:scale-105
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-white
                hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]
                active:scale-95
              "
            >
              Explore Features
            </Button>
          </div>

        

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-slate-300">
            <div>✔ End-to-End Encryption</div>
            <div>✔ Ultra Low Latency</div>
            <div>✔ Secure File Transfer</div>
            <div>✔ Free for Personal Use</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-[#050B18] py-32">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              WHY PICODESK
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Everything You Need for
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Remote Access
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Powerful features engineered to deliver secure, lightning-fast and
              reliable remote desktop experiences for professionals, businesses
              and everyday users.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map(([Icon, title, description]) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50 hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]"
              >
                {/* Top Gradient */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

                {/* Description */}
                <p className="leading-8 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Blue Glow */}
        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-8 py-20 text-center shadow-[0_30px_80px_rgba(0,0,0,.45)] md:px-20">
            {/* Small Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
              READY TO GET STARTED?
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Experience Fast, Secure &
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Reliable
              </span>
              <br />
              Remote Desktop Today
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              Whether you're working remotely, providing IT support, or managing
              business infrastructure, PicoDesk gives you secure remote access
              with enterprise-grade performance.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button to="/download">Download for Windows</Button>

              <Button to="/features" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Bottom Features */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                ✅ Free Personal Use
              </div>

              <div className="flex items-center gap-2">
                🔒 AES-256 Encryption
              </div>

              <div className="flex items-center gap-2">
                ⚡ Ultra Low Latency
              </div>

              <div className="flex items-center gap-2">
                🖥 Windows Compatible
              </div>

              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-cyan-400" />

                <span className="font-semibold text-white">
                  {visitors.toLocaleString()}
                </span>

                <span className="text-slate-500">Visitors</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

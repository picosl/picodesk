import {
  BookOpen,
  Download,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Button from "./Button";

const stats = [
  {
    icon: Download,
    title: "Latest Version",
    value: "v1.0.100",
  },
  {
    icon: ShieldCheck,
    title: "Platform",
    value: "Windows 10 / 11",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    value: "Installation Guide",
  },
];

export default function SupportHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">

      {/* Glow */}

      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Badge */}

        <div className="flex justify-center">

          <span
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-300
            backdrop-blur-xl
          "
          >
            <Sparkles size={16} />

            PicoDesk Support Center

          </span>

        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-5xl text-center">

          <h1
            className="
            text-5xl
            font-black
            leading-tight
            tracking-tight
            text-white
            md:text-7xl
          "
          >
            Everything You Need

            <br />

            <span
              className="
              bg-gradient-to-r
              from-blue-400
              via-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
            "
            >
              To Get Started
            </span>

          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            leading-9
            text-slate-400
          "
          >
            Learn how to install PicoDesk, connect to remote
            devices, troubleshoot common issues and explore
            everything the platform has to offer.
          </p>

        </div>

        {/* Search */}

        <div className="mx-auto mt-14 max-w-3xl">

          <div
            className="
            group
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/70
            px-6
            py-4
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500/40
            focus-within:border-blue-500
            focus-within:shadow-[0_0_40px_rgba(37,99,235,.18)]
          "
          >

            <Search className="text-slate-500" />

            <input
              type="text"
              placeholder="Search documentation..."
              className="
              w-full
              bg-transparent
              text-white
              placeholder:text-slate-500
              outline-none
            "
            />

          </div>

        </div>

        {/* CTA */}

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Button
            href="/downloads/PicoDesk-v1.0.100.exe"
            download
            className="gap-2 px-8 py-4"
          >
            <Download size={18} />

            Download PicoDesk

          </Button>

          <Button
            to="/download"
            variant="secondary"
            className="px-8 py-4"
          >
            View Downloads
          </Button>

        </div>

        {/* Stats */}

        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_20px_45px_rgba(37,99,235,.15)]
              "
              >

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600/20
                  to-cyan-500/20
                  text-blue-400
                "
                >

                  <Icon size={24} />

                </div>

                <h3 className="mt-6 text-lg font-bold text-white">

                  {item.value}

                </h3>

                <p className="mt-2 text-slate-400">

                  {item.title}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
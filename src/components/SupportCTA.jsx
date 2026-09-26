
import { useEffect, useState } from "react";

import {
  Download,
  Mail,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Button from "./Button";

export default function SupportCTA() {
  const [latestRelease, setLatestRelease] = useState(null);

  useEffect(() => {
    fetch("/downloads/releases.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load releases");
        }

        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setLatestRelease(data[0]);
        }
      })
      .catch((error) => {
        console.error("Support CTA download error:", error);
      });
  }, []);

  return (
    <section className="relative py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-slate-800
            bg-slate-900/60
            backdrop-blur-xl
            shadow-[0_25px_80px_rgba(0,0,0,.35)]
          "
        >
          {/* Top Gradient */}
          <div
            className="
              h-1
              w-full
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-blue-500
            "
          />

          <div className="px-8 py-14 md:px-14">
            <div className="flex justify-center">
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-600/20
                  to-cyan-500/20
                "
              >
                <Sparkles
                  className="text-blue-400"
                  size={36}
                />
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-3xl text-center">
              <h2 className="text-4xl font-black text-white md:text-5xl">
                Still Need Help?
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-400
                "
              >
                Whether you're installing PicoDesk for the first time
                or troubleshooting a connection issue, we're here to
                help. Download the latest version, read the User Manual,
                or contact our support team.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-12
                flex
                flex-wrap
                justify-center
                gap-5
              "
            >
              {/* Download Latest PicoDesk */}
              <Button
                href={latestRelease?.file || "#"}
                download
                className="gap-3 px-8 py-4"
              >
                <Download size={18} />
                Download PicoDesk
              </Button>

              {/* User Manual */}
              <Button
                href="/downloads/PicoDesk-User-Manual.pdf"
                className="
                  gap-3
                  bg-slate-800
                  px-8
                  py-4
                  hover:bg-slate-700
                "
              >
                <BookOpen size={18} />
                User Manual
              </Button>

              {/* Contact Support */}
              <Button
                href="mailto:srezacmt@gmail.com"
                className="
                  gap-3
                  bg-slate-800
                  px-8
                  py-4
                  hover:bg-slate-700
                "
              >
                <Mail size={18} />
                Contact Support
              </Button>
            </div>

            {/* Divider */}
            <div className="my-12 border-t border-slate-800" />

            {/* Features */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">
                  Easy Installation
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Follow our illustrated installation guide and get
                  PicoDesk running in just a few minutes.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white">
                  Comprehensive Documentation
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Explore detailed guides, FAQs and best practices to
                  make the most of PicoDesk.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white">
                  Dedicated Support
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Need more assistance? Our support team is always
                  ready to help.
                </p>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="mt-14 flex justify-center">
              <a
                href="/download"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  font-semibold
                  text-blue-400
                  transition
                  hover:text-cyan-300
                "
              >
                Visit Download Center

                <ArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

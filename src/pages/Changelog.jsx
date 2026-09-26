
import { useEffect, useState } from "react";

import {
  Download,
  Sparkles,
  Wrench,
  Bug,
  Rocket,
  CalendarDays,
} from "lucide-react";

import Button from "../components/Button";

export default function Changelog() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetch("/downloads/releases.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load releases");
        }

        return response.json();
      })
      .then((data) => {
        setReleases(data);
      })
      .catch((error) => {
        console.error("Changelog error:", error);
      });
  }, []);

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#020617]
        pt-36
        pb-28
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-6
          lg:px-8
        "
      >
        {/* Hero */}
        <section
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <span
            className="
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-300
            "
          >
            PRODUCT UPDATES
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-extrabold
              leading-tight
              text-white
              md:text-7xl
            "
          >
            PicoDesk
            <br />
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Changelog
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
            Follow the latest releases, improvements and
            updates that make PicoDesk faster and better.
          </p>
        </section>

        {/* Loading */}
        {releases.length === 0 && (
          <div
            className="
              mx-auto
              mt-20
              text-center
              text-slate-400
            "
          >
            Loading releases...
          </div>
        )}

        {/* Release Cards */}
        {releases.length > 0 && (
          <section
            className="
              mx-auto
              mt-20
              max-w-5xl
              space-y-10
            "
          >
            {releases.map((release, index) => (
              <article
                key={release.version}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  p-8
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:border-blue-500/50
                  hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]
                  md:p-12
                "
              >
                {/* Latest Badge */}
                {index === 0 && (
                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      rounded-full
                      bg-blue-500
                      px-3
                      py-1
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                    "
                  >
                    Latest
                  </div>
                )}

                {/* Top Border */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                  "
                />

                <div
                  className="
                    flex
                    flex-col
                    gap-8
                    md:flex-row
                    md:items-center
                    md:justify-between
                  "
                >
                  {/* Version Info */}
                  <div>
                    <div className="flex items-center gap-3">
                      <Rocket
                        className="
                          h-8
                          w-8
                          text-blue-400
                        "
                      />

                      <h2
                        className="
                          text-3xl
                          font-bold
                          text-white
                        "
                      >
                        Version {release.version}
                      </h2>
                    </div>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-slate-400
                      "
                    >
                      <CalendarDays
                        className="
                          h-4
                          w-4
                        "
                      />

                      Released {release.date}
                    </div>
                  </div>

                  {/* Download Latest Release */}
                  {index === 0 && (
                    <Button
                      href={release.file}
                      download
                      className="gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download Release
                    </Button>
                  )}
                </div>

                {/* Release Details */}
                <div
                  className="
                    mt-12
                    grid
                    gap-6
                    md:grid-cols-3
                  "
                >
                  <ChangeCard
                    icon={Sparkles}
                    title="New Features"
                    items={release.features || []}
                  />

                  <ChangeCard
                    icon={Wrench}
                    title="Improvements"
                    items={release.improvements || []}
                  />

                  <ChangeCard
                    icon={Bug}
                    title="Bug Fixes"
                    items={release.fixes || []}
                  />
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

function ChangeCard({ icon: Icon, title, items }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/40
        p-6
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <Icon
          className="
            h-6
            w-6
            text-blue-400
          "
        />

        <h3
          className="
            font-bold
            text-white
          "
        >
          {title}
        </h3>
      </div>

      <ul
        className="
          mt-5
          space-y-3
          text-sm
          text-slate-400
        "
      >
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="
              flex
              gap-2
            "
          >
            <span className="text-blue-400">
              •
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


import { useEffect, useState } from "react";
import {
  ChevronRight,
  Download,
  HelpCircle,
  Laptop,
} from "lucide-react";

const icons = {
  installation: Laptop,
  faq: HelpCircle,
  download: Download,
};

export default function SupportSidebar({ sections }) {
  const [activeSection, setActiveSection] = useState("installation");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <aside className="hidden lg:block">

      <div
        className="
        sticky
        top-28
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        backdrop-blur-xl
        "
      >
        {/* Title */}

        <div className="mb-8">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">

            Documentation

          </p>

          <h3 className="mt-3 text-xl font-bold text-white">

            Support Center

          </h3>

        </div>

        {/* Navigation */}

        <nav className="space-y-2">

          {sections.map((section, index) => {
            const Icon = icons[section.id];

            const active =
              activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() =>
                  scrollToSection(section.id)
                }
                className={`
                  group
                  relative
                  flex
                  w-full
                  items-center
                  gap-4
                  rounded-2xl
                  px-4
                  py-4
                  text-left
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-blue-600/15 border border-blue-500/30"
                      : "hover:bg-slate-800/60"
                  }
                `}
              >
                {/* Active indicator */}

                {active && (
                  <span
                    className="
                    absolute
                    left-0
                    top-3
                    bottom-3
                    w-1
                    rounded-r-full
                    bg-gradient-to-b
                    from-blue-400
                    to-cyan-400
                    "
                  />
                )}

                {/* Number */}

                <div
                  className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl

                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-400"
                  }
                  `}
                >
                  {index + 1}
                </div>

                {/* Text */}

                <div className="flex-1">

                  <div className="flex items-center gap-2">

                    <Icon
                      size={18}
                      className={
                        active
                          ? "text-cyan-300"
                          : "text-slate-500"
                      }
                    />

                    <span
                      className={`
                      font-medium

                      ${
                        active
                          ? "text-white"
                          : "text-slate-300"
                      }
                      `}
                    >
                      {section.title}
                    </span>

                  </div>

                </div>

                <ChevronRight
                  className={`
                  h-5
                  w-5
                  transition-all

                  ${
                    active
                      ? "translate-x-1 text-blue-400"
                      : "text-slate-600 group-hover:translate-x-1"
                  }
                  `}
                />

              </button>
            );
          })}
        </nav>

        {/* Divider */}

        <div className="my-8 border-t border-slate-800" />

        {/* Bottom Card */}

        <div
          className="
          rounded-2xl
          border
          border-blue-500/20
          bg-blue-500/10
          p-5
          "
        >
          <Laptop className="mb-4 h-8 w-8 text-cyan-400" />

          <h4 className="font-semibold text-white">

            Need Assistance?

          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-300">

            Follow the installation guide carefully.
            If you still experience issues,
            visit the FAQ section below.

          </p>

        </div>

      </div>

    </aside>
  );
}
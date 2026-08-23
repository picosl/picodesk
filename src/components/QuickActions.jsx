import {
  ArrowRight,
  Download,
  Laptop,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

const actions = [
  {
    icon: Download,
    title: "Download PicoDesk",
    description:
      "Get the latest version for Windows with the newest features and improvements.",
    to: "/download",
    color: "from-blue-600/20 to-cyan-500/20",
  },
  {
    icon: Laptop,
    title: "Installation Guide",
    description:
      "Follow our step-by-step installation guide with screenshots and explanations.",
    to: "#installation",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description:
      "Find answers to common installation and connection questions.",
    to: "#faq",
    color: "from-sky-500/20 to-blue-500/20",
  },
];

export default function QuickActions() {
  return (
    <section className="relative pb-24 pt-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-12 text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">

            QUICK ACCESS

          </span>

          <h2 className="mt-6 text-4xl font-black text-white">

            Find What You Need

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">

            Jump directly to the section you're looking for. Whether you're
            installing PicoDesk for the first time or troubleshooting an issue,
            we've got you covered.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {actions.map((item) => {

            const Icon = item.icon;

            const Card =
              item.to.startsWith("#") ? "button" : Link;

            const props = item.to.startsWith("#")
              ? {
                  onClick: () => {
                    document
                      .querySelector(item.to)
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  },
                }
              : {
                  to: item.to,
                };

            return (
              <Card
                key={item.title}
                {...props}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                p-8
                text-left
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500/40
                hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]
                "
              >
                {/* Background Glow */}

                <div
                  className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${item.color}
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  `}
                />

                {/* Top Border */}

                <div
                  className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                  "
                />

                <div className="relative">

                  <div
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-800/80
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    "
                  >
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">

                    {item.description}

                  </p>

                  <div
                    className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-400
                    "
                  >
                    Learn More

                    <ArrowRight
                      className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                      "
                    />
                  </div>

                </div>

              </Card>
            );

          })}

        </div>

      </div>

    </section>
  );
}
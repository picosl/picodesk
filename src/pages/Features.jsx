import {
  ArrowRight,
  FileUp,
  Keyboard,
  LockKeyhole,
  Monitor,
  Shield,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

const items = [
  [Zap, "Lightning Fast", "Experience ultra-low latency remote desktop sessions with optimized streaming technology."],
  [Shield, "Enterprise Security", "Protect every connection with end-to-end encryption and secure authentication."],
  [Monitor, "Multi-Monitor Support", "View and control multiple remote displays effortlessly."],
  [FileUp, "File Transfer", "Transfer files securely between local and remote devices in seconds."],
  [Keyboard, "Keyboard Shortcuts", "Use familiar Windows shortcuts naturally during every session."],
  [Users, "Team Collaboration", "Invite teammates and manage remote access permissions with ease."],
  [Wifi, "Reliable Connectivity", "Automatic reconnection keeps your work uninterrupted."],
  [LockKeyhole, "Unattended Access", "Connect to trusted devices anytime without user interaction."],
];

export default function Features() {
  return (
    <main className="relative overflow-hidden bg-[#020617] pt-36 pb-28">

      {/* Background */}

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Hero */}

        <div className="mx-auto mb-24 max-w-4xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            POWERFUL FEATURES

          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">

            Built to Make
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              Remote Work Effortless

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            PicoDesk combines speed, security and simplicity into one
            powerful remote desktop platform built for professionals,
            businesses and everyday users.

          </p>

        </div>

        {/* Features Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map(([Icon, title, text]) => (

            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50 hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]"
            >

              {/* Animated Top Border */}

              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Icon */}

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 transition duration-500 group-hover:scale-110 group-hover:rotate-6">

                <Icon className="h-8 w-8 text-blue-400" />

              </div>

              <h2 className="mb-4 text-2xl font-bold text-white">

                {title}

              </h2>

              <p className="leading-8 text-slate-400">

                {text}

              </p>

              
            </article>

          ))}

        </div>

      </div>

    </main>
  );
}
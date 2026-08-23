import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const links = [
  ["/features", "Features"],
  ["/pricing", "Pricing"],
  ["/download", "Download"],
  ["/support", "Support"],
   ["/changelog", "Changelog"]
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");

    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto mt-5 max-w-7xl px-5">

        <div className="flex h-16 items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/70 px-6 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.35)]">

          {/* Logo */}

          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
           <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/70 backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,.25)]">

  <img
    src="/assets/PicosysLogo.png"
    alt="PicoDesk"
    className="h-7 w-7 object-contain"
  />

</div>

            <div>

              <h1 className="text-lg font-bold text-white">

                PicoDesk

              </h1>

              <p className="text-xs text-slate-400">

                Remote Desktop

              </p>

            </div>

          </NavLink>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">

            {links.map(([to, label]) => (

              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    )}
                  </>
                )}
              </NavLink>

            ))}

          </nav>

          {/* Right */}

          <div className="flex items-center gap-3">

            {/* Theme */}

            {/* <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button> */}

            <Button
              to="/login"
              className="hidden lg:flex"
            >
              Sign In
            </Button>

            {/* Mobile */}

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white transition hover:border-blue-500 lg:hidden"
            >
              {mobileOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "mt-4 max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 backdrop-blur-xl">

            <div className="flex flex-col gap-5">

              {links.map(([to, label]) => (

                <NavLink
                  key={to}
                  to={to}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="text-slate-300 transition hover:text-blue-400"
                >
                  {label}
                </NavLink>

              ))}

              <Button to="/login">

                Sign In

              </Button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}
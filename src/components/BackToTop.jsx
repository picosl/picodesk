import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-8
        right-8
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-2xl

        border
        border-slate-700

        bg-slate-900/80
        backdrop-blur-xl

        text-white

        shadow-[0_20px_40px_rgba(0,0,0,.35)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500
        hover:bg-blue-600
        hover:shadow-[0_0_30px_rgba(59,130,246,.45)]

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
}
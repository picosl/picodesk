import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        window.scrollY;

      const percent =
        (current / totalHeight) * 100;

      setProgress(percent);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className="
      fixed
      left-0
      top-0
      z-[100]
      h-1
      w-full
      bg-transparent
      "
    >
      <div
        className="
        h-full
        bg-gradient-to-r
        from-blue-500
        via-cyan-400
        to-blue-500
        shadow-[0_0_20px_rgba(59,130,246,.8)]
        transition-[width]
        duration-150
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
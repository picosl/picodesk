import { X } from "lucide-react";

export default function ImageLightbox({
  image,
  title,
  onClose,
}) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-md
      p-8
      animate-fadeIn
      "
    >
      <button
        onClick={onClose}
        className="
        absolute
        right-6
        top-6
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        p-3
        text-white
        transition
        hover:border-blue-500
        "
      >
        <X size={22} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="
        max-h-[90vh]
        max-w-7xl
        overflow-hidden
        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        shadow-[0_30px_80px_rgba(0,0,0,.5)]
        "
      >
        {/* Browser Header */}

        <div
          className="
          flex
          items-center
          gap-2
          border-b
          border-slate-700
          bg-slate-950
          px-5
          py-4
          "
        >
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-5 text-sm text-slate-400">
            {title}
          </span>
        </div>

        <img
          src={image}
          alt={title}
          className="
          max-h-[80vh]
          w-full
          object-contain
          "
        />
      </div>
    </div>
  );
}

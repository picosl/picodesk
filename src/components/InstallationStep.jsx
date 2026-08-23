import { useState } from "react";
import {
  Info,
  ZoomIn,
  ArrowRight,
} from "lucide-react";

import ImageLightbox from "./ImageLightbox";

export default function InstallationStep({ step }) {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <article
        className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-[0_20px_50px_rgba(37,99,235,.15)]
      "
      >
        {/* Top Border */}

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

        <div className="p-8 lg:p-10">

          {/* Step */}

          <span
            className="
            inline-flex
            rounded-full
            border
            border-blue-500/30
            bg-blue-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-300
          "
          >
            Step {step.id} of 8
          </span>

          {/* Title */}

          <h2
            className="
            mt-5
            text-3xl
            font-black
            text-white
          "
          >
            {step.title}
          </h2>

          {/* Screenshot */}

          <div
            onClick={() => setPreview(true)}
            className="
            group
            relative
            mt-8
            cursor-pointer
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-black
          "
          >

            <img
              src={step.image}
              alt={step.title}
              className="
              w-full
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
            />

            <div
              className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black/0
              opacity-0
              transition-all
              duration-300
              group-hover:bg-black/40
              group-hover:opacity-100
            "
            >

              <div
                className="
                flex
                items-center
                gap-2
                rounded-full
                bg-slate-900/90
                px-5
                py-3
                text-white
              "
              >

                <ZoomIn size={18} />

                Click to Enlarge

              </div>

            </div>

          </div>

          {/* Description */}

          <div className="mt-8">

            <h3
              className="
              text-lg
              font-bold
              text-white
            "
            >
              Description
            </h3>

            <p
              className="
              mt-4
              leading-8
              text-slate-400
            "
            >
              {step.description}
            </p>

          </div>
              {/* Action */}

          <div
            className="
            mt-8
            rounded-2xl
            border
            border-blue-500/20
            bg-blue-500/10
            p-6
            "
          >
            <div className="flex items-center gap-3">

              <ArrowRight
                className="text-blue-400"
                size={22}
              />

              <h3
                className="
                text-lg
                font-bold
                text-white
                "
              >
                What should I do?
              </h3>

            </div>

            <p
              className="
              mt-4
              leading-8
              text-slate-300
              "
            >
              {step.action}
            </p>

          </div>

          {/* Note */}

          {step.note && (

            <div
              className="
              mt-6
              flex
              gap-4
              rounded-2xl
              border
              border-slate-700
              bg-slate-950/60
              p-5
              "
            >

              <div
                className="
                mt-1
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-500/10
                "
              >

                <Info
                  className="text-blue-400"
                  size={20}
                />

              </div>

              <div>

                <h3
                  className="
                  font-semibold
                  text-white
                  "
                >
                  Note
                </h3>

                <p
                  className="
                  mt-2
                  leading-7
                  text-slate-400
                  "
                >
                  {step.note}
                </p>

              </div>

            </div>

          )}

        </div>

      </article>

      <ImageLightbox
        image={preview ? step.image : null}
        title={step.title}
        onClose={() => setPreview(false)}
      />

    </>
  );
}
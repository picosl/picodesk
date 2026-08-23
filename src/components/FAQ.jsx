import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import { faqData } from "../data/supportData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative">

      {/* Header */}

      <div className="mb-16 text-center">

        <span
          className="
          inline-flex
          items-center
          gap-2
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
          <HelpCircle size={16} />

          Frequently Asked Questions

        </span>

        <h2
          className="
          mt-6
          text-4xl
          font-black
          text-white
          md:text-5xl
          "
        >
          Need Some Answers?

        </h2>

        <p
          className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-slate-400
          "
        >
          Find quick answers to the most common questions about
          installing and using PicoDesk.
        </p>

      </div>

      {/* FAQ Items */}

      <div className="mx-auto max-w-5xl space-y-6">

        {faqData.map((faq, index) => {

          const open = index === openIndex;

          return (

            <div
              key={faq.question}
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
              "
            >

              <button
                onClick={() =>
                  setOpenIndex(open ? -1 : index)
                }
                className="
                flex
                w-full
                items-center
                justify-between
                px-8
                py-7
                text-left
                "
              >

                <h3
                  className="
                  text-xl
                  font-semibold
                  text-white
                  "
                >
                  {faq.question}
                </h3>

                <div
                  className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-800
                  transition-all
                  duration-300

                  ${
                    open
                      ? "rotate-180 bg-blue-600 text-white"
                      : "text-slate-400"
                  }
                  `}
                >

                  <ChevronDown />

                </div>

              </button>

              <div
                className={`
                grid
                transition-all
                duration-500

                ${
                  open
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
                `}
              >

                <div className="overflow-hidden">

                  <div
                    className="
                    border-t
                    border-slate-800
                    px-8
                    py-7
                    "
                  >

                    <p
                      className="
                      leading-8
                      text-slate-300
                      "
                    >
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}
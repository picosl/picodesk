import { installationSteps } from "../data/supportData";
import InstallationStep from "./InstallationStep";

export default function InstallationGuide() {
  return (
    <section className="relative">

      {/* Header */}

      <div className="mb-12">

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
          Installation Guide
        </span>

        <h2
          className="
          mt-5
          text-4xl
          font-black
          text-white
          "
        >
          Install PicoDesk
        </h2>

        <p
          className="
          mt-4
          max-w-3xl
          text-lg
          leading-8
          text-slate-400
          "
        >
          Follow the steps below to install PicoDesk successfully.
          Each step includes a screenshot together with a short
          explanation to help you complete the installation.
        </p>

      </div>

      {/* Steps */}

      <div className="space-y-10">

        {installationSteps.map((step) => (
          <InstallationStep
            key={step.id}
            step={step}
          />
        ))}

      </div>

    </section>
  );
}
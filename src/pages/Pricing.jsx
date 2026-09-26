import { Check, Sparkles, Rocket } from "lucide-react";
import Button from "../components/Button";

const benefits = [
  "Remote desktop access",
  "Secure encrypted connections",
  "File transfer",
  "Multi-monitor support",
  "Keyboard shortcuts",
  "Reliable connectivity",
  "Unattended access",
  "Regular improvements",
];

const faqs = [
  [
    "Is PicoDesk free to use?",
    "Yes. PicoDesk is currently available free for everyone. You can download and use it without any subscription."
  ],
  [
    "Will PicoDesk have paid plans in the future?",
    "Yes. We are preparing additional plans and advanced features for users who need more powerful remote access capabilities."
  ],
  [
    "Which operating systems are supported?",
    "The current installer supports Windows. More platform support may be introduced in future releases."
  ],
  [
    "Is my remote connection secure?",
    "Yes. PicoDesk is designed with secure authentication and encrypted communication to protect your remote sessions."
  ],
];


export default function Pricing() {
  return (
    <main className="relative overflow-hidden bg-[#020617] pt-36 pb-28">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />


      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />


      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">


        {/* Hero */}

        <section className="mx-auto mb-24 max-w-4xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">

            SIMPLE PRICING

          </span>


          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">

            Powerful Remote Access

            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              Free For Everyone

            </span>

          </h1>


          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            PicoDesk is currently available free of charge.
            Enjoy fast, secure and reliable remote desktop access
            without subscriptions or hidden costs.

          </p>

        </section>



        {/* Main Pricing Card */}


        <section className="mx-auto max-w-3xl">


          <article
            className="
            group relative overflow-hidden rounded-3xl
            border border-slate-800
            bg-slate-900/60
            p-10
            backdrop-blur-xl
            transition-all duration-500
            hover:-translate-y-3
            hover:border-blue-500/50
            hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]
            "
          >


            {/* Top Animated Border */}

            <div className="
            absolute left-0 top-0 h-1 w-full 
            origin-left scale-x-0 
            bg-gradient-to-r from-blue-500 to-cyan-400
            transition-transform duration-500
            group-hover:scale-x-100
            " />


            <div className="flex flex-col items-center text-center">


              <div className="
              mb-8 flex h-20 w-20 items-center justify-center 
              rounded-2xl 
              bg-gradient-to-br from-blue-600/20 to-cyan-500/20
              "
              >

                <Rocket className="h-10 w-10 text-blue-400" />

              </div>


              <h2 className="text-3xl font-bold text-white">

                PicoDesk Free

              </h2>


              <div className="mt-5">

                <span className="text-6xl font-extrabold text-white">

                  $0

                </span>

               

              </div>


              <p className="mt-6 max-w-xl text-slate-400 leading-7">

                Everything you need for personal and professional
                remote desktop access.

              </p>


            </div>



            {/* Features */}

            <div className="mt-10 grid gap-4 md:grid-cols-2">


              {benefits.map((item)=>(

                <div
                  key={item}
                  className="
                  flex items-center gap-3
                  rounded-xl
                  border border-slate-800
                  bg-slate-950/40
                  p-4
                  "
                >

                  <Check className="h-5 w-5 text-blue-400" />

                  <span className="text-sm text-slate-300">

                    {item}

                  </span>


                </div>

              ))}


            </div>



            <div className="mt-10">

              <Button 
                to="/download"
                variant="primary"
                className="w-full"
              >

                Download PicoDesk

              </Button>

            </div>


          </article>


        </section>



        {/* Future Plans Notice */}


        <section className="mx-auto mt-20 max-w-3xl">


          <div
            className="
            rounded-3xl
            border border-blue-500/20
            bg-blue-500/10
            p-8
            text-center
            "
          >

            <Sparkles className="mx-auto mb-4 h-8 w-8 text-cyan-400" />


            <h3 className="text-2xl font-bold text-white">

              More Plans Coming Later

            </h3>


            <p className="mt-4 leading-7 text-slate-300">

              Future versions of PicoDesk may include advanced
              features and professional plans for businesses
              and teams.

            </p>


          </div>


        </section>




        {/* FAQ */}


        <section className="mx-auto mt-24 max-w-4xl">


          <h2 className="mb-10 text-center text-3xl font-bold text-white">

            Frequently Asked Questions

          </h2>


          <div className="space-y-4">


            {faqs.map(([question,answer])=>(

              <details
                key={question}
                className="
                rounded-2xl
                border border-slate-800
                bg-slate-900/60
                p-6
                backdrop-blur-xl
                "
              >

                <summary className="
                cursor-pointer
                font-semibold
                text-white
                "
                >

                  {question}

                </summary>


                <p className="
                pt-4
                leading-7
                text-slate-400
                "
                >

                  {answer}

                </p>


              </details>

            ))}


          </div>


        </section>


      </div>


    </main>
  );
}
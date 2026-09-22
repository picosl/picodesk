import {
  CheckCircle2,
  Download as DownloadIcon,
  Monitor,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

import Button from "../components/Button";


const highlights = [
  {
    icon: CheckCircle2,
    title: "Free For Everyone",
    text: "No subscription required",
  },
  {
    icon: ShieldCheck,
    title: "Secure Connection",
    text: "Protected remote sessions",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    text: "Optimized remote experience",
  },
];


export default function Download() {
  return (
    <main className="relative overflow-hidden bg-[#020617] pt-36 pb-28">


      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />


      {/* Grid */}

      <div className="
      absolute inset-0 
      bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
      bg-[size:70px_70px]
      " />



      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">



        {/* Hero Section */}


        <section className="mx-auto max-w-4xl text-center">


          <span className="
          rounded-full
          border border-blue-500/30
          bg-blue-500/10
          px-5 py-2
          text-sm
          font-semibold
          text-blue-300
          "
          >

            DOWNLOAD PICO DESK

          </span>



          <h1 className="
          mt-8
          text-5xl
          font-extrabold
          leading-tight
          text-white
          md:text-7xl
          "
          >

            Connect Anywhere

            <br />

            <span className="
            bg-gradient-to-r
            from-blue-400
            to-cyan-400
            bg-clip-text
            text-transparent
            "
            >

              With PicoDesk

            </span>


          </h1>



          <p className="
          mx-auto
          mt-8
          max-w-3xl
          text-xl
          leading-9
          text-slate-400
          "
          >

            Download PicoDesk for Windows and experience
            fast, secure and reliable remote desktop access
            built for everyone.

          </p>


        </section>




        {/* Download Card */}



        <section className="mx-auto mt-20 max-w-4xl">


          <article
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-blue-500/50
            hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]
            md:p-12
            "
          >


            {/* Animated Border */}

            <div className="
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



            <div className="
            flex
            flex-col
            items-center
            gap-10
            md:flex-row
            "
            >



              {/* Icon */}

              <div className="
              flex
              h-28
              w-28
              shrink-0
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-blue-600/20
              to-cyan-500/20
              transition
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
              "
              >

                <Monitor className="h-14 w-14 text-blue-400" />

              </div>





              <div className="
              flex-1
              text-center
              md:text-left
              ">


                <h2 className="
                text-3xl
                font-bold
                text-white
                "
                >

                  PicoDesk for Windows

                </h2>



                <p className="
                mt-3
                text-slate-400
                "
                >

                  Windows 10 / 11
                  <span className="mx-2">•</span>
                  64-bit
                  <span className="mx-2">•</span>
                  Lightweight installer

                </p>




                <div className="mt-8">


                  <Button
                    href="/downloads/PicoDesk-v1.0.100.exe"
                    download
                    className="
                    gap-3
                    px-8
                    py-4
                    text-base
                    "
                  >

                    <DownloadIcon className="h-5 w-5" />

                    Download PicoDesk

                  </Button>


                </div>


              </div>


            </div>




            {/* Features */}



            <div className="
            mt-12
            grid
            gap-5
            border-t
            border-slate-800
            pt-10
            md:grid-cols-3
            ">


              {highlights.map((item)=>{


                const Icon = item.icon;


                return (

                  <div
                    key={item.title}
                    className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/40
                    p-5
                    text-center
                    "
                  >

                    <Icon className="
                    mx-auto
                    mb-3
                    h-7
                    w-7
                    text-blue-400
                    "
                    />


                    <h3 className="
                    font-semibold
                    text-white
                    "
                    >

                      {item.title}

                    </h3>


                    <p className="
                    mt-2
                    text-sm
                    text-slate-400
                    "
                    >

                      {item.text}

                    </p>


                  </div>

                );


              })}


            </div>



          </article>



        </section>





        {/* Installation Note */}



        <section className="mx-auto mt-16 max-w-3xl">


          <div className="
          rounded-3xl
          border
          border-blue-500/20
          bg-blue-500/10
          p-8
          text-center
          "
          >


            <Sparkles className="
            mx-auto
            mb-4
            h-8
            w-8
            text-cyan-400
            "
            />



            <h3 className="
            text-2xl
            font-bold
            text-white
            "
            >

              Simple Installation

            </h3>


            <p className="
            mt-4
            leading-7
            text-slate-300
            "
            >

              Download the installer, complete the setup,
              and start connecting to remote devices in minutes.
              

            </p>


          </div>


        </section>



      </div>


    </main>
  );
}
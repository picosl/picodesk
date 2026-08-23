import {
  ArrowLeft,
  Home,
  WifiOff,
  MonitorOff,
  Satellite,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


export default function NotFound() {

  const navigate = useNavigate();


  return (

    <main className="
    relative
    flex
    min-h-screen
    items-center
    justify-center
    overflow-hidden
    bg-[#020617]
    px-6
    py-20
    ">


      {/* Background Glow */}

      <div className="
      absolute
      -left-40
      top-0
      h-[500px]
      w-[500px]
      rounded-full
      bg-blue-600/10
      blur-[180px]
      "
      />


      <div className="
      absolute
      -right-40
      bottom-0
      h-[500px]
      w-[500px]
      rounded-full
      bg-cyan-500/10
      blur-[180px]
      "
      />



      {/* Grid Background */}

      <div className="
      absolute
      inset-0
      bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
      bg-[size:70px_70px]
      "
      />




      {/* Hero Card */}

      <section className="
      relative
      w-full
      max-w-6xl
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-slate-900/60
      p-10
      backdrop-blur-xl
      shadow-[0_25px_60px_rgba(37,99,235,.18)]
      md:p-16
      ">


        {/* Animated Top Border */}

        <div className="
        absolute
        left-0
        top-0
        h-1
        w-full
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        "
        />




        <div className="
        grid
        items-center
        gap-14
        md:grid-cols-2
        ">



          {/* Left Content */}


          <div>


            <div className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600/20
            to-cyan-500/20
            "
            >

              <WifiOff className="
              h-14
              w-14
              text-blue-400
              "
              />

            </div>





            <h1 className="
            mt-8
            text-[120px]
            font-extrabold
            leading-none
            bg-gradient-to-r
            from-blue-400
            to-cyan-400
            bg-clip-text
            text-transparent
            md:text-[170px]
            "
            >

              404

            </h1>



            <h2 className="
            mt-6
            text-4xl
            font-bold
            text-white
            "
            >

              Connection Lost 🚀

            </h2>



            





            <div className="
            mt-8
            flex
            flex-col
            gap-3
            sm:flex-row
            ">


              <Button
                to="/"
                className="gap-2"
              >

                <Home className="h-5 w-5" />

                Go Home

              </Button>




              <Button
                variant="outline"
                className="gap-2"
                onClick={() => navigate(-1)}
              >

                <ArrowLeft className="h-5 w-5" />

                Go Back

              </Button>


            </div>


          </div>







          {/* Right Illustration */}



          <div className="
          flex
          justify-center
          "
          >



            <div className="
            relative
            flex
            h-[340px]
            w-[340px]
            items-center
            justify-center
            rounded-full
            border
            border-slate-800
            bg-slate-950/40
            "
            >



              {/* Circle Glow */}

              <div className="
              absolute
              inset-10
              rounded-full
              bg-blue-500/10
              blur-3xl
              "
              />





              <div className="
              relative
              flex
              h-44
              w-44
              items-center
              justify-center
              rounded-3xl
              border
              border-slate-700
              bg-slate-900
              "
              >

                <MonitorOff className="
                h-20
                w-20
                text-cyan-400
                "
                />

              </div>




              {/* Floating Status */}


              <div className="
              absolute
              right-0
              top-10
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/90
              px-5
              py-4
              "
              >

                <div className="
                flex
                items-center
                gap-3
                "
                >

                  <Satellite className="
                  h-5
                  w-5
                  text-blue-400
                  "
                  />


                  <span className="
                  text-sm
                  font-semibold
                  text-white
                  "
                  >

                    Searching...

                  </span>


                </div>


              </div>





              <div className="
              absolute
              bottom-10
              left-0
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/90
              px-5
              py-4
              "
              >

                <p className="
                text-xs
                text-slate-400
                "
                >

                  Device Status

                </p>


                <p className="
                mt-1
                font-semibold
                text-blue-400
                "
                >

                  Page Offline

                </p>


              </div>



            </div>


          </div>


        </div>



      </section>



    </main>

  );
}
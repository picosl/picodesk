import { Link } from "react-router-dom";
import {
  LockKeyhole,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Button from "../components/Button";


export default function Login() {
  return (
    <AuthShell
      title="Welcome back"
      text="Sign in to manage your PicoDesk account."
    >

      <form
        className="space-y-5"
        onSubmit={(event) => event.preventDefault()}
      >

        <Field
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />


        <Field
          label="Password"
          type="password"
          placeholder="Enter your password"
        />


        <div className="flex justify-end">

          <Link
            to="#"
            className="text-sm text-blue-400 transition hover:text-cyan-400"
          >
            Forgot password?
          </Link>

        </div>


        <Button
          type="submit"
          className="w-full"
        >

          Sign In

        </Button>


      </form>



      <p className="mt-8 text-center text-sm text-slate-400">

        Don't have an account?

        <Link
          className="
          ml-1
          font-semibold
          text-blue-400
          transition
          hover:text-cyan-400
          "
          to="/register"
        >

          Create one

        </Link>

      </p>


    </AuthShell>
  );
}




export function AuthShell({ title, text, children }) {

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
    py-12
    ">


      {/* Glow */}

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



      {/* Grid */}

      <div className="
      absolute
      inset-0
      bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
      bg-[size:70px_70px]
      "
      />




      <div className="
      relative
      mx-auto
      grid
      max-w-6xl
      items-center
      gap-16
      lg:grid-cols-2
      ">





        {/* Brand Section */}


        <section className="
        hidden
        lg:block
        "
        >


          <div className="max-w-xl">


            {/* Clickable Desktop Logo */}

            <Link
              to="/"
              className="
              group
              flex
              items-center
              gap-4
              "
            >

              <img
                src="/assets/PicosysLogo.png"
                alt="PicoDesk"
                className="
                h-16
                w-16
                transition
                duration-300
                group-hover:scale-110
                "
              />


              <span
                className="
                text-4xl
                font-extrabold
                text-white
                transition
                duration-300
                group-hover:text-cyan-400
                "
              >

                PicoDesk

              </span>


            </Link>






            <h1 className="
            mt-10
            text-5xl
            font-extrabold
            leading-tight
            text-white
            "
            >

              Remote Access

              <br />

              <span className="
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
              >

                Made Simple

              </span>


            </h1>





            <p className="
            mt-6
            text-xl
            leading-8
            text-slate-400
            "
            >

              Securely connect, control and collaborate
              from anywhere with PicoDesk.

            </p>





            <div className="
            mt-10
            space-y-5
            "
            >


              <Feature
                icon={ShieldCheck}
                text="Secure encrypted remote sessions"
              />


              <Feature
                icon={Zap}
                text="Fast and reliable performance"
              />


              <Feature
                icon={LockKeyhole}
                text="Protected account access"
              />


            </div>



          </div>


        </section>









        {/* Login Card */}


        <div className="w-full max-w-md">



          {/* Mobile Logo */}


          <Link
            to="/"
            className="
            group
            mb-8
            flex
            items-center
            justify-center
            gap-3
            lg:hidden
            "
          >

            <img
              src="/assets/PicosysLogo.png"
              alt="PicoDesk"
              className="
              h-12
              w-12
              transition
              duration-300
              group-hover:scale-110
              "
            />


            <span
              className="
              text-2xl
              font-bold
              text-white
              transition
              group-hover:text-cyan-400
              "
            >

              PicoDesk

            </span>


          </Link>






          <div className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/60
          p-8
          backdrop-blur-xl
          shadow-[0_25px_60px_rgba(37,99,235,.15)]
          "
          >


            <h2 className="
            text-center
            text-3xl
            font-bold
            text-white
            "
            >

              {title}

            </h2>



            <p className="
            mt-3
            mb-8
            text-center
            text-slate-400
            "
            >

              {text}

            </p>



            {children}



          </div>


        </div>


      </div>


    </main>

  );

}






function Feature({ icon: Icon, text }) {

  return (

    <div className="
    flex
    items-center
    gap-4
    "
    >


      <div className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      bg-blue-500/10
      "
      >

        <Icon className="h-6 w-6 text-blue-400" />

      </div>


      <span className="text-slate-300">

        {text}

      </span>


    </div>

  );

}






export function Field({ label, ...props }) {

  return (

    <label className="block">


      <span className="
      mb-2
      block
      text-sm
      font-medium
      text-slate-300
      "
      >

        {label}

      </span>


      <input

        className="
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-950/50
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20
        "

        {...props}

      />


    </label>

  );

}
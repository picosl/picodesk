import { Link } from "react-router-dom";

import {
  Facebook,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Globe,
  ArrowUpRight,
} from "lucide-react";


export default function Footer() {

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-[#020617]">


      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />



      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">


        <div className="grid gap-14 lg:grid-cols-5">



          {/* Company */}


          <div className="lg:col-span-2">


            <div className="flex items-center gap-3">


              <img
                src="/assets/PicosysLogo.png"
                alt="PicoDesk"
                className="h-12 w-12 rounded-xl"
              />


              <div>

                <h2 className="text-2xl font-bold text-white">
                  PicoDesk
                </h2>


                <p className="text-sm text-slate-400">
                  by Picosys Solutions Limited
                </p>

              </div>


            </div>




            <p className="mt-6 max-w-md leading-8 text-slate-400">

              PicoDesk is a modern remote desktop solution designed for
              businesses, IT professionals, and individuals who demand
              speed, security, and reliability.

            </p>





            {/* Contact */}


            <div className="mt-8 space-y-4 text-slate-400">


              <a
                href="mailto:srezacmt@gmail.com"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >

                <Mail className="h-5 w-5 text-blue-400" />

                srezacmt@gmail.com

              </a>





              <a
                href="tel:+8801913681985"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >

                <Phone className="h-5 w-5 text-blue-400" />

                +880 1913-681985

              </a>






              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-blue-400" />

                Dhaka, Bangladesh

              </div>






              <a
                href="https://picosl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-blue-400"
              >

                <Globe className="h-5 w-5 text-blue-400" />

                www.picosl.com

              </a>



            </div>


          </div>






          {/* Product */}


          <FooterColumn

            title="Product"

            links={[
              ["Features", "/features"],
              ["Pricing", "/pricing"],
              ["Download", "/download"],
              ["Changelog", "/changelog"],
            ]}

          />







          {/* Resources */}


          <FooterColumn

            title="Resources"

            links={[
              ["Documentation", "/documentation"],
              ["Help Center", "/support"],
              ["Release Notes", "/changelog"],
              ["Support", "/contact"],
            ]}

          />







          {/* Company */}


          <FooterColumn

            title="Company"

            links={[
              ["About Us", "/about"],
              ["Privacy Policy", "/privacy"],
              ["Terms & Conditions", "/terms"],
              ["Contact", "/contact"],
            ]}

          />



        </div>








        {/* Bottom */}



        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">



          <p className="text-sm text-slate-500">

            © {new Date().getFullYear()} Picosys Solutions Limited.
            All rights reserved.

          </p>





          {/* Social */}


          <div className="flex gap-4">



            <SocialIcon href="https://www.facebook.com/picosltd.bd">

              <Facebook size={18} />

            </SocialIcon>





            <SocialIcon>

              <Linkedin size={18} />

            </SocialIcon>





            <SocialIcon>

              <Github size={18} />

            </SocialIcon>



          </div>



        </div>



      </div>


    </footer>
  );

}









function FooterColumn({ title, links }) {


  return (

    <div>


      <h3 className="mb-6 text-lg font-semibold text-white">

        {title}

      </h3>





      <div className="space-y-4">


        {

          links.map(([label, path]) => (


            <Link

              key={label}

              to={path}

              className="
              group flex items-center
              text-slate-400
              transition-all
              duration-300
              hover:text-blue-400
              "

            >


              {label}




              <ArrowUpRight

                size={15}

                className="
                ml-1
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:opacity-100
                "

              />



            </Link>


          ))

        }


      </div>



    </div>


  );


}









function SocialIcon({ children, href }) {


  return (


    <a

      href={href || "#"}

      target={href ? "_blank" : undefined}

      rel={href ? "noopener noreferrer" : undefined}

      className="
      flex h-11 w-11
      items-center justify-center
      rounded-xl
      border border-slate-700
      bg-slate-900
      text-slate-300
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500
      hover:bg-blue-600
      hover:text-white
      hover:shadow-[0_15px_35px_rgba(37,99,235,.35)]
      "

    >

      {children}

    </a>


  );


}
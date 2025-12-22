import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className=" bg-[#e6e7f3] py-10">
        <div className="container mx-auto px-6" id="contact">
          {/* Heading */}
          <h2
            className="font-['Anton'] uppercase text-slate-900
            text-[clamp(2.2rem,9vw,5rem)] mb-14"
          >
            Contact Us
          </h2>

          {/* Content Wrapper */}
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
            {/* Contact Info */}
            <div className="max-w-md font-['Space Grotesk'] tracking-wide text-slate-800 space-y-4">
              <p>
                <span className="font-['Plus Jakarta Sans'] font-semibold">
                  Email:
                </span>{" "}
                <a
                  href="mailto:anigd_club@iitism.ac.in"
                  className="text-cyan-600 hover:underline"
                >
                  anigd_club@iitism.ac.in
                </a>
              </p>

              <p>
                <span className="font-['Plus Jakarta Sans'] font-semibold">
                  Instagram:
                </span>{" "}
                <a
                  href="https://www.instagram.com/animationandgamedesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline"
                >
                  Animation and Game Design Club
                </a>
              </p>

              <p>
                <span className="font-['Plus Jakarta Sans'] font-semibold">
                  LinkedIn:
                </span>{" "}
                <a
                  href="https://www.linkedin.com/company/animation-and-game-design-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline"
                >
                  Animation and Game Design Club
                </a>
              </p>

              <p className="pt-2 text-slate-700">
                <span className="font-['Plus Jakarta Sans'] font-semibold">
                  Address:
                </span>
                <br />
                Animation and Game Design Club,
                <br />
                2nd Floor, NVCTI, I2H Building,
                <br />
                IIT (ISM) Dhanbad
              </p>

              {/* Social Icons */}
              <div className="flex gap-5 pt-4">
                <a
                  href="https://www.linkedin.com/company/animation-and-game-design-club"
                  target="_blank"
                  className="text-cyan-500 hover:scale-110 transition"
                >
                  <FaLinkedinIn size={26} />
                </a>

                <a
                  href="https://www.instagram.com/animationandgamedesign/"
                  target="_blank"
                  className="text-pink-500 hover:scale-110 transition"
                >
                  <FaInstagram size={28} />
                </a>

                <a
                  href="mailto:anigd_club@iitism.ac.in"
                  className="text-slate-600 hover:scale-110 transition"
                >
                  <MdEmail size={28} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full lg:w-[720px] ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1683298271478!2d86.43601627487071!3d23.812612578628038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd31113a1ad3%3A0x526d1505f4fa50a7!2sNaresh%20Vashisht%20Centre%20for%20Tinkering%20%26%20Innovation!5e0!3m2!1sen!2sin!4v1747773083470!5m2!1sen!2sin"
                className="h-[360px] w-full rounded-2xl shadow-lg"
                loading="lazy"
                allowFullScreen
                title="NVCTI IIT ISM Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-6 text-center text-sm text-slate-300">
        © 2026 Animation and Game Design Club, IIT (ISM), Dhanbad. All rights
        reserved.
      </footer>
    </>
  );
};

export default Contactus;

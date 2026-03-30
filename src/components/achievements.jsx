import { useEffect, useRef } from "react";

const Achiev = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight;
        const end = -rect.height;

        const progress = (start - rect.top) / (start - end);
        const clamped = Math.max(0, Math.min(progress, 1));

        const scale = 0.3 + clamped * 0.9;
        textRef.current.style.transform = `translateX(-50%) scale(${scale})`;

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="achive"
      ref={sectionRef}
      className="relative bg-white  sm:pt-32 lg:pt-40 pb-20 sm:pb-24 overflow-hidden"
    >
      {/* BACKGROUND TEXT */}
      <h1
        ref={textRef}
        className="
          absolute  sm:top-2 lg:top-10 left-1/2
          origin-center
          font-['Anton']
         transform-gpu
          text-[clamp(5rem,18vw,20rem)] sm:text-[clamp(8rem,17vw,20rem)]
          uppercase tracking-tight
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent
          select-none pointer-events-none
          will-change-transform
        "
      >
        Achievements
      </h1>

      {/* FOREGROUND */}
      <div className="relative z-10 mt-24 sm:mt-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
          flex flex-col items-center gap-8
          md:flex-row md:flex-wrap md:justify-center
        "
        >
          {/* CARD 1 */}
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/achiv/card1.jpeg"
              alt="ANI-SAGA Rank 1"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              ANI-SAGA Rank 1
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A national 3D animation competition win at IIT ISM Dhanbad’s
              Concetto, showcasing cutting‑edge, narrative‑rich animations and
              highlighting dedication to innovation and excellence in digital
              arts.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/achiv/card2.jpeg"
              alt="Inter-IIT 2024"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Inter-IIT 2024
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A 3D animation project created for Inter IIT Cultural Meet 2024
              that sensitively portrays students’ mental health struggles to
              raise awareness, empathy, and early intervention.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/achiv/card3.jpg"
              alt="Virtual Campus Tour"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Virtual Campus Tour
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              We are developing a Virtual campus tour platform to explore our college campus online
              with mini‑games, real‑time chat, easy navigation, and
              cross‑platform access.
            </p>
          </div>
        </div>

    
        <div className="mt-16 sm:mt-20 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sameer-2006.github.io/Allachieve/"
            className=" inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 hover:scale-[1.03] transition-all duration-300"
          >
           View All Achievements →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achiev;

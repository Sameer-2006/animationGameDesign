import { useEffect, useRef } from "react";

const Projct = () => {
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
      id="projct"
      ref={sectionRef}
      className="relative bg-white sm:pt-32 lg:pt-40 pb-20 sm:pb-24 overflow-hidden"
    >
      <h1
        ref={textRef}
        className="
          absolute sm:top-2 lg:top-10 left-1/2
          origin-center
          font-['Anton']
          text-[clamp(5rem,18vw,20rem)] sm:text-[clamp(8rem,17vw,20rem)]
          uppercase tracking-tight
          bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]

          bg-clip-text text-transparent
          select-none pointer-events-none
          will-change-transform
        "
      >
        Projects
      </h1>

      <div className="relative z-10 mt-24 sm:mt-32 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
          flex flex-col items-center gap-8
          md:flex-row md:flex-wrap md:justify-center
        "
        >
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr1.png"
              alt="Project1"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              An artistic render of a luminous pink-blossomed tree standing
              alone in a serene nighttime field. Created in Blender, the scene
              showcases strong color contrast, depth of field, and subtle
              lighting to build a mystical and tranquil mood. This project
              reflects stylized environment design and mood-setting through
              minimalist natural elements.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30  backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr2.png"
              alt="Project2"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A clean and symmetrical 3D environment featuring a multi-tiered
              pagoda structure placed within a realistic grassy field. Modeled
              in Blender, this project showcases architectural precision, sharp
              edge detailing, and natural lighting ideal as a modular element
              for world-building in stylized or historically inspired game
              settings.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr3.png"
              alt="project3"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A striking Blender render featuring a vintage clock set against a
              surreal, wave-patterned backdrop. This project showcases a fusion
              of realism and abstract environment design and strong
              compositional contrast suited for concept art or surreal
              storytelling. The scene evokes a sense of distorted time, inviting
              viewers to interpret narrative.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr5.png"
              alt="project"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A photorealistic render of a chilled energy drink can,
              artistically placed in a bed of ice. This Blender project
              demonstrates advanced material shading, condensation effects, and
              realistic lighting — ideal for advertising, product design, and
              branding presentations.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr4.png"
              alt="project"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A dynamic scene depicting a low-flying aircraft navigating through
              a misty, rocky mountain range. This storyboard frame combines
              cinematic lighting and environmental detail, suitable for animated
              storytelling or cutscene development in adventure genres.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr6.png"
              alt="project"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A close-up cinematic render focused on detailed fantasy assets
              including a weathered dagger, ancient scroll, and goblet arranged
              on a wooden surface. This Blender project demonstrates mastery in
              material realism, and atmospheric lighting to
              evoke mystery.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="inline-block rounded-full border px-6 py-2 text-sm hover:bg-slate-100 transition"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projct;

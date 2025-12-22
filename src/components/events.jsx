import { useEffect, useRef } from "react";

const Evnt = () => {
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
      id="evnt"
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
          bg-gradient-to-r from-[#ff4b1f] to-[#1fddff]

          bg-clip-text text-transparent
          select-none pointer-events-none
          will-change-transform
        "
      >
        events
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
              src="/evnts/monsoonfinal.jpeg"
              alt="monsoonJam"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Monsoon Jam
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              Monsoon Jam is edition of our flagship game development
              competition, following the success of last year’s Summer Jam. It
              brings together storytellers, artists, and designers to
              collaborate and build innovative projects within a limited
              timeframe. Participants will work in teams  and
              create games or animations around a unique theme announced at the
              start of the event. The JAM promises an exciting blend of
              creativity,teamwork, and skills.
            </p>
          </div>
        <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/Summer_jam.jpg"
              alt="SummerJam"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Summer Jam
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              Summer Jam is an annual game development competition held in the
              first week of June, attracting students from various colleges.
              Teams collaborate over several days to design, develop, and
              complete a game based on a unique theme revealed at the event's
              start. Participants leverage tools like Unity, Unreal Engine, and
              Godot, showcasing innovation, technical skills, and creativity
              under tight deadlines.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/Ani-saga.jpg"
              alt="Ani-saga"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Ani-Saga
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              Ani-Saga is a prestigious 3D animation competition open to solo
              participants from recognized colleges and institutes. Entrants are
              challenged to create original 3D animated content within a set
              timeframe, demonstrating creativity, technical expertise, and
              storytelling prowess. The event provides a platform to showcase
              talent, network with peers, and explore cutting-edge animation
              trends using tools like Blender and Maya.
            </p>
          </div>
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/unityworkshop.jpg"
              alt="Unity Workshop"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Unity Workshop (Jan-Feb)
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A comprehensive workshop on Unity game development, held from
              January 25 to February 9, 2024, open to all students. Participants
              learned the fundamentals of game design, scripting in C#, and
              building interactive 2D and 3D games. Hands-on sessions covered
              scene management, physics, and UI development, culminating in
              participants creating their own small-scale games.
            </p>
          </div>
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/Blenderworkshop.jpg"
              alt="Blender Workshop"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Blender Workshop (Jan-Feb)
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              This workshop, conducted from January 25 to February 9, 2024,
              introduced students to 3D animation using Blender. Open to all, it
              covered modeling, texturing, rigging, and rendering techniques.
              Participants created their own 3D models and short animations,
              gaining practical experience with Blender’s powerful open-source
              tools.
            </p>
          </div>
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/BlenderWorkshopMarch.png"
              alt="BlenderWorkshopMarch"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Unity Workshop (March)
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              Held from March 18 to March 25, 2024, this Unity workshop was open
              to all students and focused on advanced game development
              techniques. Topics included shader programming, multiplayer
              functionality, and optimization for mobile platforms. Participants
              built complex game prototypes, enhancing their skills in Unity’s
              ecosystem.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/workshop1.jpg"
              alt="Blender Workshop (March)"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Blender Workshop (March)
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              This workshop, held from March 18 to March 25, 2024, delved into
              advanced Blender techniques for 3D animation. Open to all
              students, it covered topics like character rigging, advanced
              rendering, and animation workflows. Participants created
              professional-grade 3D animations, ready for portfolios or further
              development.
            </p>
          </div>
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/evnts/weekly_sessions.jpg"
              alt="Weekly Club Sessionsr"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />
            <h3 className="mt-4 font-semibold text-center sm:text-left">
              Weekly Club Sessions
            </h3>
            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              Weekly sessions held for club members, consisting of four focused
              workshops each week on game development and animation. These
              sessions cover tools like Unity and Blender, offering hands-on
              practice, peer collaboration, and mentorship to enhance skills in
              game design, coding, and 3D modeling.
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

export default Evnt;

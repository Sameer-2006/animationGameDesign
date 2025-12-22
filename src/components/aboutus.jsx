const About = () => {
  return (
    <div id="about-us" >
      <section id="about" className="w-full bg-white  ">
        <div className="mx-auto max-w-7xl px-6 mt-30">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1
                className="mb-6 text-1xl font-['Anton']
  text-[clamp(3rem,10vw,8rem)] uppercase tracking-tight bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-clip-text text-transparent
   "
              >
                About Us
              </h1>

              <p className="space-y-4  text-1xl leading-relaxed">
                <span className="block  font-['Inter'] text-base leading-relaxed text-slate-800">
                  The Animation and Game Design Club of IIT (ISM) Dhanbad is a
                  premier student-led community at the institute, driving
                  innovation in animation, game development, and immersive
                  technologies. With a vibrant team of over 45 highly motivated
                  members, the club excels in 2D and 3D animation, game design,
                  and virtual reality, delivering high-quality animated content,
                  engaging playable games, and cutting-edge VR experiences.
                  Supported by advanced infrastructure, including
                  high-performance workstations, VR headsets, and professional
                  creative tools, the club serves as a hub for interdisciplinary
                  collaboration, nurturing industry-ready skills while fostering
                  creativity, technical mastery, and leadership among students.
                </span>
              </p>
            </div>

            <div className="overflow-hidden rounded-xl shadow-xl ">
              <video
                autoPlay
                muted
                loop
                  preload="auto"
                  playsInline
              >
                <source src="/videos/virtualtr.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

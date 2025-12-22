import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const teamMembers = [
  {
    name: "Prof. Alok Kumar Das",
    role: "Dean IIE (Innovation,Incubation and Entrepreneurship) NVCTI Professor Mechanical Department",
    image: "/team/profalok.jpg",
    bg: "bg-blue-400",
    linkedin: "https://www.linkedin.com/in/alok-das-570804253/",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
  {
    name: "Ramesh Prasad",
    role: "Technical Officer NVCTI",
    image: "/team/ramesh.png",
    bg: "bg-blue-400",
    linkedin:
      "https://www.linkedin.com/company/animation-and-game-design-club/posts/?feedView=all",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
  {
    name: "Prof. Radhakanta Koner",
    role: "Faculty In-Charge Associate Professor Mining Department",
    image: "/team/Radhakantakoner.png",
    bg: "bg-blue-400",
    linkedin: "https://www.linkedin.com/in/radhakantakoner/",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
  {
    name: "Sagar Kumar",
    role: "Overall Coordinator Pre-Final year Electrical Engineering",
    image: "/team/Sagarkumar.png",
    bg: "bg-red-400",
    linkedin: "https://www.linkedin.com/in/sagar-kumar-a19615287/",
    instagram: "/",
    email: "mailto:scott@example.com",
  },
  {
    name: "Kushagra Srivastava",
    role: "Game Development Coordinator Pre-Final year Electronics and Communication Engineering",
    image: "/team/kushgra.png",
    bg: "bg-red-400",
    linkedin: "https://www.linkedin.com/in/kushagrasrivastavaism/",
    instagram: "https://www.instagram.com",
    email: "mailto:scott@example.com",
  },
  {
    name: "Balagoni Yuvraj Ganesh",
    role: "Animation Coordinator | Pre-Final year | Mining Machinery Engineering",
    image: "/team/yuvraj.png",
    bg: "bg-red-400",
    linkedin: "https://www.linkedin.com/in/yuvraj-balagoni-4a11952a6/",
    instagram: "/",
    email: "mailto:",
  },
  {
    name: "Ayush Chaurasiya",
    role: "Technical Head | Pre-Final year | Environmental Engineering",
    image: "/team/ayushchaurasiya.png",
    bg: "bg-yellow-300",
    linkedin: "https://www.linkedin.com/in/ayush-chaurasiya-7b2932287/",
    instagram: "https://www.instagram.com/harsh.kusi/",
    email: "mailto:22je0384@iitism.ac.in",
  },
  {
    name: "Aritra Bera",
    role: "Promotion Head | Pre-Final year | Electrical Engineering",
    image: "/team/Aritra.png",
    bg: "bg-yellow-300",
    linkedin: "https://www.linkedin.com/in/aritra-bera-33106b286/",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
  {
    name: "Vadla Sree Vishnu",
    role: "Promotion Head | Pre-Final year | Electrical Engineering",
    image: "/team/SreeVishnu.png",
    bg: "bg-yellow-300",
    linkedin: "https://www.linkedin.com/in/v-sree-vishnu-576904294/",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
  {
    name: "Swagata Maiti",
    role: "Engineering Design Head | Pre-Final year | Mechanical Engineering",
    image: "/team/Swagata.png",
    bg: "bg-slate-300",
    linkedin: "https://www.linkedin.com/in/swagata-maiti-a83b62287/",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
  {
    name: "Surendra Singh",
    role: "Business Development Head | Pre-Final year | Petroleum Engineering",
    image: "/team/Surendra.png",
    bg: "bg-slate-300",
    linkedin: "https://www.linkedin.com/in/surendra-singh-574432287/",
    instagram: "https://www.instagram.com/animationandgamedesign/",
    email: "mailto:faculty@example.com",
  },
];

const Member = () => {
  return (
    <div className=" bg-white">
    <section id="membrs" className="bg-white ">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2
          className="    uppercase bg-gradient-to-r from-[#780206]  to-[#061161]
            sm:top-2 lg:top-10 left-1/2
          text-center
          font-['Anton']
          text-[clamp(5rem,18vw,20rem)] sm:text-[clamp(8rem,17vw,20rem)]
          uppercase tracking-tight
          bg-clip-text text-transparent
          select-none pointer-events-none
          
          
          "
        >
          Members
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Card */}
              <div
                className={`relative mx-auto h-50 w-50 rounded-2xl ${member.bg}
  flex items-end justify-center
  shadow-[0_20px_40px_rgba(0,0,0,0.15)]
  transition-transform duration-300
  group-hover:-translate-y-2`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
      relative z-10
      h-60
    
      drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]
      transition-transform duration-300
      group-hover:scale-[1.02]
    "
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm uppercase tracking-wide text-slate-600">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 transition-colors hover:text-cyan-500"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 transition-colors hover:text-pink-500"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href={member.email}
                  className="text-slate-700 transition-colors hover:text-cyan-500"
                >
                  <MdEmail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="mb-30"></div>
    </div>
  );
};

export default Member;

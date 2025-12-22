import { useRef, useState } from "react";

const Landpage = () => {
  const [curindx, setcurindx] = useState(1);
  const [hsclicked, sethsclicked] = useState(false);
  const [loadedvideo, setLoadedvideo] = useState(0);

  const totalVideos = 6;
  const nxtVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedvideo((prev) => prev + 1);
  };

  const upcomingVideoIndex = (curindx % totalVideos) + 1;

  const minivideoClick = () => {
    sethsclicked(true);
    setcurindx(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => {
    return `/videos/prj${index}.mp4`;
  };

  return (
    <>
      {/*This for NavBAr */}
      <div className="fixed top-0 left-0 z-50 flex w-full h-[60px]  backdrop-blur-md justify-between items-center">
        <div className=" flex items-center justify-center">
          <img src="/public/ism.png" alt="logo" className="h-10 px-[10px]" />
          <a href="#home" className="h-10 px-[8px]">
            <img src="/public/logo.jpg" alt="logo" className="h-10 px-[10px]" />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="#home"
            className="px-[3px] m-[1vw] text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="px-[3px] m-[1vw] text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            About Us
          </a>
          <a
            href="#projct"
            className="px-[3px] m-[1vw] text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            Projects
          </a>
          <a
            href="#evnt"
            className="px-[3px] m-[1vw] text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            Events
          </a>
          <a
            href="#achive"
            className="px-[3px] m-[1vw] text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            Achievements
          </a>
          <a
            href="#membrs"
            className="px-[3px] m-[1vw] text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            Members
          </a>
          <a
            href="#contact"
            className=" text-[1vmax] font-[200] text-[#5f6368] hover:text-[#1a73e8] transition hidden md:block"
          >
            Contact Us
          </a>

          <i className="ri-menu-line p-[20px] text-xl"></i>
        </div>
      </div>

      {/*This for VIdeo Background  */}
      <div id="home" className="relative h-dvh w-full overflow-x-hidden">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-full overflow-hidden bg-blue-75"
        >
          <div>
            <div
              className="group absolute top-150 right-0 z-50
             w-50 h-50  cursor-pointer overflow-hidden 
             transition-all duration-300 ease-out
             hover:w-60 hover:h-60 "
            >
              <div onClick={minivideoClick} className=" scale-50 opacity-100  ">
                <video
                  ref={nxtVideoRef}
                  src={getVideoSrc(upcomingVideoIndex)}
                  loop
                  muted
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </div>
            <div
              className=" 
    font-['Anton']
  text-[clamp(3rem,10vw,8rem)]
  uppercase
  tracking-tight
  text-white group absolute top-25 left-10 z-50"
            >
              <div>ANIMATION</div>

              <div>GAME DESIGN</div>
            </div>
            <video
              src={getVideoSrc(curindx)}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Landpage;

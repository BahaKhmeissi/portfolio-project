import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Baha2 from "../assets/Baha2.png";
import { Link } from "react-scroll";
import { init } from "ityped";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";

const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: [
        "Alx Student",
        "Full stack web developer",
        "Web Designer",
        "FreeLancer",
      ],
    });
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div name="home" className="w-full  ">
      {/* container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center    ">
        <img
          className="max-w-[200px]  h-[400px] my-5 pt-[100px] bahaImg "
          src={Baha2}
          alt=""
        />
        <p className="text-red-600 font-bold">Hello, I go by the name of </p>
        <h1
          className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]"
          style={{ color: darkMode ? "#ccd6f6" : "#0a192f" }}
        >
          Baha Khmeissi
        </h1>
        <h2
          className="text-4-xl sm:text-4xl font-bold max- text-[#8892b0] "
          style={{ color: darkMode ? "#8892b0" : "#0a192f" }}
        >
          I'm a <span ref={textRef}> </span>
        </h2>
        <p
          className="text-[#8892b0] py-4 max-w-[900px]"
          style={{ color: darkMode ? "#8892b0" : "#0a192f" }}
        >
          I am a dynamic full-stack developer with a passion for crafting
          immersive digital solutions. My expertise lies in creating seamless
          and visually striking web applications that adapt flawlessly to
          diverse devices. I thrive on the intersection of design and
          functionality, consistently pushing the boundaries to deliver
          unparalleled digital experiences
        </p>
        <div>
          <button
            className={
              darkMode
                ? "text-white group border-2 font-bold px-4 py-3 my-2 flex items-center rounded-lg hover:bg-red-600 hover:border-red-600"
                : "text-black group border-2 border-black px-4 py-3 my-2 flex rounded-lg items-center font-bold hover:bg-red-600 hover:border-red-600"
            }
          >
            <Link to="work" spy={true} smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

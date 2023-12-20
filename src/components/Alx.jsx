import React from "react";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";
import Aos from "aos";
import "aos/dist/aos.css";
import alx from "../assets/alx.jpg";

const Alx = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      name="Alx"
      className={
        darkMode ? "  w-full     text-gray-300 " : "  w-full   text-[#0a192f] "
      }
      id="Alx"
    >
      <div className="flex flex-col  items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div data-aos="fade-down" className=" sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-red-600">
              Alx
            </p>
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img
                className="imgLife"
                src={alx}
                alt=""
                style={{ width: "280px", height: "300px" }}
              />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            The past year at ALX's Software Engineering program has been a
            thrilling adventure filled with challenges and exciting projects.
            Collaborating with wonderful teammates has added a rich dimension to
            the learning experience. From overcoming coding challenges to
            working on engaging projects, every moment has contributed to my
            growth as a software engineer. The camaraderie within the team has
            made the journey not only educational but also immensely enjoyable.
            Looking back, I feel a sense of accomplishment and readiness to
            apply the skills and knowledge gained in this dynamic and
            collaborative environment to future endeavors in the field of
            software engineering.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alx;

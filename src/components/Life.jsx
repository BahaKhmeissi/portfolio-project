import React from "react";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";
import Aos from "aos";
import "aos/dist/aos.css";
import little from "../assets/little.jpg";
import camp from "../assets/camp.jpg";
import code from "../assets/code.jpg";
import gym from "../assets/gym.jpg";

const Life = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      name="Life"
      className={
        darkMode ? "  w-full     text-gray-300 " : "  w-full   text-[#0a192f] "
      }
      id="Life"
    >
      <div className="flex flex-col  items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div data-aos="fade-down" className=" sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-red-600">
              Personal Life
            </p>
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img
                style={{ width: "280px", height: "300px" }}
                src={little}
                alt=""
                className="imgLife"
              />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            In my childhood, laughter echoed in every corner, as days were a
            symphony of playful escapades and bedtime tales. Love enveloped me
            in a comforting embrace, creating a canvas of cherished memories
            that still paint my world with joy.
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img
                style={{ width: "280px", height: "300px" }}
                src={gym}
                alt=""
                className="imgLife"
              />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            As I entered adulthood, the gym became my sanctuary, sculpting not
            just a physique but resilience. Weightlifting transformed from a
            habit into a passion, fostering discipline and a robust, fit body,
            intertwining strength with a newfound sense of self.
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img
                style={{ width: "280px", height: "300px" }}
                src={camp}
                alt=""
                className="imgLife"
              />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            Embracing the allure of camping, my passion evolved into a deep
            connection with nature. Amidst serene landscapes and crackling
            campfires, I found solace, adventure, and a pure escape, nurturing
            my spirit and fostering a profound appreciation for the great
            outdoors.
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img
                style={{ width: "280px", height: "300px" }}
                src={code}
                alt=""
                className="imgLife"
              />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            Embarking on the journey of learning to code, I immersed myself in
            the captivating realm of web development. Through countless lines of
            code, challenges turned into triumphs, leading to the creation of
            cool websites that reflected both my evolving skills and creative
            aspirations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;

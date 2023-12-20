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
              <img style={{ height: "300px" }} src={little} alt="" />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            I am passionate Life building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. I'm passionate Life bringing both the
            technical and visual aspects of digital products to life. User
            experience, beautiful pixels and writing clean accessible, human
            code matters to me. I sweat the details. What would you do if you
            had a software expert available at your fingertips?
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img style={{ height: "300px" }} src={gym} alt="" />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            I am passionate Life building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. I'm passionate Life bringing both the
            technical and visual aspects of digital products to life. User
            experience, beautiful pixels and writing clean accessible, human
            code matters to me. I sweat the details. What would you do if you
            had a software expert available at your fingertips?
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img style={{ height: "300px" }} src={camp} alt="" />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            I am passionate Life building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. I'm passionate Life bringing both the
            technical and visual aspects of digital products to life. User
            experience, beautiful pixels and writing clean accessible, human
            code matters to me. I sweat the details. What would you do if you
            had a software expert available at your fingertips?
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              <img style={{ height: "300px" }} src={code} alt="" />
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            I am passionate Life building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. I'm passionate Life bringing both the
            technical and visual aspects of digital products to life. User
            experience, beautiful pixels and writing clean accessible, human
            code matters to me. I sweat the details. What would you do if you
            had a software expert available at your fingertips?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Life;

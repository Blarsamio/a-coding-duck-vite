import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-x-4">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="h2 leading-tight text-reseda">
                my latest work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                varius turpis nec ultricies lacinia.
              </p>
              <button className="btn btn-sm self-start">view all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="portfolio"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-bone">full stack dev</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">metarina</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4"
          >
            {/* image */}
            <div className="group relative overflow-hidden">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="portfolio"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-bone">UI/UX design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-3xl text-white">w-food</span>
              </div>
            </div>
            <div className="flex-1">
              {/* image */}
              <div className="group relative overflow-hidden">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* image */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt="portfolio"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-bone">UI/UX design</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">zenbrew</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

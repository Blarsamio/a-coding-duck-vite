import React from "react";
import Image from "../assets/me.jpg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              patricio <br /><span>pérez herrero</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]"
            >
              <span className="text-black"> i'm a </span>
              <TypeAnimation
                className="text-reseda lowercase"
                sequence={[
                  "developer",
                  2000,
                  "designer",
                  2000,
                  "freelancer",
                  2000,
                  'teacher',
                  2000
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-[20px]"
            >
              i like bringing life to code, <br />
              and code to life.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                className="btn btn-lg italic cursor-pointer text-center"
                smooth={true}
                spy={true}
                activeClass="active"
              >
              contact me
              </Link>
              <a href="#" className="text-gradient btn-link hover:text-reseda hover:underline hover:underline-offset-[0.2em] ">
                my portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#" className="text-white">
                <FaYoutube />
              </a>
              <a href="#" className="text-white">
                <FaGithub />
              </a>
              <a href="#" className="text-white">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[482px] lg:max-w-[482px]:"
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

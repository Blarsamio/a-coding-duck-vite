import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img from "../assets/board.jpg";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 h-[500px] mix-blend-lighten bg-top"
          >
            <img src={Img} alt="about" className="object-cover w-full h-full" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-reseda">about me.</h2>
            <h3 className="h3 mb-4">
              I'm a freelance front-end developer with over 2 years of
              experience.
            </h3>
            <p className="mb-6">
              I specialize in creating fast and responsive websites that are
              accessible to everyone. I have a strong passion for web
              development and I love to stay up-to-date with the latest
              technologies. I'm a self-taught developer and I'm always looking
              for new challenges.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-2">
                  {inView ? (
                    <CountUp start={0} end={13} duration={3} className="" />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
            <Link
                to="contact"
                className="btn btn-lg italic cursor-pointer text-center"
                smooth={true}
                spy={true}
                activeClass="active"
              >
              contact me
              </Link>
              <a href="#" className="text-gradient btn-link">
                my portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

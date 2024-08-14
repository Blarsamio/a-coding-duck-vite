import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
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
            className="flex-1 h-[500px] mix-blend-lighten lg:bg-work lg:bg-cover bg-no-repeat hidden lg:block"
          >
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-center"
          >
            <h2 className="h2 text-reseda">about me.</h2>
            <h3 className="h3 mb-4 dark:text-isabelline">
              I'm a full-stack web developer and teacher with over 3 years of experience.
            </h3>
            <p className="mb-6 dark:text-isabelline">
              I specialize in creating fast and responsive websites that are
              accessible to everyone. I have a strong passion for web
              development and I love to stay up-to-date with the latest
              technologies, not only for my own personal growth but also to
              share my knowledge with others.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-2 dark:text-isabelline">
                  {inView ? (
                    <CountUp start={0} end={3} duration={3} className="" />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] dark:text-isabelline">
                  years of <br /> experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-2 dark:text-isabelline">
                  {inView ? <CountUp start={0} end={200} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] dark:text-isabelline">
                  students <br /> taught
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 pt-2 dark:text-isabelline">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] dark:text-isabelline">
                  workshops <br /> given
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

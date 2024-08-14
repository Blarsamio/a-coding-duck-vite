import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "web development",
    description:
      "I specialize in creating fast and responsive websites that are accessible to everyone, using modern technologies like Ruby on Rails, React and Next.js.",
    link: "Learn more",
  },
  {
    name: "web design",
    description:
      "I create beautiful and user-friendly designs that are tailored to your brand. I have experience with modern design tools like Figma and Adobe XD.",
    link: "Learn more",
  },
  {
    name: "mentorship",
    description:
      "I offer one-on-one mentoring sessions for aspiring developers. I can help you with anything from learning the basics of web development to preparing for job interviews.",
    link: "Learn more",
  },
  {
    name: "workshops",
    description:
      "I organize workshops on various topics related to web development. I have experience teaching both online and in-person workshops, also in a corporate setting.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-center bg-no-repeat mb-12 lg:mb-0 hidden lg:block"
            id="services-noshow"
          >
            <h3 className="h3 max-w-[455px] mb-16 text-transparent pointer-events-none">
              I'm a freelance front-end developer with over 2 years of
              experience.
              <br />
              I specialize in creating fast and responsive websites that are
              <br />
              accessible to everyone. I have a strong passion for web
              <br />
              development and I love to stay up-to-date with the latest
            </h3>
            <Link to="work" smooth={true} spy={true} activeClass="active">
              <button className="btn btn-lg">see my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
            id="services-show"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-black/20 h-[146px] lg:mb-[18px] flex dark:border-isabelline/50"
                    key={index}
                  >
                    <div className="max-w-[576px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-reseda">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight text-base lg:text-xl dark:text-isabelline">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end flex-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center dark:bg-black dark:text-isabelline dark:hover:text-reseda dark:hover:border-reseda dark:hover:border-2"
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

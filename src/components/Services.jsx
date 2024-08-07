import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "web development",
    description:
      "I specialize in creating fast and responsive websites that are accessible to everyone. I have a strong passion for web development.",
    link: "Learn more",
  },
  {
    name: "web design",
    description:
      "I create beautiful and user-friendly designs that are tailored to your brand. I have experience with modern design tools like Figma and Adobe XD.",
    link: "Learn more",
  },
  {
    name: "SEO Optimization",
    description:
      "I can help you optimize your website for search engines to increase your visibility online. I have experience with on-page and off-page SEO techniques.",
    link: "Learn more",
  },
  {
    name: "e-commerce solutions",
    description:
      "I can help you set up an online store that is easy to manage and user-friendly. I have experience with popular e-commerce platforms like Shopify and WooCommerce.",
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
            className="flex-1 lg:bg-services lg:bg-center bg-no-repeat mb-12 lg:mb-0"
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
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-black/20 h-[146px] lg:mb-[18px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-reseda">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end flex-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
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

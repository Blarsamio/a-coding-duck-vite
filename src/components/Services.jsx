import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Development",
    description:
      "I specialize in creating fast and responsive websites that are accessible to everyone. I have a strong passion for web development and I love to stay up-to-date with the latest technologies.",
    link: "Learn more",
  },
  {
    name: "UX/UI Design",
    description:
      "I create beautiful and user-friendly designs that are tailored to your brand. I have experience with modern design tools like Figma and Adobe XD. I always strive to create designs that are not only visually appealing but also functional.",
    link: "Learn more",
  },
  {
    name: "SEO Optimization",
    description:
      "I can help you optimize your website for search engines to increase your visibility online. I have experience with on-page and off-page SEO techniques that can help improve your website’s ranking on search engines like Google.",
    link: "Learn more",
  },
  {
    name: "E-Commerce Solutions",
    description:
      "I can help you set up an online store that is easy to manage and user-friendly. I have experience with popular e-commerce platforms like Shopify and WooCommerce.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image*/}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 ">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[576px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
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

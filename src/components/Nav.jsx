import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-0 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav */}
        <div className="w-full bg-isabelline/60 h-[46px] backdrop-blur-2xl items-center max-w-[460px] px-5 flex justify-between text-2xl text-black/50 mx-auto">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            home
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            about
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            services
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            work
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

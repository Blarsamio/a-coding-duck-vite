import React from "react";
// components
import Banner from "./components/Banner.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="overflow-hidden dark:bg-black">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;

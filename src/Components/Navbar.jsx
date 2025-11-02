import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "risk", "assign", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (section) =>
    `font-medium transition-colors ${
      activeSection === section
        ? "text-orange-600 border-b-2 border-orange-600 pb-1"
        : "text-gray-700 hover:text-orange-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  
        <h1 className="text-2xl font-extrabold text-orange-600 tracking-tight">
          Risk<span className="text-gray-800">Manager</span>
        </h1>

        
        <div className="space-x-8 hidden md:flex">
          <a href="#home" className={linkClasses("home")}>
            Home
          </a>
          <a href="#risk" className={linkClasses("risk")}>
            Risks
          </a>
          <a href="#assign" className={linkClasses("assign")}>
            Submission
          </a>
          <a href="#contact" className={linkClasses("contact")}>
            Contact
          </a>
        </div>

      
        <a
          href="#assign"
          className="hidden md:inline-block bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-700 transition"
        >
          Submit Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

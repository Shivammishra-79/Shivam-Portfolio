import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Certification from "./components/Certification/Certification";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  const backgrounds = [
    "bg-[#050414]",
    "bg-[#1a1a1a]",
    "bg-[#2d0a0a]",
    "bg-[#0a2d0a]",
    "bg-[#0a1f2d]",
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [showGallery, setShowGallery] = useState(false); // 🔹 gallery toggle state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Logo click पर toggle
  const handleLogoClick = () => {
    setShowGallery((prev) => !prev);
  };

  return (
    <div className={`transition-colors duration-1000 ${backgrounds[currentBg]}`}>
      {/* Blur effect */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Overlay grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        {/* 🔹 Navbar ko prop diya */}
        <Navbar onLogoClick={handleLogoClick} />

        {/* 🔹 Agar gallery open hai to Gallery modal dikhao */}
        {showGallery ? (
          <Gallery onClose={() => setShowGallery(false)} />
        ) : (
          <>
            <About />
            <Skills />
            <Experience />
            <Work />
            <Certification />
            <Education />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

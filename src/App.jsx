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

const App = () => {
  // Background colors ka array
  const backgrounds = [
    "bg-[#050414]", // blackish blue
    "bg-[#1a1a1a]", // dark gray
    "bg-[#2d0a0a]", // dark red
    "bg-[#0a2d0a]", // dark green
    "bg-[#0a1f2d]", // dark navy
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-colors duration-1000 ${backgrounds[currentBg]}`}>
      {/* Blur effect */}
      <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />

      {/* Overlay grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Certification />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

// ✅ New TypingEffect with stable state machine
const TypingEffect = ({ words, speed = 100, eraseSpeed = 50, delay = 1500, onCycleChange }) => {
  const [index, setIndex] = useState(0); // Current word index
  const [subIndex, setSubIndex] = useState(0); // Current character index
  const [phase, setPhase] = useState("typing"); // typing | pausing | erasing

  useEffect(() => {
    let timeout;

    if (phase === "typing") {
      if (subIndex < words[index].length) {
        timeout = setTimeout(() => setSubIndex((prev) => prev + 1), speed);
      } else {
        setPhase("pausing");
      }
    } 
    else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), delay);
    } 
    else if (phase === "erasing") {
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex((prev) => prev - 1), eraseSpeed);
      } else {
        const nextIndex = (index + 1) % words.length;
        setIndex(nextIndex);
        setPhase("typing");

        // ✅ Full cycle completed (when it resets to 0)
        if (nextIndex === 0) {
          onCycleChange();
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, phase, words, speed, eraseSpeed, delay, onCycleChange]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const About = () => {
  const [isRed, setIsRed] = useState(false);

  // 🔥 Toggle theme after full cycle
  const handleCycleChange = () => setIsRed((prev) => !prev);

  const textColor = isRed ? "#ff004c" : "#8245ec"; // Purple → Red
  const gradient = isRed
    ? "linear-gradient(90deg, #ff004c, #ff7a00)"
    : "linear-gradient(90deg, #8245ec, #a855f7)";
  const boxShadow = isRed
    ? "0 0 10px #ff004c, 0 0 40px #ff004c"
    : "0 0 10px #8245ec, 0 0 40px #8245ec";

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shivam Mishra
          </h2>

          {/* Typing Effect */}
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            style={{ color: textColor }}
          >
            <span className="text-white">I am a </span>
            <TypingEffect
              words={[
                "Software Developer",
                "Android Developer",
                "Java Developer",
                "SQL Developer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              delay={1500}
              onCycleChange={handleCycleChange}
            />
          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m Shivam Mishra, an MCA graduate from Mumbai University with a
            CGPA of 8.66, passionate about building scalable and user-focused
            applications. Skilled in Java, C#, Python, and modern frameworks, I
            have hands-on experience in web, mobile, and API-based projects,
            along with databases, cloud technologies, and Agile development. I
            enjoy solving problems, learning new tools, and creating solutions
            that make a real impact.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1bhZhu8rA1urqrTzwDY8eRA8h1askuIVj/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: gradient,
              boxShadow: boxShadow,
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            style={{
              border: `4px solid ${isRed ? "#ff004c" : "#8245ec"}`,
              boxShadow: boxShadow,
            }}
          >
            <img
              src={profileImage}
              alt="Shivam Mishra"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

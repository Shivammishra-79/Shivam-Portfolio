import React from "react";
import { certifications } from "../../constants";

const Certification = () => {
  return (
    <section
      id="certification"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my certifications and credentials
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-2xl shadow-lg border border-gray-700 bg-gray-900 
                       backdrop-blur-md transition-transform transform hover:scale-105"
          >
            {/* Logo */}
            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-md overflow-hidden">
              <img
                src={cert.img}
                alt={cert.provider}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title, Provider, Date */}
            <h3 className="text-lg font-semibold text-white text-center">{cert.title}</h3>
            <p className="text-sm text-gray-400 text-center">{cert.provider}</p>
            <p className="text-xs text-gray-500 text-center">{cert.date}</p>

            {/* Credential ID (Optional) */}
            {cert.credential && (
              <p className="mt-2 text-xs text-gray-400 text-center">
                Credential ID: {cert.credential}
              </p>
            )}

            {/* Button */}
            <div className="flex justify-center mt-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg 
                           shadow-md hover:bg-purple-700 transition"
              >
                Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;

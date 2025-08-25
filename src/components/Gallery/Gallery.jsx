import React, { useState, useEffect } from "react";

import img1 from "../../assets/Gallery_Img/1.png";
import img2 from "../../assets/Gallery_Img/2.png";
import img3 from "../../assets/Gallery_Img/3.png";
import img4 from "../../assets/Gallery_Img/4.png";
import img5 from "../../assets/Gallery_Img/5.png";
import img6 from "../../assets/Gallery_Img/6.png";
import img7 from "../../assets/Gallery_Img/7.png";
import img8 from "../../assets/Gallery_Img/8.png";
import img9 from "../../assets/Gallery_Img/9.png";
import img10 from "../../assets/Gallery_Img/10.png";
import img11 from "../../assets/Gallery_Img/11.png";
import img12 from "../../assets/Gallery_Img/12.png";
import img13 from "../../assets/Gallery_Img/13.png";
import img14 from "../../assets/Gallery_Img/14.png";
import img15 from "../../assets/Gallery_Img/15.png";
import img16 from "../../assets/Gallery_Img/16.png";
import img17 from "../../assets/Gallery_Img/17.png";
import img18 from "../../assets/Gallery_Img/18.png";
import img19 from "../../assets/Gallery_Img/19.png";
import img20 from "../../assets/Gallery_Img/20.png";
import img21 from "../../assets/Gallery_Img/21.png";
import img22 from "../../assets/Gallery_Img/22.png";
import img23 from "../../assets/Gallery_Img/23.png";
import img24 from "../../assets/Gallery_Img/24.png";
import img25 from "../../assets/Gallery_Img/25.png";
import img26 from "../../assets/Gallery_Img/26.png";
import img27 from "../../assets/Gallery_Img/27.png";
import img28 from "../../assets/Gallery_Img/28.png";



const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28 ];

  // Escape key दबाने पर modal close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-16 bg-[#0a0a1a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10 rainbow-text">
        My Gallery
      </h2>

      {/* ✅ Bigger Equal Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-20">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-72 md:h-80 overflow-hidden rounded-xl cursor-pointer shadow-md"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal with Navigation */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close Button */}
            <button
              className="fixed top-6 right-6 z-[100] text-white text-4xl font-extrabold 
                         bg-black bg-opacity-50 rounded-full px-4 py-2 
                         hover:bg-red-600 transition cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            {/* ⬅️ Prev Button */}
            <button
              className="absolute left-4 md:left-10 text-white text-5xl font-bold px-3 py-1 
                         bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
              onClick={handlePrev}
            >
              ‹
            </button>

            {/* Image */}
            <img
              src={images[selectedIndex]}
              alt="Selected"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-lg"
            />

            {/* ➡️ Next Button */}
            <button
              className="absolute right-4 md:right-10 text-white text-5xl font-bold px-3 py-1 
                         bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
              onClick={handleNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

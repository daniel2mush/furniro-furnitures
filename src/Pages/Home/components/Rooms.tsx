import { useEffect, useState } from "react";
import { getImageUrl } from "../../../Utils/FetchImage";
import { FaAngleRight } from "react-icons/fa";

const Rooms = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const SlideImages: string[] = [
    getImageUrl("Slide1.png"),
    getImageUrl("Slide2.png"),
    getImageUrl("Bedroom.png"),
    getImageUrl("Dining.png"),
  ];

  const handleNextImage = () => {
    setImageIndex((prev) => (prev + 1) % SlideImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % SlideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [SlideImages.length]);

  return (
    <div className="w-full bg-primary px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center h-auto md:h-[670px] xl:px-50 lg:px-20 ">
      {/* Left Section: Text */}
      <div className="flex flex-col gap-4 justify-center h-full">
        <h1 className="font-bold text-4xl text-text-300 xl:text-6xl lg:text-5xl ">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-text-100">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="bg-secondary rounded shadow text-white px-5 py-3 w-fit">
          Explore More
        </button>
      </div>

      {/* Center Section: Static Image */}
      <div className="w-full max-h-[582px] overflow-hidden">
        <img
          src={getImageUrl("Peace.png")}
          alt="Peace"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Right Section: Slider */}
      <div className="relative w-full max-h-[582px] overflow-hidden group">
        <div
          style={{ transform: `translateX(-${imageIndex * 100}%)` }}
          className="flex transition-transform duration-700 ease-in-out w-full">
          {SlideImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[500px] rounded-lg">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-start items-center gap-3 mt-5 mx-2">
          {SlideImages.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                index === imageIndex ? "ring-secondary ring-1" : ""
              }`}>
              <div
                className={`w-2 h-2 rounded-full ${
                  index === imageIndex ? "bg-secondary" : "bg-gray-300"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextImage}
          className="ring-secondary ring-2 text-secondary bg-white flex items-center justify-center w-8 h-8 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-secondary hover:text-white transition-all duration-300">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Rooms;

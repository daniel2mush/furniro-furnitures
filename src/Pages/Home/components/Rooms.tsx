import { useEffect, useState } from "react";
import { getImageUrl } from "../../../Utils/FetchImage";
import { FaAngleRight } from "react-icons/fa";

const Rooms = () => {
  const [ImageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    setImageIndex((prev) => (prev + 1) % SlideImages.length);
  };
  const SlideImages: string[] = [
    getImageUrl("Slide1.png"),
    getImageUrl("Slide2.png"),
    getImageUrl("Bedroom.png"),
    getImageUrl("Dining.png"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % SlideImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [SlideImages.length]);

  return (
    <div className=" h-[670px] w-full bg-primary flex items-center justify-center px-[131px] gap-4">
      <div className=" flex flex-col gap-2 items-start px-10">
        <h1 className=" font-bold text-4xl text-text-300 ">
          50+ Beautiful rooms inspiration
        </h1>
        <p className=" text-text-100">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className=" bg-secondary rounded shadow text-white px-5 py-3">
          Explore More
        </button>
      </div>
      <div className=" w-[404px] h-[582px] ">
        <img
          src={getImageUrl("Peace.png")}
          alt="Peace"
          className=" object-cover w-full h-full"
        />
      </div>
      <div className=" w-[404px] h-[582px] overflow-clip  relative group   ">
        <div
          style={{ transform: `translateX(-${ImageIndex * 404}px)` }}
          className="flex transition-transform duration-700 ease-in-out ">
          {SlideImages.map((src, index) => {
            return (
              <div key={index}>
                <div key={index} className="w-[404px] h-[500px] flex-shrink-0">
                  <img
                    src={src}
                    alt="Slide"
                    className={`w-full  object-cover h-full rounded-lg`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex justify-start items-center gap-5 mt-5 mx-2">
          {SlideImages.map((src, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                index === ImageIndex ? "ring-secondary ring-1" : " "
              }`}>
              <div
                className={` w-2 h-2  rounded-full ${
                  index === ImageIndex ? "bg-secondary" : " bg-gray-200 "
                }`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNextImage}
          className=" ring-secondary ring-2 text-secondary bg-white flex items-center justify-center w-8 h-8 rounded-full absolute top-48 right-10 hover:bg-secondary hover:text-white  cursor-pointer transition-all duration-500 active:scale-105">
          <FaAngleRight className=" hover:scale-105 transition-all duration-500" />
        </button>
      </div>
    </div>
  );
};

export default Rooms;

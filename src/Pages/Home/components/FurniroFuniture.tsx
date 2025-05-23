import { useState } from "react";
import { getImageUrl } from "../../../Utils/FetchImage";

interface ImageData {
  src: string;
  title: string;
  className: string;
}

const imageList: ImageData[] = [
  {
    src: getImageUrl("Image3.png"),
    title: "Minimal Table",
    className: "md:row-span-2 md:col-span-1",
  },
  {
    src: getImageUrl("Image2.png"),
    title: "Retro Chair",
    className: "md:row-span-2 md:col-span-5",
  },
  {
    src: getImageUrl("Image6.png"),
    title: "Studio Desk",
    className: "md:row-span-4 md:col-span-3 md:flex md:items-center",
  },
  {
    src: getImageUrl("Image8.png"),
    title: "Accent Chair",
    className:
      "md:row-span-2 md:col-span-3 md:flex md:items-end md:justify-end",
  },
  {
    src: getImageUrl("Image10.png"),
    title: "Vase Stand",
    className: "md:row-span-3 md:col-span-4",
  },
  {
    src: getImageUrl("Image4.png"),
    title: "Classic Lamp",
    className: "md:row-span-2 md:col-span-2 md:overflow-clip",
  },
  {
    src: getImageUrl("Image5.png"),
    title: "Comfy Sofa",
    className: "md:row-span-4 md:col-span-4",
  },
  {
    src: getImageUrl("Image7.png"),
    title: "Outdoor Set",
    className: "md:row-span-4 md:col-span-3",
  },
  {
    src: getImageUrl("Image9.png"),
    title: "Dining Space",
    className: "md:col-span-4",
  },
];

const FurniroFuniture = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <div className="w-full px-4 md:px-20 py-20 relative">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-text-100 text-2xl">Share your setup with</h1>
        <h2 className="md:text-5xl text-3xl font-bold text-text-300">
          #FuniroFuniture
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-16 md:grid-rows-4 auto-rows-[200px] md:auto-rows-auto gap-2 md:h-[500px]">
        {imageList.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${img.className} cursor-pointer group`}
            onClick={() => setSelectedImage(img)}>
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="block md:absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm px-3 py-2 text-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[80vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default FurniroFuniture;

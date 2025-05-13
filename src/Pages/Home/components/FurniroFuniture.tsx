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
    className: "row-span-2 col-span-1",
  },
  {
    src: getImageUrl("Image2.png"),
    title: "Retro Chair",
    className: "row-span-2 col-span-5",
  },
  {
    src: getImageUrl("Image6.png"),
    title: "Studio Desk",
    className: "row-span-4 col-span-3 flex items-center",
  },
  {
    src: getImageUrl("Image8.png"),
    title: "Accent Chair",
    className: "row-span-2 col-span-3 flex items-end justify-end",
  },
  {
    src: getImageUrl("Image10.png"),
    title: "Vase Stand",
    className: "row-span-3 col-span-4",
  },
  {
    src: getImageUrl("Image4.png"),
    title: "Classic Lamp",
    className: "row-span-2 col-span-2 overflow-clip",
  },
  {
    src: getImageUrl("Image5.png"),
    title: "Comfy Sofa",
    className: "row-span-4 col-span-4",
  },
  {
    src: getImageUrl("Image7.png"),
    title: "Outdoor Set",
    className: "row-span-4 col-span-3",
  },
  {
    src: getImageUrl("Image9.png"),
    title: "Dining Space",
    className: "col-span-4",
  },
];

const FurniroFuniture = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <div className="h-[780px] w-full px-20 py-20 relative">
      <div>
        <h1 className="text-text-100 text-center text-2xl">
          Share your setup with
        </h1>
        <h2 className="text-5xl font-bold text-text-300 text-center mb-6">
          #FuniroFuniture
        </h2>
      </div>

      <div className="grid grid-cols-16 grid-rows-4 w-full h-[600px] gap-2">
        {imageList.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${img.className} cursor-pointer group`}
            onClick={() => setSelectedImage(img)}>
            <img
              src={img.src}
              alt={img.title}
              className="h-full w-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default FurniroFuniture;

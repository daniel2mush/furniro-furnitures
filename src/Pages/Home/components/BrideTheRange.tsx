import { getImageUrl } from "../../../Utils/FetchImage";

const BrideTheRange = () => {
  interface BridgePhotoTypes {
    imagePath: string;
    text: string;
  }

  const BridgePhotos: BridgePhotoTypes[] = [
    {
      text: "Dining",
      imagePath: getImageUrl("Dining.png"),
    },
    {
      text: "Living Room",
      imagePath: getImageUrl("LivingRoom.png"),
    },
    {
      text: "Bed Room",
      imagePath: getImageUrl("Bedroom.png"),
    },
  ];

  return (
    <div className=" w-full py-10   ">
      <div className=" flex items-center flex-col ">
        <div className=" mx-10">
          <h1 className=" font-bold text-2xl text-center md:text-4xl text-text-300 ">
            Bridge The range
          </h1>
          <p className=" text-text-100 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 mx-10">
          {BridgePhotos.map((items, index) => (
            <section
              key={index}
              className=" flex flex-col justify-center items-center   transition-all cursor-pointer ">
              <div className=" h-[480px]  rounded">
                <img
                  src={items.imagePath}
                  alt={items.text}
                  className=" object-cover h-full  hover:scale-105 transition-all duration-300 rounded hover:shadow-2xl"
                />
              </div>
              <h1 className="  mt-5 text-2xl mb-5">{items.text}</h1>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrideTheRange;

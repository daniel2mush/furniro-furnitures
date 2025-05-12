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
    <div className=" h-[773px] w-full px-[131px] py-[56px] flex justify-center ">
      <div className=" flex items-center flex-col">
        <h1 className=" font-bold text-2xl text-text-300"> Bridge The range</h1>
        <p className=" text-text-100 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti.
        </p>
        <div className=" flex justify-between items-center gap-4 mt-10">
          {BridgePhotos.map((items) => (
            <section className=" flex flex-col justify-center items-center   transition-all cursor-pointer ">
              <div className=" h-[480] w-[381] rounded">
                <img
                  src={items.imagePath}
                  alt={items.text}
                  className=" object-cover h-full  hover:scale-105 transition-all duration-300 rounded hover:shadow-2xl"
                />
              </div>
              <h1 className=" font-bold mt-8">{items.text}</h1>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrideTheRange;

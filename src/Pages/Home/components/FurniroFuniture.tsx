import { getImageUrl } from "../../../Utils/FetchImage";

const FurniroFuniture = () => {
  return (
    <div className=" h-[780px] w-full px-20 py-5">
      <div>
        <h1 className=" text-text-100 text-center">Share your setup with</h1>
        <h1 className=" text-4xl font-bold text-text-300 text-center">
          #FuniroFuniture
        </h1>
      </div>
      <div className="grid grid-cols-16 grid-rows-4 w-full h-[600px]  gap-2">
        <div className=" h-full w-full row-span-2">
          <img
            src={getImageUrl("Image3.png")}
            alt="image1 "
            className=" h-full object-cover w-full"
          />
        </div>
        <div className="  h-full w-full  row-span-2 col-span-5">
          <img
            src={getImageUrl("Image2.png")}
            alt="image1 "
            className=" object-cover h-full w-full"
          />
        </div>
        <div className=" flex items-center h-full w-full  row-span-4 col-span-3">
          <img
            src={getImageUrl("Image6.png")}
            alt="image1 "
            className=" object-cover h-[50%] w-full"
          />
        </div>
        <div className=" h-full w-full row-span-2 col-span-3 flex justify-end items-end ">
          <img
            src={getImageUrl("Image8.png")}
            alt="image1 "
            className=" object-cover h-[80%] w-full"
          />
        </div>
        <div className=" h-full w-full row-span-3 col-span-4 ">
          <div className=" h-full w-full row-span-2 col-span-3 flex justify-end items-end ">
            <img
              src={getImageUrl("Image10.png")}
              alt="image1 "
              className=" object-cover h-full w-full"
            />
          </div>
        </div>
        <div className=" h-full w-full row-span-2 col-span-2">
          <div className=" h-full w-full row-span-2 col-span-3 flex justify-end items-end  overflow-clip">
            <img
              src={getImageUrl("Image4.png")}
              alt="image1 "
              className=" object-cover full w-full"
            />
          </div>
        </div>
        <div className=" bg-amber-500 h-full w-full row-span-4 col-span-4">
          <img
            src={getImageUrl("Image5.png")}
            alt="image1 "
            className=" object-cover h-full w-full"
          />
        </div>
        <div className=" bg-amber-500 h-full w-full col-span-3 row-span-4">
          <img
            src={getImageUrl("Image7.png")}
            alt="image1 "
            className=" object-cover h-full w-full"
          />
        </div>
        <div className=" bg-amber-500 h-full w-full col-span-4">
          <img
            src={getImageUrl("Image9.png")}
            alt="image1 "
            className=" object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FurniroFuniture;

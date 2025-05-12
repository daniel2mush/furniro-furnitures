import { getImageUrl } from "../../../Utils/FetchImage";
const Hero = () => {
  return (
    <div className=" h-[700px] w-full relative">
      <div className="  h-full w-full">
        <img
          src={getImageUrl("Hero.png")}
          alt="Hero image"
          className=" object-cover w-full h-full object-right"
        />
      </div>
      <div className=" absolute top-[20%] right-10 h-[443px] w-[643px] bg-primary rounded shadow-xl flex flex-col justify-center items-start p-10">
        <h3 className=" font-semibold text-text-300 mb-2">New Arrival</h3>
        <h1 className=" font-bold text-7xl text-secondary">
          Discover Our New Collection
        </h1>
        <p className=" text-text-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic
          deleniti ratione dignissimos tempora facilis repellat a modi
          perferendis iusto.
        </p>
        <button className=" px-5 py-3 w-40 bg-secondary mt-4 text-white rounded shadow cursor-pointer hover:bg-secondary/80 active:bg-secondary/70">
          {" "}
          Buy
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { getImageUrl } from "../../../Utils/FetchImage";
const Hero = () => {
  return (
    <div className=" min-h-screen w-full relative">
      <div className="  h-full w-full ">
        <img
          src={getImageUrl("Hero.png")}
          alt="Hero image"
          className=" object-cover h-screen object-right"
        />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[443px] w-[50%] bg-primary rounded shadow-xl flex flex-col justify-center items-start p-10">
        <h3 className="  text-text-300 mb-2 text-3xl">New Arrival</h3>
        <h1 className=" font-bold text-2xl md:text-5xl sm:text-5xl lg:text-7xl xl:text-7xl text-secondary">
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

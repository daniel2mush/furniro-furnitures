import BrideTheRange from "./components/BrideTheRange";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import Rooms from "./components/Rooms";
import TabBar from "./components/TabBar";

const Home = () => {
  return (
    <div className=" w-full h-auto">
      <TabBar />
      <Hero />
      <BrideTheRange />
      <OurProducts />
      <Rooms />
    </div>
  );
};

export default Home;

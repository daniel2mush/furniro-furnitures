import ContainerTracker from "../../components/ContainerTracker";
import BrideTheRange from "./components/BrideTheRange";
import Footer from "./components/Footer";
import FurniroFuniture from "./components/FurniroFuniture";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import Rooms from "./components/Rooms";

const Home = () => {
  return (
    <div className=" w-full h-auto">
      <Hero />
      <ContainerTracker>
        {" "}
        <BrideTheRange />
      </ContainerTracker>
      <ContainerTracker>
        {" "}
        <OurProducts />
      </ContainerTracker>
      <ContainerTracker>
        {" "}
        <Rooms />
      </ContainerTracker>
      <ContainerTracker>
        {" "}
        <FurniroFuniture />
      </ContainerTracker>
    </div>
  );
};

export default Home;

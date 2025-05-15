import { motion } from "framer-motion";
import { getImageUrl } from "../../../Utils/FetchImage";

const Hero = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };

  return (
    <div className="min-h-screen w-full relative">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="h-full w-full">
        <img
          src={getImageUrl("Hero.png")}
          alt="Hero image"
          className="object-cover h-screen object-right"
        />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 right-10 -translate-y-1/2 h-[443px] w-[50%] bg-primary rounded shadow-xl flex flex-col justify-center items-start p-10">
        <motion.h3
          variants={headingVariants}
          className="text-text-300 mb-2 text-3xl">
          New Arrival
        </motion.h3>
        <motion.h1
          variants={headingVariants}
          className="font-bold text-2xl md:text-5xl sm:text-5xl lg:text-7xl xl:text-7xl text-secondary">
          Discover Our New Collection
        </motion.h1>
        <motion.p variants={contentVariants} className="text-text-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic
          deleniti ratione dignissimos tempora facilis repellat a modi
          perferendis iusto.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          className="px-5 py-3 w-40 bg-secondary mt-4 text-white rounded shadow cursor-pointer hover:bg-secondary/80 active:bg-secondary/70">
          Buy
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;

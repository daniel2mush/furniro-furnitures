import { motion } from "framer-motion";
import { getImageUrl } from "../../../Utils/FetchImage";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex justify-center items-center">
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0">
        <img
          src={getImageUrl("Hero.png")}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-6 md:px-20 max-w-5xl text-white text-center flex flex-col items-center justify-center min-h-screen">
        <motion.h3
          variants={fadeInUp}
          className="text-lg md:text-3xl text-secondary mb-2">
          New Arrival
        </motion.h3>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight max-w-6xl">
          Discover Our New Collection
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-200 max-w-2xl mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic
          deleniti ratione dignissimos tempora facilis repellat a modi
          perferendis iusto.
        </motion.p>

        <motion.button
          variants={fadeInUp}
          className="mt-6 px-6 py-3 bg-secondary text-white rounded shadow hover:bg-secondary/80 active:bg-secondary/70 w-fit">
          Buy Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

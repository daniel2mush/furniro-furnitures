import { useState, useEffect } from "react";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import logo from "../../../Assets/Logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { easeOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TabBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [liIndex, setLiIndex] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const TabBarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  };

  const TabItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  const IconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  const handleNavigation = (location: string, index: number) => {
    setLiIndex(index);
    navigate(location);
  };

  interface LiNavTextType {
    name: string;
    location: string;
  }

  const LiNavText: LiNavTextType[] = [
    {
      name: "Home",
      location: "/",
    },
    {
      name: "Shop",
      location: "/shop",
    },
    {
      name: "About",
      location: "/about",
    },
    {
      name: "Contact",
      location: "/contact",
    },
  ];

  return (
    <motion.div
      variants={TabBarVariants}
      initial="hidden"
      animate="visible"
      className={`w-full h-[100px] py-15 px-15 flex justify-between items-center fixed top-0 left-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
      <motion.div variants={TabItemVariants} className="w-[185px]">
        <a href="#">
          <img src={logo} alt="Logo here" className="w-full object-contain" />
        </a>
      </motion.div>

      <motion.div
        className="flex justify-between items-center gap-5"
        initial="hidden"
        animate="visible"
        variants={TabItemVariants}
        transition={{ delayChildren: 0.2, staggerChildren: 0.3 }}>
        <ul className="flex justify-between items-center gap-5">
          {LiNavText.map((items, index) => (
            <div>
              <motion.li
                onClick={() => handleNavigation(items.location, index)}
                className="cursor-pointer transition-all hover:scale-110 hover:text-text-300"
                variants={TabItemVariants}>
                {items.name}
              </motion.li>
              {liIndex === index && (
                <motion.div
                  variants={{
                    scale: {
                      scaleX: 0,
                      originX: 0,
                    },
                    normal: {
                      scaleX: 1,
                      originX: 0,
                    },
                  }}
                  initial="scale"
                  animate="normal"
                  transition={{ duration: 0.5, ease: easeOut }}
                  className=" bg-secondary w-full h-1 rounded"
                />
              )}
            </div>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={IconVariants}
        className="flex justify-between items-center gap-5">
        <BiUser
          size={25}
          className="cursor-pointer hover:scale-125 transition-all duration-200"
        />
        <BiSearch
          size={25}
          className="cursor-pointer hover:scale-125 transition-all duration-200"
        />
        <BiHeart
          size={25}
          className="cursor-pointer hover:scale-125 transition-all duration-200"
        />
        <FiShoppingCart
          size={25}
          className="cursor-pointer hover:scale-125 transition-all duration-200"
        />
      </motion.div>
    </motion.div>
  );
};

export default TabBar;

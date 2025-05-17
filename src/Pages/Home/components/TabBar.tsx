import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../Assets/Logo.png";

const navLinks = [
  { name: "Home", location: "/" },
  { name: "Shop", location: "/shop" },
  { name: "About", location: "/about" },
  { name: "Contact", location: "/contact" },
];

const TabBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const toggleSideBar = () => setIsSideBar(!isSideBar);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path: string, index: number) => {
    setActiveIndex(index);
    navigate(path);
    setIsSideBar(false); // Close sidebar on mobile
  };

  const renderIcons = () => (
    <div className="flex gap-5 items-center">
      <BiUser size={24} className="cursor-pointer hover:scale-110 transition" />
      <BiSearch
        size={24}
        className="cursor-pointer hover:scale-110 transition"
      />
      <BiHeart
        size={24}
        className="cursor-pointer hover:scale-110 transition"
      />
      <FiShoppingCart
        size={24}
        className="cursor-pointer hover:scale-110 transition"
      />
    </div>
  );

  return (
    <header>
      {/* Desktop Nav */}
      {width > 768 && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`fixed top-0 left-0 w-full h-[100px] px-10 flex justify-between items-center z-50 transition-all ${
            scrolled ? "bg-white shadow-md" : "bg-white "
          }`}>
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-[160px] object-cover " />

          {/* Navigation Links */}
          <ul className="flex gap-8 text-lg font-medium">
            {navLinks.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavigation(item.location, index)}
                className={`cursor-pointer hover:text-text-300 transition relative ${
                  activeIndex === index ? "text-text-300" : ""
                }`}>
                {item.name}
                {activeIndex === index && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 w-full h-1 bg-secondary rounded"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Icons */}
          {renderIcons()}
        </motion.div>
      )}

      {/* Mobile Menu Button */}
      {width <= 768 && (
        <button
          onClick={toggleSideBar}
          className="fixed top-5 left-5 z-50 p-2 bg-white shadow-md rounded-full">
          {isSideBar ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSideBar && width <= 768 && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleSideBar}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-[50%] h-full bg-white z-50 shadow-lg p-6 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="Logo" className="w-[120px]" />
                <X onClick={toggleSideBar} className="cursor-pointer" />
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleNavigation(item.location, index)}
                    className="cursor-pointer hover:text-primary transition">
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">{renderIcons()}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TabBar;

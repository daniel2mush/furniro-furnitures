import { BiHeart, BiSearch, BiUser } from "react-icons/bi";
import logo from "../../../Assets/Logo.png";
import { FiShoppingCart } from "react-icons/fi";

const TabBar = () => {
  return (
    <div className=" w-full h-[100px] py-15 px-15 flex justify-between items-center">
      <div className=" w-[185px] ">
        <a href="#">
          {" "}
          <img src={logo} alt="Logo here" className=" w-full object-contain" />
        </a>
      </div>
      <div>
        <ul className=" flex justify-between items-center gap-5 ">
          <li className=" cursor-pointer  transition-all hover:scale-110  hover:text-text-300">
            Home
          </li>
          <li className=" cursor-pointer  transition-all hover:scale-110  hover:text-text-300">
            Shop
          </li>
          <li className=" cursor-pointer  transition-all hover:scale-110  hover:text-text-300">
            About
          </li>
          <li className=" cursor-pointer  transition-all hover:scale-110  hover:text-text-300">
            Contact
          </li>
        </ul>
      </div>

      <div className=" flex justify-between items-center gap-5">
        <BiUser
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all duration-200"
        />
        <BiSearch
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all duration-200"
        />
        <BiHeart
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all duration-200"
        />
        <FiShoppingCart
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default TabBar;

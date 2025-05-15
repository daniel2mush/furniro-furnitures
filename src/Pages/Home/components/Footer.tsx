import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  interface LinkTypes {
    name: string;
    linkTo: string;
  }

  const Links: LinkTypes[] = [
    { name: "Home", linkTo: "/" },
    { name: "Shop", linkTo: "/shop" },
    { name: "About", linkTo: "/about" },
    { name: "Contact", linkTo: "/contact" },
  ];

  const Help: string[] = ["Payment Options", "Returns", "Privacy Policies"];

  const handleSubscribe = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full px-4 md:px-15 py-10 border-t border-text-100/20 bg-white dark:bg-neutral-900 dark:text-gray-300">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-200 dark:border-gray-600 pb-10">
        {/* Company Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Funiro.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mt-3">
            400 University Drive Suite 200
            <br />
            Coral Gables, Fl 331234 USA
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-600 dark:text-gray-300 text-xl">
            <a href="#" className="hover:text-secondary transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:items-center">
          <h1 className="text-lg md:text-xl text-gray-400 mb-2">Links</h1>
          <ul>
            {Links.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer my-2 text-gray-700 dark:text-gray-300">
                <Link to={link.linkTo}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col md:items-center">
          <h1 className="text-lg md:text-xl text-gray-400 mb-2">Help</h1>
          <ul>
            {Help.map((item) => (
              <li
                key={item}
                className="cursor-pointer my-2 text-gray-700 dark:text-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="text-lg md:text-xl text-gray-400 mb-2">Newsletter</h1>
          <div className="mt-4 flex flex-col lg:flex-row  items-start sm:items-center gap-4">
            <div className="w-full sm:flex-1 border-b-2 border-gray-500 dark:border-gray-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full py-2 bg-transparent text-gray-800 dark:text-white focus:outline-none"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="rounded bg-secondary text-white px-5 py-2 hover:bg-secondary/80 active:scale-95 transition">
              Subscribe
            </button>
          </div>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center">
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          2023 Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

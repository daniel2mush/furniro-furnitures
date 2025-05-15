import { useEffect, useState, type ReactNode } from "react";
import TabBar from "../Pages/Home/components/TabBar";
import Footer from "../Pages/Home/components/Footer";
import { Menu, X } from "lucide-react"; // Or your own icon components
import { div } from "framer-motion/client";

interface RendererProps {
  children: ReactNode;
}

const Renderer: React.FC<RendererProps> = ({ children }) => {
  return (
    <div>
      <TabBar />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Renderer;

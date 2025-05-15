import type { ReactNode } from "react";
import TabBar from "../Pages/Home/components/TabBar";
import Footer from "../Pages/Home/components/Footer";

interface RendererProps {
  children: ReactNode;
}
const Renderer: React.FC<RendererProps> = ({ children }) => {
  return (
    <div>
      <TabBar />
      {children}
      <Footer />
    </div>
  );
};

export default Renderer;

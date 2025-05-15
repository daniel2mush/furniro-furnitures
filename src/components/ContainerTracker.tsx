import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const ContainerTracker = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 100, opacity: 0, scale: 0.9 },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
        },
      }}
      initial="hidden"
      animate={mainControls}>
      {children}
    </motion.div>
  );
};

export default ContainerTracker;

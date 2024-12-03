/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Tooltip = ({ children, text, position = "top", color = "bg-gray-800", textColor = "text-white" }) => {
  const [hovered, setHovered] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const childRef = useRef(null);

  useEffect(() => {
    if (childRef.current) {
      setTooltipWidth(childRef.current.offsetWidth);
    }
  }, [hovered]);

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full mb-2 left-0";
      case "bottom":
        return "top-full mt-2 left-0";
      case "left":
        return "right-full mr-2 top-1/2 transform -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 transform -translate-y-1/2";
      default:
        return "bottom-full mb-2 left-0";
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={childRef}
    >
      {children}
      {hovered && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tooltipVariants}
          className={`absolute px-3 py-2 rounded shadow-lg ${color} ${textColor} text-sm ${getPositionClasses()}`}
          style={{ width: tooltipWidth }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;

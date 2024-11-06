// Alert.js
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const alertStyles = {
  info: "bg-blue-100 text-blue-700 border border-blue-700",
  success: "bg-green-100 text-green-700 border border-green-700",
  warning: "bg-yellow-100 text-yellow-700 border border-yellow-700",
  error: "bg-red-100 text-red-700 border border-red-700",
};

const Alert = ({ message, onClose, type = "info" }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg mx-auto w-[30rem] fixed top-0 left-0 right-0 text-white px-4 py-3 z-50 text-center ${alertStyles[type]}`}
    >
      <div className="flex justify-between items-center">
        <span className="text-wrap">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-black font-bold text-2xl leading-none focus:outline-none"
        >
          &times;
        </button>
      </div>
    </motion.div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;

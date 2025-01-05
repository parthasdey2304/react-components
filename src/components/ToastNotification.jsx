import { useEffect, useState } from "react";

const ToastNotification = ({ position, text, status }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const positionClass =
    position === "top-right"
      ? "top-0 right-0"
      : position === "top-left"
      ? "top-0 left-0"
      : position === "bottom-right"
      ? "bottom-0 right-0"
      : position === "bottom-left"
      ? "bottom-0 left-0"
      : "top-0 right-0";

  const getStatusStyles = (status) => {
    switch (status) {
      case "success":
        return {
          bgClass: "bg-[#3FBF62]",
          borderClass: "border-[#2E8B57]",
          iconClass: "fa-solid fa-check-circle",
          textColor: "text-[#FEF7EA]",
        };
      case "error":
        return {
          bgClass: "bg-[#F44336]",
          borderClass: "border-[#D32F2F]",
          iconClass: "fa-solid fa-times-circle",
          textColor: "text-[#FEF7EA]",
        };
      case "loading":
        return {
          bgClass: "bg-[#FFC107]",
          borderClass: "border-[#FF9800]",
          iconClass: "fa-solid fa-spinner fa-spin",
          textColor: "text-[#2C2C2C]",
        };
      case "info":
        return {
          bgClass: "bg-[#2196F3]",
          borderClass: "border-[#1976D2]",
          iconClass: "fa-solid fa-info-circle",
          textColor: "text-[#FEF7EA]",
        };
      default:
        return {
          bgClass: "bg-[#3FBF62]",
          borderClass: "border-[#2E8B57]",
          iconClass: "fa-solid fa-check-circle",
          textColor: "text-[#FEF7EA]",
        };
    }
  };
  const { bgClass, borderClass, iconClass, textColor } =
    getStatusStyles(status);
  return (
    <div
      className={`fixed ${positionClass} mt-4 mx-4 mb-4 min-w-[22rem] transition-transform duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-[150%]"
      }`}
    >
      <div
        className={`relative py-2 px-4 rounded-md shadow-xl ${bgClass} ${borderClass} ${textColor} transition-all duration-500`}
      >
        {status === "loading" ? (
          <p className="flex items-center gap-2">
            <i className={`${iconClass} animate-spin mt-[1px]`}></i> {text} 🚀
          </p>
        ) : (
          <p className="flex items-center gap-2">
            <i className={`${iconClass} mt-[1px]`}></i> {text} 🚀
          </p>
        )}
        {/* Progress bar */}
        <div
          className={`absolute left-0 rounded-md bottom-0 h-[0.25rem] transform origin-left bg-gradient-to-r ${bgClass} to-white transition-all duration-500 w-full ${
            isVisible ? "scale-x-0" : "scale-x-100"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToastNotification;

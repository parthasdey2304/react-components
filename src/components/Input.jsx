import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Input({
  type = "text",
  name,
  value,
  onChange,
  label,
  className,
  error,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useOutsideClick(inputRef, () => setIsFocused(false));

  return (
    <>
      <div className="relative my-1 w-fit">
        <label
          htmlFor={name}
          className={twMerge(
            "absolute left-2 bg-white px-1 transition-all -z-10 duration-300",
            error && "text-red-500 ",
            isFocused || value
              ? "-top-[0.5rem] z-10 text-xs" // Moves the label to the top with a smaller font size
              : "top-1/2 -translate-y-1/2 text-base" // Centered label
          )}
        >
          {label}
        </label>
        <input
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={twMerge(
            `${
              className ?? ""
            } border border-black p-2 rounded-md z-10 bg-transparent ${
              error && "border-red-500"
            }`
          )}
          {...props}
        />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
}

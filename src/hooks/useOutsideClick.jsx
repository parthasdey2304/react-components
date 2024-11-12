import { useEffect, useState } from "react";

export default function useOutsideClick(ref, callback) {
  const [wasClickedInside, setWasClickedInside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        setWasClickedInside(true); // User clicked inside the element
      } else if (
        ref.current &&
        wasClickedInside &&
        !ref.current.contains(event.target)
      ) {
        callback();
        setWasClickedInside(false); // User clicked outside after initially clicking inside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, wasClickedInside, callback]);

  // Reset wasClickedInside when ref changes
  useEffect(() => {
    if (!ref.current) {
      setWasClickedInside(false);
    }
  }, [ref, callback]);
}

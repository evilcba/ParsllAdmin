import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible, closeModal) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

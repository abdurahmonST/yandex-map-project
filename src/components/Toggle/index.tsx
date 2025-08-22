import React, { useState, useEffect } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);
  const [textContent, setTextContent] = useState("on");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextContent(isActive ? "off" : "on");
    }, 200);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div
      className={`${styles.toggle} ${isActive ? styles.active : ""}`}
      onClick={handleToggle}
    >
      <button
        className={`${styles.button} ${isActive ? styles.active : ""}`}
        onClick={handleToggle}
      ></button>
      <span className={`${styles.text} ${isActive ? styles.textActive : ""}`}>
        {textContent}
      </span>
    </div>
  );
};

export default Toggle;

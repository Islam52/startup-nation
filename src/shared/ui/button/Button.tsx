import React from "react";
import styles from "./button.module.css";
const Button = ({ children }) => {
  return (
    <div>
      <button className={styles.app}>{children} </button>
    </div>
  );
};

export default Button;

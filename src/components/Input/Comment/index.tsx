// import React from "react";
import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.InputStyle}
        placeholder="Leave your feedback about the project"
      />
      <button className={styles.ButtonStyle}>SEND</button>
    </div>
  );
};

export default Comment;

import React from "react";
import styles from "./Message.module.scss";
import error from "../../assets/images/error.png";
import notFound from "../../assets/images/notfound.png";

const MessageUI = ({ type, message }) => {
  /*MANAGE MESSAGE DISPLAY BASED ON MESSAGE TYPE */
  const displayMsg = () => {
    if (type === "info") {
      return (
        <div className={styles.msg_container_msg}>
          <img
            src={notFound}
            alt="not-found"
            className={styles.msg_container_icon}
          />
          <p>{message}</p>
        </div>
      );
    } else if (type === "error") {
      return (
        <div className={styles.msg_container_msg}>
          <img src={error} alt="error" className={styles.msg_container_icon} />
          <p>{message}</p>
        </div>
      );
    }
  };
  return <div className={styles.msg_container}>{displayMsg()}</div>;
};

export default MessageUI;

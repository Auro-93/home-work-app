import React from "react";
import MessageUI from "./MessageUI";

const Message = ({ type, message }) => {
  return <MessageUI type={type} message={message} />;
};

export default Message;

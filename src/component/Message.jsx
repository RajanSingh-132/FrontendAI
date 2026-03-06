import React from "react";

const Message = ({ msg }) => {
  return (
    <div
      className={`message ${msg.sender}`}
      dangerouslySetInnerHTML={{ __html: msg.text }}
    />
  );
};

export default Message;
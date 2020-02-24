import React from "react";
import c from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={c.messeges}>{props.text}</div>
    )
};
export default Message;
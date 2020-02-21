import React from "react";
import c from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <div className={c.dialog}>Dima</div>
                <div className={c.dialog}>Katia</div>
                <div className={c.dialog}>Roma</div>
            </div>
            <div className={c.messeges}>
                <div className="name">Text1</div>
                <div className="name">Text2</div>
            </div>
        </div>

    )
};
export default Dialogs;
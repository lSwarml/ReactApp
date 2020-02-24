import React from "react";
import c from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageElement = props.state.messagesData.map(m => <Message text={m.message}/>);

    let NewMessage = React.createRef();
    let addMessage = () => {
        let text = NewMessage.current.value;
        alert(text)
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
               {dialogElement}
            </div>
            <div className={c.messeges}>
                <div>
                    {messageElement}
                </div>
                <textarea ref={NewMessage}/>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>

    )
};
export default Dialogs;
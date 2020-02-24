import React from "react";
import b from "./FrendNaw.module.css";
// import {NavLink} from "react-router-dom";


const FrendNawbarItem = (props) => {

    return (
        <div className={b.frtndItem}>
            <div>
                <img
                    src={props.img}
                    alt=""/>
            </div>
            {props.name}
        </div>
    )
};


export default FrendNawbarItem;
import React from "react";
import b from "./NawBar.module.css";
const Nawbar = () =>  {
    return (
        <nav className={b.sidebar}>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'> Profile</a>
            </div>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'> Messages</a>
            </div>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'> News</a>
            </div>
            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'> Music</a>
            </div>
        </nav>
    )

};
export default Nawbar;
import React from "react";
import a from "./Header.module.css";

const Header = () => {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <header className={a.header}><img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'
            alt=""/>header
        </header>
    )
};
export default Header;
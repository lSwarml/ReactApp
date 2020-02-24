import React from "react";
import b from "./NawBar.module.css";
import {NavLink} from "react-router-dom";
import FrendNawbarItem from "./FrendNaw/FrendNaw";



const Nawbar = (props) => {

    let NawbarFrend = props.state.frendNaw.map(s =>  <FrendNawbarItem name={s.name} img={s.img}/>);
    return (
        <nav className={b.sidebar}>
            <div className={b.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to='/profile' activeClassName={b.active}> Profile</NavLink>
            </div>
            <div className={b.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to='/dialogs' activeClassName={b.active}> Messages</NavLink>
            </div>
            <div className={b.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to='news' activeClassName={b.active}> News</NavLink>
            </div>
            <div className={b.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to='music' activeClassName={b.active}> Music</NavLink>
            </div>
            <div className={b.item}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <NavLink to='settings' activeClassName={b.active}> Settings</NavLink>
            </div>
            <div className={b.frendLink}>
                Frends
            </div>
            <div className={b.frendBar}>
             {NawbarFrend}
            </div>

        </nav>
    )

};
export default Nawbar;
import React, { useState,useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState([]);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]); /* this is the effect of header netflix logo & avatar which will show its background after 100px i.e. mentioned in window.scrollY. */
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
            alt="Netflix Logo"/>

            <img className="nav__avatar"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="Netflix Logo"/>
            
        </div>
    )
}

export default Nav;

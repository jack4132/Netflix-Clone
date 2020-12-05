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
    },[]); /* this is the effect of header netflix logo & avatar which will show its background after 100px i.e. mentioned in addEventListener. */
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logonfx.png"
            alt="Netflix Logo"/>

            <img className="nav__avatar"
            src="https://pbs.twimg.com/profile_images/124011999041155"
            alt="Netflix Logo"/>
            
        </div>
    )
}

export default Nav;

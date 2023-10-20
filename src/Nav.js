import React, {useState, useEffect} from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
        console.log(show);
      } else handleShow(false);
    });
  }, []); /* this is the effect of header netflix logo & avatar which will show its background after 100px i.e. mentioned in window.scrollY. */
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="/logo.avif" alt="Netflix Logo" />

      <img className="nav__avatar" src="/user.jpeg" alt="Netflix Logo" />
    </div>
  );
}

export default Nav;

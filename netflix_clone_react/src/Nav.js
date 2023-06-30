import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from './img/logo.png';
import user from './img/user.png';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY >100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_contents'>
        <img 
         onClick={()=> navigate("/")}
        className='nav_logo' src={logo} alt='' />
        <img 
        onClick={()=> navigate("/profile")}
        className='nav_avatar' src={user} alt='' />
      </div>
    </div>
  );
}

export default Nav;

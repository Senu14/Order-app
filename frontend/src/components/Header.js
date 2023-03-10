import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs'
import "./Header.css";

var Button = require('react-button')

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
      <nav ref={navRef}>
        <a href="/AddMenu">Add menu item</a>
        <a href="/CreateOrder">Create order</a>
        <a href="/ShoppingList">Shopping list</a>
        <a href="/#">Menu</a>
        <a href="/ContactUs">Contact us</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn'>
        <BsPersonCircle />
      </button>
    </header>
  )
}

export default Header
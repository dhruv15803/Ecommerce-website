import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {

  const showNavLinks = ()=>{
    const x = document.getElementsByClassName('nav-menu')[0];
    x.classList.toggle('active');
  }

  return (
    <>
    <nav id="navbar">
        <div id="navLeft" onClick={()=>window.location='/'}>
            Shopify
        </div>
        <ul className='nav-menu'>
            <div><li><Link to="/">Men's clothing</Link></li></div>
            <div><li><Link to="/womens">Women's clothing</Link></li></div>
            <div><li><Link to="/jewelery">Jewelery</Link></li></div>
            <div><li><Link to="/electronics">Electronics</Link></li></div>
        </ul>
        <div id="navRight">
            <button className="navBtn" id="CartBtn" onClick={()=>window.location='/Cart'}>Cart</button>
        </div>
        <div id="navCart" onClick={()=>window.location='/Cart'}>
        <i className="fa-solid fa-cart-shopping" style={{color:'#00000'}}></i>
        </div>
        <div id="hamburger" onClick={showNavLinks}>
        <i className="fa-solid fa-bars" style={{color:'#00000'}}></i>
        </div>
    </nav>
    </>
  )
}

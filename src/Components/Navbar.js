import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
    <nav id="navbar">
        <div id="navLeft" onClick={()=>window.location='/'}>
            Shopify
        </div>
        <ul>
            <div><li><Link to="/">Men's clothing</Link></li></div>
            <div><li><Link to="/womens">Women's clothing</Link></li></div>
            <div><li><Link to="/jewelery">Jewelery</Link></li></div>
            <div><li><Link to="/electronics">Electronics</Link></li></div>
        </ul>
        <div id="navRight">
            <button className="navBtn" id="CartBtn" onClick={()=>window.location='/Cart'}>Cart</button>
        </div>
    </nav>
    </>
  )
}

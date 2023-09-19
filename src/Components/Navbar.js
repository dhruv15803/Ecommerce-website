import React from 'react'


export const Navbar = () => {
  return (
    <>
    <nav id="navbar">
        <div id="navLeft" onClick={()=>window.location='/'}>
            Shopify
        </div>
        <ul>
            <div><li><a href="/">Men's clothing</a></li></div>
            <div><li><a href="/womens">Women's clothing</a></li></div>
            <div><li><a href="/jewelery">Jewelery</a></li></div>
            <div><li><a href="/electronics">Electronics</a></li></div>
        </ul>
        <div id="navRight">
            <button className="navBtn" id="CartBtn" onClick={()=>window.location='/Cart'}>Cart</button>
        </div>
    </nav>
    </>
  )
}

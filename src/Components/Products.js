import React from 'react'
import { ToastContainer } from 'react-toastify';

export const Products = (props) => {
  return (
    <>
    <div className="products-outer-container">
        <div className="products-child-container">
            {props.products.map((item,index)=>{
                if(item.category===props.category){
                return <div className="products-item-container">
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{`$ ${item.price}`}</p>
                <button className="btn" onClick={()=>props.addToCart(index)}>Add to Cart</button>
            </div>
                }
                return <></>;
            })}
        </div>
    </div>
    <ToastContainer autoClose={1500} theme='colored'/>
    </>
  )
}

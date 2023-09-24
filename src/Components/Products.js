import React  from 'react'
import { ToastContainer } from 'react-toastify';

export const Products = (props) => {

  console.log(props.cart);

  return (
    <>
    <div className="products-outer-container">
        <div className="products-child-container">
            {props.products.map((item,index)=>{
                if(item.category===props.category){
                return <div key={item.id} className="products-item-container">
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
    <ToastContainer position='bottom-right' autoClose={1500} theme='colored'/>
    </>
  )
}

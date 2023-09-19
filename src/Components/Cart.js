import React, { useEffect, useState } from 'react'

export const Cart = () => {
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if(cartProducts===null){
        cartProducts=[];
    }
    const [cartItems,setCartItems] = useState(cartProducts);

    const clearCart = ()=>{
        setCartItems([]);
    }

    const deleteCartItem = (index)=>{
        const temp = [...cartItems];
        temp.splice(index,1);
        setCartItems(temp);
    }

    const increment = (index)=>{
        const newCart = cartItems.map((item,i)=>{
            if(i===index){
                return {
                    ...item,
                    'qty':item.qty+1,
                }
            }
            else{
                return item;
            }
        });
        setCartItems(newCart);
    }

    const decrement = (index)=>{
        const newCart = cartItems.map((item,i)=>{
            if(i===index){
                return {
                    ...item,
                    'qty':item.qty-1,
                }
            }
            else{
                return item;
            }
        });
        setCartItems(newCart);
    }

    const totalPrice = ()=>{
        let sum = 0;
        for(let i=0;i<cartItems.length;i++){
            sum = sum + cartItems[i].price*cartItems[i].qty;
        }
        return Math.ceil(sum);
    }

    console.log(cartItems);

    useEffect(()=>{
        localStorage.setItem('cartProducts',JSON.stringify(cartItems));
    },[cartItems]);
  return (
    <>
    <div className="cart-parent-container">
        {cartItems.length===0 && <div className="cartEmpty">
            <h2>Cart is empty</h2>
            <button className="btn" onClick={()=>window.location='/'}>Go to shop</button>
        </div>}
        {cartItems!==null && cartItems.map((item,index)=>{
            return <div className="cart-child-container">
            <div className="cart-item-title-container">
                {item.title}
            </div>
            <div className="cart-item-price-container">
                {`$ ${item.price}`}
            </div>
            <div className="cart-item-qty-container">
                {item.qty > 1 && <button className="cartBtns" onClick={()=>decrement(index)}>-</button>}
                <p>{item.qty}</p>
                <button className="cartBtns" onClick={()=>increment(index)}>+</button>
            </div>
            <div className="cart-item-deleteBtn-container">
                <button className="btn" onClick={()=>deleteCartItem(index)}>delete</button>
            </div>
        </div>  
        })}
        <div className="cartFooter">
            {cartItems.length!==0 && <button className="clearCart" onClick={clearCart}>Clear cart</button>}
            {cartItems.length!==0 && <p >{`Total: $ ${totalPrice()}`}</p>}
        </div>
    </div>
    </>
  )
}

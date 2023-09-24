import { useEffect, useState } from 'react';
import './App.css';
import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Cart } from './Components/Cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  if(cartProducts===null){
    cartProducts=[];
  }
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState(cartProducts);



  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>setProducts(data));
  },[]);
  
  const addToCart = (index)=>{
    for(let i=0;i<cart.length;i++){
      if(cart[i].id===products[index].id){
        toast.error('Already in cart');
        return;
      }
    }
    setCart(prevCart=>[...prevCart,{
      'id':products[index].id,
      'title':products[index].title,
      'price':products[index].price,
      'qty':1,
    }]);
    toast.success('Added to cart');
  }

  useEffect(()=>{
    localStorage.setItem('cartProducts',JSON.stringify(cart));
  },[cart]);

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={[    <Hero/>,
  <Products products={products} category="men's clothing" addToCart={addToCart} cart={cart} setCart={setCart}/>]}/>
  <Route path='/womens' element={<Products products={products} category="women's clothing" addToCart={addToCart} cart={cart} setCart={setCart}/>}/>
  <Route path='/jewelery' element={<Products products={products} category="jewelery" addToCart={addToCart} cart={cart} setCart={setCart}/>}/>
  <Route path='/electronics' element={<Products products={products} category="electronics" addToCart={addToCart} cart={cart} setCart={setCart}/>}/>
  <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import Home from './components/home'
import About from './components/about'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Products from './components/products';
import ProductHome from './components/ProductHome'
import ProductDetails from './components/ProductDetails';
function NotFound(){
  return(
    <div>
     Path Not Found
    </div>
  )
  
} 

function App() {
  const nav = useNavigate();
  return (
    <div className="App">
     <h1>Hi! We are here to learn React Router v6</h1>
     <Link to='/' >Home</Link>
      {' '}
     <Link to='about'>About</Link>
     {' '}
     <Link to='Products'>Products</Link>{' '}
     <Link to='Products/mobile'>Mobile</Link>{' '}
     <Link to='Products/laptop'>Laptop</Link>
     <button onClick={ ()=>{
       nav('/about');
     }}>
       Display About
     </button>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='Products' element={<Products/>}>
          <Route path='/' element={<ProductHome/>}/>
          <Route path=':ProductID' element={<ProductDetails/>}></Route>
       </Route>

       <Route path='*' element={<NotFound/>}/>
       
     </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';


function Products() {
    const {ProductID} = useParams(); 
  return (
    <div >
     <h1>Hi Products {ProductID}</h1>
     <hr/>
     <div>
       <Outlet/>
     </div>
     
    </div>
  );
}

export default Products;

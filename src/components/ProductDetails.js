import React from 'react';
import { useParams } from 'react-router';

function ProductDetails() {
    const {ProductID} = useParams();
  return (
    <div >
     <h1>Product Details of {ProductID}</h1>
     
    </div>
  );
}

export default ProductDetails;

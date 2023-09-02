import React, { useState, useEffect } from 'react'; // Import React and other necessary dependencies
import './List.css';
function List({productList=[], addProduct}) {
   // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className='product-list'>
     
      <div className='product-item'>
        {productList.map((product) => (
          <img key={product.id}
          className='product-image'
           src={product.image}
           onClick={()=>{
            addProduct(product)
           }}
           ></img>
        ))}
      </div>
    </div>
  );
}

export default List;

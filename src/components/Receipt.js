// import React from 'react'
// import './Receipt.css';
// import DateTimeDisplay from './DateTimeDisplay';
// import SaleCounter from './SaleCounter';

// const Receipt = () => {
//   return (
//     <div className='receipt'>
//         <div className='header'>Receipt</div>
//         <div className='header-sale'><SaleCounter/></div>
//         <div className='header-date'><DateTimeDisplay/></div>
//         <div className='header-item'>
//             <span>#</span>
//             <span>Products</span>
//             <span>Quantity</span>
//             <span>Sub Total</span>
//         </div>
//         <div className='item'>
//         <span>1</span>
//             <span>Sweater</span>
//             <span>2</span>
//             <span>4,000 INR</span>
//         </div>
//         <div className='total-item'>
//             <span>Total Items</span>
//             <span>2 Total</span>
//             <span>4,000 INR</span>
//         </div>
//         <div className='discount-rec'>
//             <span>Discount</span>
//             <span>10%</span>
//         </div>
//         <div className='vat'>
//             <span>VAT</span>
//             <span>20%</span>
//         </div>
//         <button className='close'>Close</button>
//     </div>
//   )
// }

// export default Receipt


import React, { useState } from 'react';
import './Receipt.css';
import DateTimeDisplay from './DateTimeDisplay';
import SaleCounter from './SaleCounter';

const Receipt = ({item, subTotal, totalItem, total, onChange}) => {
  const [isReceiptVisible, setIsReceiptVisible] = useState(true);

  const handleCloseReceipt = () => {
    // Set the visibility of the receipt to false when the "Close" button is clicked
    setIsReceiptVisible(false);
  };

  return (
    <div className={`receipt ${isReceiptVisible ? 'visible' : 'hidden'}`}>
      <div className='header'>Receipt</div>
      <div className='header-sale'><SaleCounter/></div>
      <div className='header-date'><DateTimeDisplay/></div>
      <div className='header-item'>
        <span>#</span>
        <span>Products</span>
        <span>Quantity</span>
        <span>Sub Total</span>
      </div>
      <div className='item'>
        <span>{}</span>
        <span>{()=>item.name}</span>
        <span>{()=>item.quantity}</span>
        <span>{subTotal.toFixed(2)} INR</span>
      </div>
      <div className='total-item'>
        <span>Total Items</span>
        <span>{totalItem}</span>
        <span>{total.toFixed(2)} INR</span>
      </div>
      <div className='discount-rec'>
        <span>Discount</span>
        <span>{}</span>
      </div>
      <div className='vat'>
        <span>VAT</span>
        <span>{}</span>
      </div>
      <button className='close' onClick={handleCloseReceipt}>Close</button>
    </div>
  );
}

export default Receipt;

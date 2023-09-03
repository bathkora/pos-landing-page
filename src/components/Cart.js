// import React, { useState, useEffect } from "react";
// import "./Cart.css";
// import Invoice from "./Invoice";
// import { productList } from "../data/data";
// import Receipt from "./Receipt";

// const Cart = ({ cartList = [] }, deleteItem) => {

//         const [receipt, setReceipt] = useState('');

//         const generateReceipt = () => {
//           // Generate your receipt content here (e.g., based on items in the cart)
//           const receiptContent = 'Your receipt:\nItem 1 - $10\nItem 2 - $15\nTotal: $25';

//           // Update the receipt state with the generated content
//           setReceipt(receiptContent);
//         };

//   return (
//     <div className="productcart">
//       <div className="heading-row">
//         <div className="column">PRODUCTS</div>

//         <div className="column">PRICE</div>
//         <div className="column">QUANTITY</div>

//         <div className="column">TOTAL</div>
//       </div>

//       <div>
//         {cartList.length > 0 ? (
//           cartList.map((item) => {
//             return <Invoice item={item}
//             deleteItem={deleteItem}
//               />;
//           })
//         ) : (
//           // Render the Invoice component if there are products
//           <div className="no-products">THERE ARE NO PRODUCTS</div>
//         )}
//       </div>

//       <table className="invoiceTable">
//         <tbody>
//           <tr className="sub-total">
//             <td>
//               <label>SubTotal</label>
//             </td>
//             <td>{}</td>
//             <td>
//               <div>0 items</div>
//             </td>
//           </tr>
//           <tr className="vat-tax">
//             <td>
//               <label>VAT tax</label>
//             </td>
//             <td>
//               <input type="text" placeholder="input from user" />
//             </td>
//             <td>
//               <div>0.000 INR</div>
//             </td>
//           </tr>
//           <tr className="discount">
//             <td>
//               <label>Discount</label>
//             </td>
//             <td>
//               <input type="text" placeholder="input from user" />
//             </td>
//             <td>
//               <div>0.000 INR</div>
//             </td>
//           </tr>
//           <tr className="total">
//             <td>
//               <label>Total</label>
//             </td>
//             <td>O.OOO INR</td>
//             <td></td>
//           </tr>
//         </tbody>
//       </table>
//       <Receipt/>

//       <div className="buttons">
//         <button className="cancel-button">CANCEL SALE</button>
//         <button className="process-button" onClick={generateReceipt}>PROCESS SALE</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import "./Cart.css";
import Invoice from "./Invoice";
import Receipt from "./Receipt";

const Cart = ({
  cartList = [],
  deleteItem,
  clearCart,
  incrementItem,
  decrementItem,
  item
}) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptContent, setReceiptContent] = useState("");
  const [vatPercent, setVatPercent] = useState(0);
  const [discount, setDiscount] = useState(0);

  const generateReceipt = () => {
    // Generate your receipt content here (e.g., based on items in the cart)
    const generatedReceiptContent =
      "Your receipt:\nItem 1 - $10\nItem 2 - $15\nTotal: $25";

    // Update the receipt content state with the generated content
    setReceiptContent(generatedReceiptContent);

    // Set showReceipt to true to display the Receipt component
    setShowReceipt(true);
  };
  let totalItem = 0;
  let subTotal = 0;
  cartList.forEach((item) => {
    subTotal = subTotal + item.price * item.quantity;
    totalItem = totalItem + item.quantity;
  });

  const totalVat = (subTotal * vatPercent / 100);
  const totalDiscount = (subTotal * discount / 100);

  const total = (subTotal + totalVat - totalDiscount);

  console.log(total, totalDiscount, totalVat)
  return (
    <div className="productcart">
      <div className="heading-row">
        <div className="column">PRODUCTS</div>
        <div className="column">PRICE</div>
        <div className="column">QUANTITY</div>
        <div className="column">TOTAL</div>
      </div>

      <div>
        {cartList.length > 0 ? (
          cartList.map((item) => {
            return (
              <Invoice
                item={item}
                deleteItem={deleteItem}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
              />
            );
          })
        ) : (
          // Render the Invoice component if there are no products
          <div className="no-products">THERE ARE NO PRODUCTS</div>
        )}
      </div>

      <table className="invoiceTable">
        <tbody>
          <tr className="sub-total">
            <td>
              <label>SubTotal</label>{" "}
            </td>
            <td>{subTotal}</td>
            <td>
              <div>{totalItem} items</div>
            </td>
          </tr>
          <tr className="vat-tax">
            <td>
              <label>VAT tax %</label>
            </td>
            <td>
              <input
                type="number"
                min={0}
                max={100}
                value={vatPercent}
                onChange={(e) => setVatPercent(e.target.value)}
              />
            </td>
            <td>
              <div>{totalVat.toFixed(2)} INR</div>
            </td>
          </tr>
          <tr className="discount">
            <td>
              <label>Discount %</label>
            </td>
            <td>
              <input
                type="number"
                min={0}
                max={100}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </td>
            <td>
              <div>{totalDiscount.toFixed(2)} INR</div>
            </td>
          </tr>
          <tr className="total">
            <td>
              <label>Total</label>
            </td>
            <td>{total.toFixed(2)} INR</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {/* Conditionally render the Receipt component */}
      {/* {cartList.length > 0 ? (
          cartList.map((item) => {
            return (
              <Invoice
                item={item}
                deleteItem={deleteItem}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
              />
            );
          })
        ) : (
          // Render the Invoice component if there are no products
          <div className="no-products">THERE ARE NO PRODUCTS</div>
        )}
      </div> */}
      {showReceipt && 
      
       <Receipt item={item} 
       total={total} totalItem={totalItem} 
       onChange={(e) => setDiscount(e.target.value)}
       subTotal={subTotal} content={receiptContent}  />}

      <div className="buttons">
        <button className="cancel-button" onClick={clearCart}>
          CANCEL SALE
        </button>
        <button className="process-button" onClick={generateReceipt}>
          PROCESS SALE
        </button>
      </div>
    </div>
  );
};

export default Cart;

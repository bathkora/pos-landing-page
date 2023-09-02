import React, { useState, useEffect } from "react";
import "./Cart.css";
import Invoice from "./Invoice";

const Cart = ({ cartList = [] }) => {
  console.log(cartList);
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
            return <Invoice item={item} />;
          })
        ) : (
          // Render the Invoice component if there are products
          <div className="no-products">THERE ARE NO PRODUCTS</div>
        )}
      </div>

      <table className="invoiceTable">
        <tbody>
          <tr className="sub-total">
            <td>
              <label>SubTotal</label>
            </td>
            <td>Dynamic Data</td>
            <td>
              <div>0 items</div>
            </td>
          </tr>
          <tr className="vat-tax">
            <td>
              <label>VAT tax</label>
            </td>
            <td>
              <input type="text" placeholder="input from user" />
            </td>
            <td>
              <div>0.000 INR</div>
            </td>
          </tr>
          <tr className="discount">
            <td>
              <label>Discount</label>
            </td>
            <td>
              <input type="text" placeholder="input from user" />
            </td>
            <td>
              <div>0.000 INR</div>
            </td>
          </tr>
          <tr className="total">
            <td>
              <label>Total</label>
            </td>
            <td>O.OOO INR</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="buttons">
        <button className="cancel-button">CANCEL SALE</button>
        <button className="process-button">PROCESS SALE</button>
      </div>
    </div>
  );
};

export default Cart;

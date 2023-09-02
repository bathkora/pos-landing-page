import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./Invoice.css";
import { useEffect } from "react";

const Invoice = ({item, decrementQuantity, incrementQuantity}) => {
  return (
    <div>
      <div className="product-counter">
        <div className="icon">
          <RxCross2 />
        </div>
        <div className="product">{item.name}</div>
        <div className="price">${item.price}</div>

        <div className="counter">
          <button className="in-de" onClick={decrementQuantity}>
            -
          </button>
          <span>{item.quantity}</span>
          <button className="in-de" onClick={incrementQuantity}>
            +
          </button>
        </div>

        <div className="total">${(item.quantity)*(item.price)}</div>
      </div>
    </div>
  );
};

export default Invoice;

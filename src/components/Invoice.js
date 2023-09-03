import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./Invoice.css";
import { useEffect } from "react";
import { productList } from "../data/data";

const Invoice = ({item, decrementItem, incrementItem,
     deleteItem }) => {


  return (
    <div>
      <div className="product-counter">
        <div className="icon">
          <RxCross2 
            onClick={() => deleteItem(item.id)}
          />
        </div>
        <div className="product">{item.name}</div>
        <div className="price">${item.price}</div>

        <div className="counter">
          <button className="in-de" onClick={()=>decrementItem(item.id)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button className="in-de" onClick={()=>incrementItem(item.id)}>
            +
          </button>
        </div>

        <div className="total">${(item.quantity)*(item.price)}</div>
      </div>
    </div>
  );
};

export default Invoice;

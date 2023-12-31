import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import List from "./components/List";
import { productList } from "./data/data";


function App() {
  const [cartList, setCartList] = useState([]);

  const deleteItem = (productId) => {
    const remainingItem = cartList.filter((item) => item.id !== productId);
    setCartList(remainingItem);
  };

  const incrementItem = (productId) => {
    const updatedCartList = cartList.map((item) => {
      if (item.id === productId) {
        // Increment the quantity of the existing product by 1
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    // Update the cart with the modified list
    setCartList(updatedCartList);
  }

  const decrementItem = (productId) => {
    const updatedCartList = cartList.map((item) => {
      if (item.id === productId) {
        // Increment the quantity of the existing product by 1
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item)=>item.quantity>0);

    // Update the cart with the modified list
    setCartList(updatedCartList);
  }

  const clearCart = () => {
    setCartList([]);
  }

  const addProduct = (product) => {
    // Check if the product already exists in the cart by matching its ID
    const hasMatched = cartList.some((item) => item.id === product.id);

    if (hasMatched) {
      // If a matching product exists, create a copy of the cartList
      const updatedCartList = cartList.map((item) => {
        if (item.id === product.id) {
          // Increment the quantity of the existing product by 1
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      // Update the cart with the modified list
      setCartList(updatedCartList);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartList([...cartList, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <Cart incrementItem={incrementItem} decrementItem={decrementItem} cartList={cartList} deleteItem={deleteItem} clearCart={clearCart} />
      <List productList={productList} addProduct={addProduct} />
    </div>
  );
}

export default App;

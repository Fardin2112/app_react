import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import ProductList from "./component/ProductList";
import React, { useState } from "react";
import Footer from "./component/Footer";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 9999,
      name: "redmi",
      quantity: 0,
    },
  ];
  let [productList, setproductList] = useState(products);
  let [TotalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = TotalAmount;
    newproductList[index].quantity++;
    newTotalAmount += newproductList[index].price 
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);

  };
  const decrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = TotalAmount
    if(newproductList[index].quantity > 0){
      newproductList[index].quantity--;
      newTotalAmount -= newproductList[index].price
    }
    setTotalAmount(newTotalAmount);
    setproductList(newproductList);

  };
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>

      <Footer TotalAmount={TotalAmount}/>
    </>
  );
}

export default App;

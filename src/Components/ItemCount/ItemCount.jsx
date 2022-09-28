import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../CartContextComponent/CartContextComponent";

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const [remButton, setRemButton] = useState(false);
  const { cart, addToCart } = useContext(cartContext);

  function sum() {
    if (count < product.stock) setCount(count + 1);
  }

  function res() {
    if (count >= 2) setCount(count - 1);
  }

  function onAdd() {
   
    addToCart(product, count);
    setRemButton(true);

  }

  useEffect(() => {
    console.log(cart);
  
  }, [cart]);
  

  return (
    <div>
      ItemCount
      <div>
        <span onClick={sum}>+</span>
        {count}
        <span onClick={res}>-</span>
      </div>
      <br />
      {remButton ? (
        <>
      "Producto Agregado" <br></br>

        <Link to={'/'}>Continuar Comprando</Link><br></br>
        <Link to={'/checkout'}>Finalizar Compra</Link>
        </>
      ) : (
      <button
        onClick={onAdd}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </button>
      )}
    </div>
  );
}

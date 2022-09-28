import React, { useContext } from "react";
import { cartContext } from "../../CartContextComponent/CartContextComponent";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalCount, totalPay, deleteFromCart } =
    useContext(cartContext);

  return (
    <>
      {cart.map((item) => (
        
          <div key={item.id}>
            {item.name + " " + item.count} {" "}
            <span onClick={() => deleteFromCart(item.id)}> 🗑️ </span>
          </div>
        
      ))}

      <div>
        tenes en el carro : {totalCount} a pagar : {totalPay}
      </div>

      <Link to={'/checkout'}>
        TERMINAR COMPRA
        </Link>
    </>
  );
}

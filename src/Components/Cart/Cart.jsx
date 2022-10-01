import React, { useContext } from "react";
import { cartContext } from "../../CartContextComponent/CartContextComponent";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalCount, totalPay, deleteFromCart } =
    useContext(cartContext);

  return (
    <div className="max-w-xl m-auto p-10 bg-white rounded shadow-xl">
      {cart.map((item) => (
        <div key={item.id}>
          {item.name + " " + item.count}{" "}
          <span onClick={() => deleteFromCart(item.id)}> 🗑️ </span>
        </div>
      ))}

      <div className="pt-4">
        tenes en el carro : {totalCount} a pagar : {totalPay}
      </div>
      <br />
      <br />

      <div>
        <Link
          to={"/checkout"}
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
        >
          TERMINAR COMPRA
        </Link>
      </div>

    </div>
  );
}

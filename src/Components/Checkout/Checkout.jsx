import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { cartContext } from "../../CartContextComponent/CartContextComponent";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Checkout() {
  const { totalPay, cart, deleteAll } = useContext(cartContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  function validForm() {
    const order = {
      buyer: { name, tel, email },
      totalPay,
      cart,
    };

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      deleteAll();
    });
  }

  //if (cart.length === 0) {
    //return <>Carro Vacio, realice alguna compra</>;
  //}

  return (
    <>
      {orderId ? (
        "Compra realizada exitosamente. Su id de compra es : " + orderId
      ) : (
        <>
          <div className="max-w-xl m-auto p-10 bg-white rounded shadow-xl">
            <p className="text-gray-800 font-medium">Terminar Compra</p>
            <br /> <p className="text-gray-800 font-medium">
              Ingrese datos{" "}
            </p>{" "}
            <br />
            <label className="block text-sm text-gray-00" for="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="block text-sm text-gray-00" for="cus_name">
              tel
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="tel"
              onChange={(e) => setTel(e.target.value)}
            />
            <br />
            <label className="block text-sm text-gray-00" for="cus_name">
              email
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <br />
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
              onClick={validForm}
            >
              Confirmar Compra
            </button>
          </div>
        </>
      )}
    </>
  );
}

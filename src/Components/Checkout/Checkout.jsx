import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { cartContext } from '../../CartContextComponent/CartContextComponent';
import { addDoc, collection, getFirestore,} from "firebase/firestore";

export default function Checkout() {
  const{totalPay, cart, deleteAll } = useContext(cartContext)
 const[name, setName] = useState("");
 const[tel, setTel] = useState("")
 const[email, setEmail] = useState("");
const[orderId, setOrderId] = useState("")



function validForm(){

  
  const order = {
    
    buyer: {name, tel, email},
    totalPay,
    cart,
  };

//aca se puede validar 

const db = getFirestore();
  const orders = collection(db, "orders")
  addDoc(orders, order).then(({ id })=> {
  
  setOrderId(id);
  deleteAll()
  
  });
}
if (cart.length === 0){
  return( <>
  Carro Vacio, realice alguna compra
  </>)
}



  return (
    <>
    {orderId? ("Compra realizada exitosamente. Su id de compra es : " + orderId 
  ) : (

    <div>Terminar Compra <br/> ingrese datos <br/>
    <input type="text" placeholder='name' onChange={(e)=> setName(e.target.value)}/><br/>

    <input type="text" placeholder='tel' onChange={(e)=> setTel(e.target.value)}/><br/>

    <input type="email" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/><br/>

    <button onClick={validForm}>Confirmar Compra</button>

      
    </div>

)}
    </>
);
}

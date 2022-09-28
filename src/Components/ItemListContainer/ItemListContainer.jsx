import React from "react";
import { useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  
  
  
  useEffect(() => {
    const db = getFirestore();
    let miCollection;
    
    if (!idCategory){
      miCollection = collection(db, "products");

    
    }else{
       miCollection = query(
        collection(db, "products"),
        where("idCategory", "==", idCategory)
        );

      }
        getDocs(miCollection).then((data) => {
        
          const auxProducts = data.docs.map((product) => ({
            ...product.data(),
            id: product.id,
          }));
          
          setProducts(auxProducts);
          
        });

    }, [idCategory]);

  return <ItemList products={products}/>;
}

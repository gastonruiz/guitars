import React from "react";
import { useEffect } from "react";
import { doc, getDoc, getFirestore,} from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetal/ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { idItem } = useParams();
  
  
  
  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, 'products', idItem)
    
    
    
        getDoc(refDoc).then((item) => {
        
          const aux = {
            ...item.data(),
            id: item.id,
          };

          setProduct(aux);
          
        });

    }, [idItem]);

  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

    <ItemDetail product={product}/>;
  </div>
}

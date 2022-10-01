import React from "react";
import Item from "../Item/Item";

export default function ItemList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

import React from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Banana", isFruit: true, id: 4 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "white",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

"use client";

import React from "react";
// import { useRouter } from "../../../node_modules/next/router";
import { useSearchParams } from "../../../node_modules/next/navigation";
import { ListOfProducts } from "../(helpers)/ListOfProducts";
import { CartContext } from "../(context)/CartContext";
import AddToCartButton from "../(components)/addToCartButton";

export default function Product() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  {
    console.log(id);
  }
  const productId = typeof id === "string" ? parseInt(id, 10) : null;
  const product = productId !== null ? ListOfProducts[productId - 1] : null;
  if (!product) {
    return <div>Loading...</div>; // Handle case when product is not found
  }

  return (
    <div className="p-5 flex flex-col gap-x-4 h-screen align-middle">
      <div className="flex-grow flex flex-row gap-x-5 rounded-lg h-auto overflow-hidden">
        <div className="flex-grow">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="p-5 flex flex-col flex-grow align-middle justify-center gap-y-5">
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <p>₹{product.price}</p>
          <div className="flex flex-row gap-x-2">
            <AddToCartButton id={product.id}></AddToCartButton>
          </div>
        </div>
      </div>
    </div>
  );
}

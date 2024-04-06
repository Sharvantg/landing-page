import React from "react";
// import { useRouter } from "../../../node_modules/next/router";
import { useRouter } from "../../../node_modules/next/router";
import { ListOfProducts } from "../(helpers)/ListOfProducts";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const productId = typeof id === "string" ? parseInt(id, 10) : null;
  const product = productId !== null ? ListOfProducts[productId] : null;
  if (!product) {
    return <div>Loading...</div>; // Handle case when product is not found
  }

  return (
    <div className="p-5 flex flex-col gap-x-4 h-screen align-middle">
      <div className="flex-grow flex flex-row gap-x-5 rounded-lg h-auto overflow-hidden">
        <div className="flex-grow bg-red-100">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="flex-grow bg-red-100">
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}

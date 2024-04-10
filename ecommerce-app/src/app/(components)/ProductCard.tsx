"use client";
import Link from "../../../node_modules/next/link";
import { CartContext } from "../(context)/CartContext";
import { useContext, useState } from "react";
import AddToCartButton from "./addToCartButton";

interface productProps {
  data: { id: number; name: string; desc: string; price: number };
}

const ProductCard: React.FC<productProps> = ({ data }) => {
  const { updateTheCartValue } = useContext(CartContext);
  const [itemStatus, setItemStatus] = useState(false);

  return (
    <div className="flex flex-col flex-shrink items-start p-4 gap-y-5 justify-start border-2 rounded-md ">
      {/* The product name link to the iduvidual product page */}
      <Link
        href={{
          pathname: "/product",
          query: { id: data.id },
        }}
      >
        <h3 className="underline ">{data.name}</h3>
      </Link>
      <p> {data.desc}</p>
      <p>₹{data.price}</p>
      <AddToCartButton id={data.id}></AddToCartButton>
      {/* {itemStatus ? (
        <>
          <button
            onClick={() => {
              setItemStatus(false);
              // console.log(itemStatus);
              updateTheCartValue(false, data.id);
            }}
          >
            Remove from cart
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setItemStatus(true);
              updateTheCartValue(true, data.id);
            }}
            className="rounded-full bg-slate-400 p-2 text-white"
          >
            Add to cart
          </button>
        </>
      )} */}
    </div>
  );
};

export default ProductCard;

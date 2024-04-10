"use client";
import { CartContext } from "../(context)/CartContext";
import { useContext, useState } from "react";

export default function AddToCartButton({ id }) {
  const { updateTheCartValue } = useContext(CartContext);
  const { doesThisProdExistInTheCart } = useContext(CartContext);
  const [itemStatus, setItemStatus] = useState(false);
  let checkIfItemExits = doesThisProdExistInTheCart(id);

  //so you want to update the state of itemStatus on every click and then check on
  //that value to decide if the button shouold be rendered or not

  return (
    <div>
      {itemStatus ? (
        <>
          <button
            onClick={() => {
              setItemStatus(false);
              updateTheCartValue(false, id);
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
              updateTheCartValue(true, id);
            }}
            className="rounded-full bg-slate-400 p-2 text-white"
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  );
}

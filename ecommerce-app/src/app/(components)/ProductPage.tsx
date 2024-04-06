// ProductPage.tsx
import React from "react";
import dynamic from "../../../node_modules/next/dynamic";

const DynamicProductComponent = dynamic(() => import("../product/page"), {
  ssr: false,
});

const ProductPage = () => {
  // Get product id from router query or props
  const id = 1; // Example: You need to get the id from the router query

  return (
    <div>
      <DynamicProductComponent id={id} />
    </div>
  );
};

export default ProductPage;

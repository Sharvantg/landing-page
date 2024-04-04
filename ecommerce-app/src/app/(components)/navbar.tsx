// test.tsx
import React from "react";
import Link from "../../../node_modules/next/link";

// import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 w-full">
      <div className="container mx-auto flex flex-row align-items-center justify-between p-2 items-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4">
          <img src="ecommerce-app/public/vercel.svg" />
        </a>
        <div className="flex flex-column gap-x-10 ">
          <Link href="/product" className=" text-white">
            Products
          </Link>
        </div>
        <div className="flex flex-row gap-x-2">
          <p className="text-white">Cart</p>
          <p className="text-white">0</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

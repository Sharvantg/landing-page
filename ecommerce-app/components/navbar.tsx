// test.tsx
import React from "react";
// import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col gap-x-10 p-5 items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4">
          <img src="ecommerce-app/public/vercel.svg" />
        </a>
        <div className="flex flex-column gap-x-10 h-screen max-h-screen">
          <a className="mr-5">First Link</a>
          <a className="mr-5">Second Link</a>
          <a className="mr-5">Third Link</a>
          <a className="mr-5">Fourth Link</a>
        </div>
        <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4">
          Click Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

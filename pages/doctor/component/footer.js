import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
  <>
    <footer
      className="fixed bottom-0 left-0 w-full bg-white rounded-lg shadow dark:bg-gray-900"
      style={{ zIndex: 999 }}
    >
      <div className="mb-2 ml-full">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className=" block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <Link href="" className="hover:underline">E-Governance™</Link>. All Rights Reserved.
        </span>
      </div>
      
    </footer>
  </>
  );
}

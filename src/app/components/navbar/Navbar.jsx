import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-4 bg-gray-800 p-4">
        <li>
          <Link href="/" className="text-white hover:text-teal-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/anayet" className="text-white hover:text-teal-400">
            Anayet
          </Link>
        </li>
        <li>
          <Link href="/mahabur" className="text-white hover:text-teal-400">
            Mahabur
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-teal-400">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

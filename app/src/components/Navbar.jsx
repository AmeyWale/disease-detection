import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-7 p-4 bg-customBlue">
      <div>Logo</div>

      <div className="flex">
        <ul className="flex flex-row">
          <li className="px-4">Home</li>
          <li className="px-4">Services</li>
          <li className="px-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

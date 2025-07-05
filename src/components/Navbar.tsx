"use client";

import { FC, ReactNode } from "react";

interface NavbarProps {
  icon: ReactNode;
  text: string;
}
const Navbar: FC<NavbarProps> = ({ icon, text }) => {
  return (
    <nav className="sticky top-0 z-50 shadow-lg navbar-gradient ">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="text-ds font-semibold text-lg">{text}</div>
        </div>
        <button
          className="p-ds-100 text-ds rounded-full hover:text-ds-selected transition-colors"
          aria-label="Menu"
        >
          {icon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

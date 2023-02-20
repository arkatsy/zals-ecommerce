import Link from "next/link";
import { useState } from "react";
import { BarsIcon } from "./Icons";
import Sidebar from "./Sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className="mx-auto flex max-w-[1920px] items-center bg-white-100
     py-3 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative grid w-full grid-cols-2">
        <div className="w-min">
          <Logo />
        </div>
        <button
          className="absolute right-0 self-center lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <BarsIcon />
        </button>
        <div className="hidden lg:block lg:self-center">Desktop Navigation </div>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}

export default Header;

function Logo() {
  return (
    <Link
      href="/"
      className="font-playfairDisplay text-4xl font-bold tracking-wider sm:text-5xl lg:text-6xl"
    >
      ZALS
    </Link>
  );
}

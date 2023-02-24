import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import {
  BarsIcon,
  BookmarkIcon,
  BookmarkIconFill,
  LoginIcon,
  ShoppingBag,
  ShoppingBagFill,
} from "./Icons";
import { MAIN_CATEGORIES, classNames } from "@/lib/utils";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  let label = "";
  if (pathname.split("/")[1] === "category") {
    const category = pathname.split("/")[2].toUpperCase();
    label = MAIN_CATEGORIES.includes(category as any) ? category : "";
  }

  const isBookmarksPage = pathname === "/bookmarks";
  const isCartPage = pathname === "/cart";

  return (
    <header className="sticky top-0 z-10 mx-auto flex max-w-[1920px] items-center bg-white-100 py-3 md:pb-4">
      <div className="relative grid w-full grid-cols-2 lg:grid-cols-3">
        <div className="w-min">
          <Logo label={label} />
        </div>
        <button
          className="absolute right-0 top-2 sm:top-[10px] lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <BarsIcon />
        </button>
        <div className="relative hidden lg:top-2 lg:inline-flex lg:gap-6 lg:self-center xl:gap-8">
          {MAIN_CATEGORIES.map((category) => (
            <div key={category}>
              <Link
                href={`/category/${category.toLowerCase()}`}
                data-text={category}
                className={classNames(
                  "flex flex-col px-2 py-2 text-3xl uppercase",
                  "after:pointer-events-none after:invisible after:h-0 after:select-none after:overflow-hidden after:font-normal after:content-[attr(data-text)]",
                  category === label ? "font-normal" : "font-light"
                )}
              >
                {category}
              </Link>
            </div>
          ))}
        </div>
        <Link
          href="/cart"
          title="Go to the cart page"
          className="absolute right-[120px] top-[8px] sm:right-[160px] sm:top-[9px] md:right-[190px] md:top-[8px] lg:right-[140px] lg:top-[17px]"
        >
          {isCartPage ? <ShoppingBagFill /> : <ShoppingBag />}
          <span className="sr-only">Go to your shopping list</span>
        </Link>
        <Link
          href="/bookmarks"
          title="Go to the bookmarks page"
          className="absolute right-[82px] top-[10px] sm:right-28 sm:top-[11px] md:top-[11px] md:right-32 lg:top-[18px] lg:right-[70px]"
        >
          {isBookmarksPage ? <BookmarkIconFill /> : <BookmarkIcon />}
          <span className="sr-only">Go to your bookmarks</span>
        </Link>
        <Link
          href="/login"
          className="relative -top-[2px] right-10 place-self-end sm:-top-1 sm:mr-4 md:-top-[2px] md:mr-5 lg:right-0 lg:top-2 lg:mr-0 lg:self-center"
          title="Go to the login page"
        >
          <LoginIcon />
          <span className="sr-only">Go to the login page</span>
        </Link>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}

export default Header;

function Logo({ label = "" }: { label?: string }) {
  const { pathname } = useRouter();

  return (
    <div className="relative">
      <Link
        href="/"
        data-label={label}
        className={classNames(
          "md:after:top font-playfairDisplay text-4xl font-bold tracking-wider",
          "after:hidden sm:text-5xl md:after:absolute md:after:top-7 md:after:-right-8 md:after:block",
          "md:after:text-xl md:after:font-light md:after:uppercase md:after:tracking-wide md:after:content-[attr(data-label)]",
          "lg:text-6xl lg:after:hidden",
          label === "WOMEN" ? "md:after:-right-14" : ""
        )}
      >
        ZALS
      </Link>
    </div>
  );
}

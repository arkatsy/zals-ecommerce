import { useRouter } from "next/router";
import { useState } from "react";
import {
  BookmarkIconLink,
  CartIconLink,
  LoginIconLink,
  MenuIconButton,
} from "./IconWrappers";
import AboutUsLink from "./AboutUsLink";
import PrimaryCategory from "./PrimaryCategory";
import Logo from "./Logo";
import MenuOverlay from "./MenuOverlay";

type Categories = "MAN" | "WOMEN" | "KIDS";

const categories: Array<Categories> = ["MAN", "WOMEN", "KIDS"];

const Header = ({}) => {
  const { pathname } = useRouter();
  const [activeMenuOverlay, setActiveMenuOverlay] = useState(false);

  const isCategoryPageActive = pathname.split("/")[1] === "category";
  const isBookmarkPageActive = pathname === "/bookmarks";
  const isCartPageActive = pathname === "/cart";
  const isLoginPageActive = pathname === "/login";
  const isAboutusPageActive = pathname === "/about-us";

  return (
    <header className="sticky top-0 z-10 flex h-[75px] w-full items-center justify-between bg-white-100 px-2 align-baseline min-[420px]:px-6 sm:h-[80px] sm:px-10 md:h-[92px] xl:h-24 xl:px-12 ">
      <div className="flex items-center gap-32 lg:gap-40 xl:gap-48">
        <Logo
          label={
            isCategoryPageActive
              ? (pathname.split("/")[2].toUpperCase() as Categories)
              : null
          }
        />
        <div className="hidden lg:flex lg:gap-12 xl:gap-14">
          {categories.map((category) => {
            return (
              <PrimaryCategory
                label={category}
                key={category}
                category={category}
                active={
                  isCategoryPageActive &&
                  category === pathname.split("/")[2].toUpperCase()
                }
                className="relative top-2"
              />
            );
          })}
        </div>
      </div>
      <div className="relative top-0.5 flex gap-[2px] min-[420px]:gap-4 sm:gap-8 lg:top-1 lg:gap-3 xl:top-2">
        <AboutUsLink
          href="/about-us"
          active={isAboutusPageActive}
          className="hidden xl:mr-2 xl:inline-block"
        />
        <div className="relative top-[3px] flex gap-1 min-[420px]:gap-3 sm:top-[2px] xl:top-0">
          <BookmarkIconLink
            active={isBookmarkPageActive}
            href="/bookmarks"
            ariaLabel="Go to bookmarks page"
            title="Bookmarks Page"
          />
          <CartIconLink
            active={isCartPageActive}
            href="/cart"
            ariaLabel="Go to cart page"
            title="Shopping Cart Page"
          />
        </div>
        <LoginIconLink
          href="/login"
          active={isLoginPageActive}
          className="relative top-[2px] ml-2 sm:top-[1px] md:top-[2px] lg:top-[1px] xl:-top-[1px]"
          ariaLabel="Go to login page"
          title="Login Page"
        />
        <MenuIconButton
          onClick={() => setActiveMenuOverlay((c) => !c)}
          className="relative top-[2px] ml-2 lg:hidden"
        />
      </div>
      {/* <MenuOverlay /> */}
    </header>
  );
};

export default Header;

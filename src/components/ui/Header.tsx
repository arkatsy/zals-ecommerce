import { useRouter } from "next/router";
import {
  BookmarkIconLink,
  CartIconLink,
  LoginIconLink,
  MenuIconButton,
} from "./IconWrappers";
import AboutUsLink from "./AboutUsLink";
import PrimaryCategory from "./PrimaryCategory";
import Logo from "./Logo";

type Categories = "MAN" | "WOMEN" | "KIDS";

const categories: Array<Categories> = ["MAN", "WOMEN", "KIDS"];

const Header = ({}) => {
  const { pathname } = useRouter();

  const isCategoryPageActive = pathname.split("/")[1] === "category";
  const isBookmarkPageActive = pathname === "/bookmarks";
  const isCartPageActive = pathname === "/cart";
  const isLoginPageActive = pathname === "/login";
  const isAboutusPageActive = pathname === "/about-us";

  return (
    <header className="sticky top-0 mb-2 flex h-16 w-full max-w-[1920px] items-center justify-between bg-white-100 py-1 align-baseline sm:mb-4 sm:pt-6 lg:mb-6 lg:h-20">
      <div className="flex items-center gap-32 lg:gap-40 xl:gap-64">
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
      <div className="relative top-0.5 flex gap-1 min-[420px]:gap-4 sm:gap-8 lg:top-1 lg:gap-3 xl:top-2">
        <AboutUsLink
          href="/about-us"
          active={isAboutusPageActive}
          className="hidden xl:mr-2 xl:inline-block"
        />
        <div className="relative top-[3px] flex gap-1 min-[420px]:gap-3 sm:top-[2px]">
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
          className="relative top-[2px] ml-2"
          ariaLabel="Go to login page"
          title="Login Page"
        />
        <MenuIconButton active={false} className="relative top-[2px] lg:hidden" />
      </div>
    </header>
  );
};

export default Header;

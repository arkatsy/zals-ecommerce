import { useRouter } from "next/router";
import {
  AuthButton,
  BookmarkButton,
  CartButton,
  LogoButton,
  MenuButton,
  PrimaryCategory,
} from "./buttons/menu";
import AboutUsButton from "./buttons/menu/AboutUsButton";

interface HeaderProps {}

type Categories = "MAN" | "WOMEN" | "KIDS";

const categories: Array<Categories> = ["MAN", "WOMEN", "KIDS"];

const Header = ({}: HeaderProps) => {
  const { pathname } = useRouter();

  const isActiveCategory = pathname.split("/")[1] === "category";
  const isActiveBookmark = pathname === "/bookmarks";
  const isActiveCart = pathname === "/cart";
  const isActiveLogin = pathname === "/login";
  const isActiveAboutUs = pathname === "/about-us";

  return (
    <header className="sticky top-0 mb-2 flex h-16 w-full max-w-[1920px] flex-row items-center justify-between bg-white-100 py-1 align-baseline sm:mb-4 sm:pt-6 lg:mb-6 lg:h-20">
      <div className="flex flex-row items-center gap-32 lg:gap-40 xl:gap-64">
        <LogoButton
          label={
            isActiveCategory ? (pathname.split("/")[2].toUpperCase() as Categories) : null
          }
        />
        <div className="hidden gap-12 lg:flex xl:gap-14">
          {categories.map((category) => {
            return (
              <PrimaryCategory
                label={category}
                key={category}
                category={category}
                active={
                  isActiveCategory && category === pathname.split("/")[2].toUpperCase()
                }
                className="relative top-2"
              />
            );
          })}
        </div>
      </div>
      <ul className="relative top-2 flex flex-row gap-3 min-[420px]:gap-6 sm:gap-8 lg:top-2">
        <AboutUsButton active={isActiveAboutUs} className="hidden 2xl:block" />
        <BookmarkButton active={isActiveBookmark} className="relative xl:top-1" />
        <CartButton active={isActiveCart} className="relative xl:top-1" />
        {!isActiveLogin && (
          <AuthButton type="LOGIN" className="relative -top-1 lg:top-0" />
        )}
        <div className="relative  ml-1 min-[350px]:pl-4 sm:pl-8 lg:hidden">
          <MenuButton type="CLOSED" />
        </div>
      </ul>
    </header>
  );
};

export default Header;
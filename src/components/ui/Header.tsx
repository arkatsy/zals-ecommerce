import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  BookmarkIconLink,
  CartIconLink,
  LoginIconLink,
  MenuIconButton,
} from "./IconWrappers";
import AboutUsLink from "./AboutUsLink";
import Logo from "./Logo";
import { PrimaryCategory } from "./PrimaryCategory";
import useMediaQuery from "@/lib/useMediaQuery";

const categories = ["MAN", "WOMEN", "KIDS"] as const;

type Categories = (typeof categories)[number];

const Header = ({}) => {
  const { pathname } = useRouter();

  // Sidebar state
  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggleSidebar = () => setActiveSidebar((prev) => !prev);
  const [activeSidebarCategory, setActiveSidebarCategory] = useState<Categories>("MAN");

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Reset the state of the sidebar
  useEffect(() => {
    if (isDesktop) {
      setActiveSidebar(false);
    }
  }, [isDesktop]);

  // Check the current page the user is on
  const isCategoryPageActive = pathname.split("/")[1] === "category";
  const isBookmarkPageActive = pathname === "/bookmarks";
  const isCartPageActive = pathname === "/cart";
  const isLoginPageActive = pathname === "/login";
  const isAboutusPageActive = pathname === "/about-us";

  return (
    <>
      <header className="sticky top-0 z-40 flex h-[75px] w-full items-center justify-between bg-white-100 px-2 align-baseline min-[420px]:px-6 sm:h-[80px] sm:px-10 md:h-[92px] xl:h-24 xl:px-12 ">
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
                <PrimaryCategory.Link
                  label={category}
                  key={category}
                  category={category}
                  href={`/category/${category.toLowerCase()}`}
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
            onClick={toggleSidebar}
            className="relative top-[2px] ml-2 lg:hidden"
          />
        </div>
      </header>
      {!isDesktop && (
        <Sidebar
          isOpen={activeSidebar}
          onClose={toggleSidebar}
          activeCategory={activeSidebarCategory}
          onChangeCategory={setActiveSidebarCategory}
        />
      )}
    </>
  );
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory?: Categories;
  onChangeCategory?: (category: Categories) => void;
}

const Sidebar = ({
  isOpen,
  onClose,
  activeCategory = "MAN",
  onChangeCategory,
}: SidebarProps) => {
  const [activeCategoryInMenu, setActiveCategoryInMenu] =
    useState<Categories>(activeCategory);

  const onChangeCategoryWrapper = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const activeCategory = e.currentTarget.getAttribute("label") as Categories;

    setActiveCategoryInMenu(activeCategory);
    if (onChangeCategory) onChangeCategory(activeCategory);
  };

  return (
    <Dialog as="div" open={isOpen} onClose={onClose} className="fixed z-40 h-full w-full">
      <div className="fixed top-0 h-full w-full bg-black-50 opacity-75"></div>
      <Dialog.Panel className="fixed right-0 top-0 h-full w-full bg-white-100 opacity-100 min-[420px]:w-[420px] sm:w-[480px] md:w-[540px]">
        <div className="relative right-0 flex h-[75px] items-center justify-end border-b-[1px] border-b-black-25 px-2 min-[420px]:px-6 sm:h-[80px] sm:px-10 md:h-[92px]">
          <MenuIconButton
            active={true}
            onClick={onClose}
            className="relative top-1 sm:top-[4px]"
          />
        </div>
        <div className="mt-8 flex justify-around">
          {categories.map((category) => {
            return (
              <PrimaryCategory.Button
                label={category}
                key={category}
                category={category}
                active={category === activeCategoryInMenu}
                className="text-xl sm:text-2xl "
                onClick={onChangeCategoryWrapper}
              />
            );
          })}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Header;

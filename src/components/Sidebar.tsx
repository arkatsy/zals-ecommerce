import { Dialog, Tab, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { XIcon } from "./Icons";
import { MAIN_CATEGORIES, classNames } from "@/lib/utils";

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    localStorage.setItem("currentTab", JSON.stringify(currentTab));
  }, [currentTab]);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        static
        as="div"
        open={isOpen}
        className="fixed top-0 right-0 bottom-0 lg:hidden"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-75/25" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel
            as="div"
            className="flex h-full w-full max-w-md flex-col items-end 
               bg-white-100 shadow-xl"
          >
            <div className="py-4 px-4 sm:px-6 lg:px-8">
              <button onClick={onClose} className="relative top-[2px]">
                <XIcon />
              </button>
            </div>
            <Tab.Group onChange={(idx) => setCurrentTab(idx)} defaultIndex={currentTab}>
              <div className="w-full border-t border-black-100"></div>
              <Tab.List className="mt-6 mb-8 flex w-full justify-around gap-16 px-8">
                {categories.map((category) => (
                  <Tab
                    key={category.name}
                    className={({ selected }) =>
                      classNames(
                        "flex flex-col px-2 py-2 text-center text-xl tracking-wide text-black-100 sm:text-2xl",
                        "after:pointer-events-none after:invisible after:h-0 after:select-none after:flex-col after:overflow-hidden after:font-normal after:content-[attr(data-text)] ",
                        selected ? "font-normal" : "font-light"
                      )
                    }
                    data-text={category.name}
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
              <div className="mb-2 py-2 px-4 text-lg uppercase sm:px-6 sm:text-xl">
                Categories
              </div>
              <Tab.Panels className="w-full overflow-y-auto">
                {categories.map((category) => (
                  <Tab.Panel key={category.name} className="">
                    {category.subcategories.map((subcategory, idx) => (
                      <div
                        key={idx}
                        className="w-full cursor-pointer bg-white-75 py-3 px-4 text-right text-lg font-light uppercase sm:px-6 sm:text-xl"
                      >
                        {subcategory.name}
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Sidebar;

// Fake data for the sidebar
const categories: Array<{
  name: (typeof MAIN_CATEGORIES)[number];
  subcategories: Array<{ name: string; href: string }>;
}> = [
  {
    name: "MAN",
    subcategories: [
      {
        name: "Shirts",
        href: "#",
      },
      {
        name: "Trousers",
        href: "#",
      },
      {
        name: "Jackets",
        href: "#",
      },
      {
        name: "Accessories",
        href: "#",
      },
      {
        name: "Shoes",
        href: "#",
      },
      {
        name: "Pants",
        href: "#",
      },
      {
        name: "Suits",
        href: "#",
      },
      {
        name: "Underwear",
        href: "#",
      },
      {
        name: "Swimwear",
        href: "#",
      },
      {
        name: "Socks",
        href: "#",
      },
      {
        name: "Sleepwear",
        href: "#",
      },
    ],
  },
  {
    name: "WOMEN",
    subcategories: [
      {
        name: "Shirts",
        href: "#",
      },
      {
        name: "Trousers",
        href: "#",
      },
      {
        name: "Jackets",
        href: "#",
      },
      {
        name: "Lingerie",
        href: "#",
      },
      {
        name: "Accessories",
        href: "#",
      },
      {
        name: "Shoes",
        href: "#",
      },
      {
        name: "Pants",
        href: "#",
      },
      {
        name: "Jeans",
        href: "#",
      },
      {
        name: "Suits",
        href: "#",
      },
      {
        name: "Bags",
        href: "#",
      },
      {
        name: "Underwear",
        href: "#",
      },
      {
        name: "Swimwear",
        href: "#",
      },
      {
        name: "Socks",
        href: "#",
      },
    ],
  },
  {
    name: "KIDS",
    subcategories: [
      {
        name: "Shirts",
        href: "#",
      },
      {
        name: "Shoes",
        href: "#",
      },
      {
        name: "Underwear",
        href: "#",
      },
      {
        name: "Accessories",
        href: "#",
      },
    ],
  },
];

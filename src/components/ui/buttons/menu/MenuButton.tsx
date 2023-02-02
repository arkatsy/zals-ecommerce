import { BiMenu, BiX } from "react-icons/bi";

type MenuTypes = "OPENED" | "CLOSED";

interface MenuButtonProps {
  type: MenuTypes;
}

const MenuButton = ({ type }: MenuButtonProps) => {
  return (
    <button>
      <MenuIcon type={type} />
    </button>
  );
};

interface MenuIconProps {
  type: MenuTypes;
}

const MenuIcon = ({ type }: MenuIconProps) => {
  return (
    <>
      {type === "OPENED" ? (
        <BiMenu className="h-6 w-6 sm:h-7 sm:w-7 xl:h-9 xl:w-9" />
      ) : (
        <BiX className="h-6 w-6 sm:h-7 sm:w-7 xl:h-9 xl:w-9" />
      )}
    </>
  );
};

export default MenuButton;

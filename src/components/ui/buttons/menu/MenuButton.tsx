import { BiMenu, BiX } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
type MenuTypes = "OPENED" | "CLOSED";

interface MenuButtonProps {
  type?: MenuTypes;
}

const MenuButton = ({ type = "CLOSED" }: MenuButtonProps) => {
  return (
    <button aria-label={type === "CLOSED" ? "Open menu" : "Close menu"}>
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
        <GrClose className="h-7 w-7 sm:h-8 sm:w-8" />
      ) : (
        <SlMenu className="h-7 w-7 sm:h-8 sm:w-8" />
      )}
    </>
  );
};

export default MenuButton;

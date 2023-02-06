import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
type MenuTypes = "OPENED" | "CLOSED";

interface MenuButtonProps {
  type?: MenuTypes;
  onClick?: () => void;
}

const MenuButton = ({ type = "CLOSED", onClick }: MenuButtonProps) => {
  const onClickWrapper = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      aria-label={type === "CLOSED" ? "Open menu" : "Close menu"}
      onClick={onClickWrapper}
    >
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

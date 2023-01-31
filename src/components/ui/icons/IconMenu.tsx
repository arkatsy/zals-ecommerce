import { BiMenu, BiX } from "react-icons/bi";
import { chooseSize } from "./shared";
import type { IconBaseProps } from "./shared";

const STATES = {
  OPENED: "OPENED",
  CLOSED: "CLOSED",
} as const;

interface IconMenuProps extends IconBaseProps {
  state?: keyof typeof STATES;
}

const IconMenu = ({
  size = "sm",
  state = STATES.OPENED,
  className = "",
  ...props
}: IconMenuProps) => {
  return (
    <>
      {state === STATES.OPENED ? (
        <BiX size={chooseSize(size)} className={className} {...props} />
      ) : (
        <BiMenu size={chooseSize(size)} className={className} {...props} />
      )}
    </>
  );
};

export default IconMenu;

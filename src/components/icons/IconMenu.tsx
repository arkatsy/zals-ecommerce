import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const SIZES = {
  sm: 32,
  md: 38,
  lg: 46,
} as const;

const STATES = {
  OPENED: "OPENED",
  CLOSED: "CLOSED",
} as const;

interface IconMenuProps {
  size?: keyof typeof SIZES;
  state?: keyof typeof STATES;
}

const IconMenu = ({ size = "sm", state = STATES.OPENED }: IconMenuProps) => {
  return (
    <>
      {state === STATES.OPENED ? (
        <IoMdClose size={SIZES[size]} />
      ) : (
        <RiMenuLine size={SIZES[size]} />
      )}
    </>
  );
};

export default IconMenu;

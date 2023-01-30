import { BiShoppingBag } from "react-icons/bi";
import { chooseSize } from "./shared";
import type { IconBaseProps } from "./shared";

interface IconCartProps extends IconBaseProps {}

const IconCart = ({ size = "sm", className = "", ...rest }: IconCartProps) => {
  return (
    <BiShoppingBag size={chooseSize(size)} className={className} {...rest} />
  );
};

export default IconCart;

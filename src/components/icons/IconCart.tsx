import { BsBag } from "react-icons/bs";

const SIZES = {
  sm: 26,
  md: 30,
  lg: 34,
} as const;

interface IconCartProps {
  size?: keyof typeof SIZES;
}

const IconCart = ({ size = "sm" }: IconCartProps) => {
  return <BsBag size={SIZES[size]} />;
};

export default IconCart;

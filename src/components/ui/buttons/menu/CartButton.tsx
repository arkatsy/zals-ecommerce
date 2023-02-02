import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { RiShoppingBagFill } from "react-icons/ri";

interface CartButtonProps {
  active?: boolean;
}

const CartButton = ({ active = false }: CartButtonProps) => {
  return (
    <Link href="/cart" className="flex w-fit">
      <CartIcon active={active} />
    </Link>
  );
};

interface CartIconProps {
  active: boolean;
}

const CartIcon = ({ active }: CartIconProps) => {
  return (
    <>
      {active ? (
        <RiShoppingBagFill className="h-6 w-6 sm:h-7 sm:w-7 xl:h-9 xl:w-9" />
      ) : (
        <BiShoppingBag className="h-6 w-6 sm:h-7 sm:w-7 xl:h-9 xl:w-9" />
      )}
    </>
  );
};

export default CartButton;

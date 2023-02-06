import Link from "next/link";
import { BsBag, BsBagFill } from "react-icons/bs";

interface CartButtonProps {
  active?: boolean;
  className?: string;
}

const CartButton = ({ active = false, className }: CartButtonProps) => {
  return (
    <Link
      href="/cart"
      className={`flex w-fit ${className} p-1`}
      aria-label="Go to your shopping cart"
      title="Go to your shopping cart"
    >
      <CartIcon active={active} />
      <span className="sr-only">
        Navigate to your shopping cart where you saved your products you want to buy
      </span>
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
        <BsBagFill className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8" />
      ) : (
        <BsBag className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8" />
      )}
    </>
  );
};

export default CartButton;

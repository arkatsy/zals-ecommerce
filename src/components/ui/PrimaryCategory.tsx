import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

type PrimaryCategories = "MAN" | "WOMEN" | "KIDS";

const primaryCategoryClasses = cva(
  [
    "text-lg",
    "sm:text-xl",
    "md:text-2xl",
    "xl:text-3xl",
    "p-[6px]",
    "tracking-wide",
    "uppercase",
    "font-oswald",
  ],
  {
    variants: {
      active: {
        false: ["font-light", "text-black-75"],
        true: ["font-normal", "text-black-100"],
      },
    },
  }
);

interface PrimaryCategoryProps extends VariantProps<typeof primaryCategoryClasses> {
  category?: PrimaryCategories;
  className?: string;
  [x: string]: any;
}

const PrimaryCategoryLink = ({
  category = "MAN",
  active = false,
  className = "",
  href,
  ...props
}: PrimaryCategoryProps & {
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`${primaryCategoryClasses({ active })} ${className}`}
      {...props}
    >
      {category}
    </Link>
  );
};

const PrimaryCategoryButton = ({
  category = "MAN",
  active = false,
  className = "",
  onClick,
  ...props
}: PrimaryCategoryProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`${primaryCategoryClasses({ active })} ${className}`}
      onClick={onClick}
      {...props}
    >
      {category}
    </button>
  );
};

export const PrimaryCategory = {
  Link: PrimaryCategoryLink,
  Button: PrimaryCategoryButton,
};

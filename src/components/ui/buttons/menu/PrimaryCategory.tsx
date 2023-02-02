import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
type PrimaryCategories = "MAN" | "WOMEN" | "KIDS";

const primaryCategoryClasses = cva(["text-lg", "sm:text-xl", "md:text-2xl", "p-1"], {
  variants: {
    active: {
      false: ["font-light", "text-black-75"],
      true: ["font-normal", "text-black-100"],
    },
  },
});

interface PrimaryCategoryProps extends VariantProps<typeof primaryCategoryClasses> {
  category?: PrimaryCategories;
  className: string;
  [x: string]: any;
}

// This component will be used in the overlay menu in mobile and tablet and in the top bar in desktop.
// We may have different sizes on tablet. Not entirely sure yet.
// That's why for now we define the size in the consumer size through tailwind classes.
const PrimaryCategory = ({
  category = "MAN",
  active = false,
  className = "",
  ...props
}: PrimaryCategoryProps) => {
  return (
    <Link
      href={`/category/${category.toLowerCase()}`}
      className={`${primaryCategoryClasses({ active })} ${className}`}
      {...props}
    >
      {category}
    </Link>
  );
};

export default PrimaryCategory;

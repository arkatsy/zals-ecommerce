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
  [x: string]: any;
}

const PrimaryCategory = ({
  category = "MAN",
  active = false,
  ...props
}: PrimaryCategoryProps) => {
  return (
    <Link
      href={`/category/${category.toLowerCase()}`}
      className={primaryCategoryClasses({ active })}
      {...props}
    >
      {category}
    </Link>
  );
};

export default PrimaryCategory;

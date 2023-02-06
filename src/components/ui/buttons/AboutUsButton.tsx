import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const aboutUsButtonClasses = cva(
  [
    "flex",
    "w-fit",
    "text-lg",
    "sm:text-xl",
    "md:text-2xl",
    "p-1",
    "xl:text-3xl",
    "tracking-wide",
    "uppercase",
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

interface AboutUsButtonProps extends VariantProps<typeof aboutUsButtonClasses> {
  className?: string;
  active?: boolean;
}

const AboutUsButton = ({ className, active = false }: AboutUsButtonProps) => {
  return (
    <Link href="/about-us" className={`${aboutUsButtonClasses({ active })} ${className}`}>
      ABOUT US
    </Link>
  );
};

export default AboutUsButton;

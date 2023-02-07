import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const aboutUsLinkClasses = cva(
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

interface AboutUsLinkProps extends VariantProps<typeof aboutUsLinkClasses> {
  href: string;
  className?: string;
}

const AboutUsLink = ({ href, className = "", active }: AboutUsLinkProps) => {
  return (
    <Link href={href} className={`${aboutUsLinkClasses({ active })} ${className}`}>
      ABOUT US
    </Link>
  );
};

export default AboutUsLink;

import Link from "next/link";

type LogoLabel = "MAN" | "WOMEN" | "KIDS" | null;

interface LogoButtonProps {
  label?: LogoLabel;
  className?: string;
  href?: string;
  ariaLabel?: string;
  title?: string;
}

const Logo = ({ label = null, className, ariaLabel, title }: LogoButtonProps) => {
  return (
    <Link href="/" className={`flex ${className}`} aria-label={ariaLabel} title={title}>
      <Content label={label} />
    </Link>
  );
};

const Content = (props: { label: LogoLabel }) => {
  const { label } = props;
  return (
    <h1 className="relative select-none font-playfairDisplay text-4xl font-bold uppercase tracking-wider sm:text-5xl xl:text-6xl">
      ZALS
      {label && (
        <span className="absolute -bottom-2 hidden font-oswald text-base font-light tracking-wide min-[350px]:inline-block sm:text-lg xl:hidden xl:text-2xl">
          {label}
        </span>
      )}
    </h1>
  );
};

export default Logo;

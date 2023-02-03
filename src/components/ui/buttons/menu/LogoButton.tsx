import Link from "next/link";

type LogoLabel = "MAN" | "WOMEN" | "KIDS" | "BOOKMARKS" | "CART" | null;

interface LogoButtonProps {
  label?: LogoLabel;
  className?: string;
}

const LogoButton = ({ label = null, className }: LogoButtonProps) => {
  return (
    <Link href="/" className={`flex w-fit ${className}`}>
      <Logo label={label} />
    </Link>
  );
};

const Logo = (props: { label: LogoLabel }) => {
  const { label } = props;
  return (
    <h1 className="select-none font-playfairDisplay text-4xl font-bold uppercase tracking-wider sm:text-5xl xl:text-6xl">
      ZALS
      {label && (
        <span className="hidden font-oswald text-base font-light tracking-wide min-[350px]:inline-block sm:text-lg xl:hidden xl:text-2xl">
          {label}
        </span>
      )}
    </h1>
  );
};

export default LogoButton;

interface Props {
  label?: "MAN" | "WOMEN" | "KIDS" | null;
}

const Logo = ({ label = null }: Props) => {
  return (
    <h1 className="select-none font-playfairDisplay text-4xl font-bold uppercase tracking-wider sm:text-5xl xl:text-6xl">
      ZALS
      {label && (
        <span className="font-oswald text-base font-light tracking-wide sm:text-lg xl:text-2xl">
          {label}
        </span>
      )}
    </h1>
  );
};

export default Logo;

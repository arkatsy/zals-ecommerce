import { Oswald, Playfair_Display } from "@next/font/google";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={`${oswald.variable} ${playfairDisplay.variable} font-oswald`}
    >
      {children}
    </div>
  );
};

export default Layout;

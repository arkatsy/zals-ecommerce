import { Oswald, Playfair_Display } from "@next/font/google";
import Header from "./Header";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={`${oswald.variable} ${playfairDisplay.variable} mx-3 flex min-h-screen flex-col items-center bg-white-100 font-oswald min-[360px]:mx-8 lg:mx-16`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;

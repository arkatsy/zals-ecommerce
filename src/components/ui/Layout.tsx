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
      className={`${oswald.variable} ${playfairDisplay.variable} flex justify-center`}
    >
      <div className="flex w-full max-w-[1920px] flex-col">
        <div className="flex h-full max-w-[1920px] flex-col items-center font-oswald ">
          <Header />
          <div className="min-h-screen w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

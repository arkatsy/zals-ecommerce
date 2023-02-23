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
    <>
      <style jsx global>
        {`
          :root {
            --font-oswald: ${oswald.style.fontFamily};
          }
        `}
      </style>
      <div
        {...props}
        className={`${oswald.variable} ${playfairDisplay.variable} px-4 sm:px-6 lg:px-8`}
      >
        <Header />
        <div className="mx-auto  max-w-[1920px]  bg-white-100">{children}</div>
      </div>
    </>
  );
};

export default Layout;

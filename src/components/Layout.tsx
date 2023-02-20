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
      <div {...props} className={`${oswald.variable} ${playfairDisplay.variable}`}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;

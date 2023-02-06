import Link from "next/link";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

type ButtonTypes = "LOGIN" | "LOGOUT";

interface AuthButtonProps {
  type: ButtonTypes;
  className?: string;
}

const AuthButton = ({ type, className }: AuthButtonProps) => {
  return (
    <Link
      href="/login"
      className="flex w-fit p-1.5"
      aria-label="Log in to our website"
      title="Log in to our website"
    >
      <div className="flex items-center gap-2">
        {type === "LOGIN" && (
          <p
            className={`hidden font-light uppercase tracking-wide lg:block lg:text-2xl xl:text-3xl ${className}`}
          >
            LOGIN
          </p>
        )}
        <AuthIcon type={type} className={className} />
        <span className="sr-only">Navigate to the login page</span>
      </div>
    </Link>
  );
};

interface AuthIconProps {
  type: ButtonTypes;
  className?: string;
}

const AuthIcon = ({ type, className }: AuthIconProps) => {
  return (
    <>
      {type === "LOGIN" ? (
        <AiOutlineLogin
          className={`lg: h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 ${className}`}
        />
      ) : (
        <AiOutlineLogout className={`h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 ${className}`} />
      )}
    </>
  );
};

export default AuthButton;

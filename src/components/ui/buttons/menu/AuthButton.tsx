import Link from "next/link";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

type ButtonTypes = "LOGIN" | "LOGOUT";

interface AuthButtonProps {
  type: ButtonTypes;
  className?: string;
}

const AuthButton = ({ type, className }: AuthButtonProps) => {
  return (
    <Link href="/login" className="flex w-fit">
      <div className="flex items-center gap-4">
        {type === "LOGIN" && (
          <p
            className={`hidden text-3xl font-light uppercase tracking-wide xl:block ${className}`}
          >
            LOGIN
          </p>
        )}
        <AuthIcon type={type} className={className} />
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

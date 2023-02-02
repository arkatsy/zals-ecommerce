import Link from "next/link";
import { BiLogIn, BiLogOut } from "react-icons/bi";

type ButtonTypes = "LOGIN" | "LOGOUT";

interface AuthButtonProps {
  type: ButtonTypes;
}

const AuthButton = ({ type }: AuthButtonProps) => {
  return (
    <Link href="/login" className="flex w-fit">
      <div className="flex items-center">
        {type === "LOGIN" && (
          <p className="hidden text-2xl font-light uppercase xl:block">LOGIN</p>
        )}
        <AuthIcon type={type} />
      </div>
    </Link>
  );
};

interface AuthIconProps {
  type: ButtonTypes;
}

const AuthIcon = ({ type }: AuthIconProps) => {
  return (
    <>
      {type === "LOGIN" ? (
        <BiLogIn className="h-6 w-6 sm:h-7 sm:w-7 xl:h-9 xl:w-9" />
      ) : (
        <BiLogOut className="h-6 w-6 sm:h-7 sm:w-7 xl:h-9 xl:w-9" />
      )}
    </>
  );
};

export default AuthButton;

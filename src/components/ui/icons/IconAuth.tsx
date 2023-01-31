import { BiLogIn, BiLogOut } from "react-icons/bi";
import { chooseSize } from "./shared";
import type { IconBaseProps } from "./shared";

const STATES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
} as const;

interface IconAuthProps extends IconBaseProps {
  state?: keyof typeof STATES;
}

const IconAuth = ({
  size = "sm",
  state = STATES.LOGIN,
  className = "",
  ...props
}: IconAuthProps) => {
  return (
    <>
      {state === STATES.LOGIN ? (
        <BiLogIn size={chooseSize(size)} className={className} {...props} />
      ) : (
        <BiLogOut size={chooseSize(size)} className={className} {...props} />
      )}
    </>
  );
};

export default IconAuth;

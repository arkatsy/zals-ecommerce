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
  ...rest
}: IconAuthProps) => {
  return (
    <>
      {state === STATES.LOGIN ? (
        <BiLogIn size={chooseSize(size)} className={className} {...rest} />
      ) : (
        <BiLogOut size={chooseSize(size)} className={className} {...rest} />
      )}
    </>
  );
};

export default IconAuth;

import { SlLogin, SlLogout } from "react-icons/sl";

const SIZES = {
  sm: 26,
  md: 30,
  lg: 34,
} as const;

const STATES = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
} as const;

interface IconAuthProps {
  size?: keyof typeof SIZES;
  state?: keyof typeof STATES;
}

const IconAuth = ({ size = "sm", state = STATES.LOGIN }: IconAuthProps) => {
  return (
    <>
      {state === STATES.LOGIN ? (
        <SlLogin size={SIZES[size]} />
      ) : (
        <SlLogout size={SIZES[size]} />
      )}
    </>
  );
};

export default IconAuth;

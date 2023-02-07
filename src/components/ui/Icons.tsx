import { type IconType } from "react-icons";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import { BsBag, BsBagFill, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import {
  RiLoginBoxFill,
  RiLoginBoxLine,
  RiLogoutBoxFill,
  RiLogoutBoxLine,
} from "react-icons/ri";

interface IconCreator {
  className?: string;
  Icon: IconType;
}

function createIcon({ className = "", Icon }: IconCreator) {
  return <Icon className={className} />;
}

type IconProps = Pick<IconCreator, "className">;

export const OpenMenuIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: SlMenu,
    className: `w-[27px] h-[27px]  sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const CloseMenuIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: GrClose,
    className: `w-[27px] h-[27px]  sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const BagIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBag,
    className: `w-[23px] h-[23px] sm:w-[31px] sm:h-[31px] ${className}`,
  });

export const BagIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBagFill,
    className: `w-[23px] h-[23px] sm:w-[31px] sm:h-[31px] ${className}`,
  });

export const LoginIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLoginBoxLine,
    className: `w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const LoginIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLoginBoxFill,
    className: `w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const LogoutIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLogoutBoxLine,
    className: `w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const LogoutIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLogoutBoxFill,
    className: `w-[26px] h-[26px] sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const BookmarkIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBookmark,
    className: `w-[23px] h-[23px] sm:w-[31px] sm:h-[31px] ${className}`,
  });

export const BookmarkIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBookmarkFill,
    className: `w-[23px] h-[23px] sm:w-[31px] sm:h-[31px] ${className}`,
  });

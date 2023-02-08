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
    className: `w-[28px] h-[28px]  sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const CloseMenuIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: GrClose,
    className: `w-[28px] h-[28px]  sm:w-[34px] sm:h-[34px] ${className}`,
  });

export const BagIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBag,
    className: `w-[25px] h-[25px] sm:w-[31px] sm:h-[31px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] ${className}`,
  });

export const BagIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBagFill,
    className: `w-[25px] h-[25px] sm:w-[31px] sm:h-[31px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] ${className}`,
  });

export const LoginIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLoginBoxLine,
    className: `w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] ${className}`,
  });

export const LoginIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLoginBoxFill,
    className: `w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] ${className}`,
  });

export const LogoutIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLogoutBoxLine,
    className: `w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] ${className}`,
  });

export const LogoutIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: RiLogoutBoxFill,
    className: `w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] ${className}`,
  });

export const BookmarkIcon = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBookmark,
    className: `w-[25px] h-[25px] sm:w-[31px] sm:h-[31px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] ${className}`,
  });

export const BookmarkIconFill = ({ className }: IconProps) =>
  createIcon({
    Icon: BsBookmarkFill,
    className: `w-[25px] h-[25px] sm:w-[31px] sm:h-[31px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px] ${className}`,
  });

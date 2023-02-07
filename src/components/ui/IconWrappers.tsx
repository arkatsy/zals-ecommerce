import type { MouseEventHandler } from "react";
import * as Icons from "./Icons";
import Link from "next/link";

// Icon Wrappers
type IconProps = { active?: boolean };

const BookmarkIcon = ({ active = false }: IconProps) => {
  return active ? <Icons.BookmarkIconFill /> : <Icons.BookmarkIcon />;
};

const CartIcon = ({ active = false }: IconProps) => {
  return active ? <Icons.BagIconFill /> : <Icons.BagIcon />;
};

const MenuIcon = ({ active = false }: IconProps) => {
  return active ? <Icons.CloseMenuIcon /> : <Icons.OpenMenuIcon />;
};

const LoginIcon = ({ active = false }: IconProps) => {
  return active ? <Icons.LoginIconFill /> : <Icons.LoginIcon />;
};

const LogoutIcon = ({ active = false }: IconProps) => {
  return active ? <Icons.LogoutIconFill /> : <Icons.LogoutIcon />;
};

// Link Wrappers
type IconLinkProps = {
  active?: boolean;
  href: string;
  className?: string;
  ariaLabel?: string;
  title?: string;
};

export const BookmarkIconLink = ({
  active = false,
  href,
  className = "",
  ariaLabel = "",
  title = "",
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex w-fit p-1 ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      <BookmarkIcon active={active} />
    </Link>
  );
};

export const CartIconLink = ({
  active = false,
  className = "",
  ariaLabel = "",
  title = "",
  href,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex w-fit p-1 ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      <CartIcon active={active} />
    </Link>
  );
};

export const LoginIconLink = ({
  active = false,
  className = "",
  ariaLabel = "",
  title = "",
  href,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex p-1 ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      <LoginIcon active={active} />
    </Link>
  );
};

export const LogoutIconLink = ({
  active = false,
  className = "",
  ariaLabel = "",
  title = "",
  href,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex p-1 ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      <LogoutIcon active={active} />
    </Link>
  );
};

// Button Wrappers
type IconButtonProps = {
  active?: boolean;
  className?: string;
  ariaLabel?: string;
  title?: string;
  onClick?: MouseEventHandler;
};

export const MenuIconButton = ({
  active = false,
  className = "",
  ariaLabel = "",
  title = "",
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={`flex p-1 ${className}`}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
    >
      <MenuIcon active={active} />
    </button>
  );
};

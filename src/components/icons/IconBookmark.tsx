import { BsBookmark } from "react-icons/bs";

const SIZES = {
  sm: 26,
  md: 30,
  lg: 34,
} as const;

interface IconBookmarkProps {
  size?: keyof typeof SIZES;
}

const IconBookmark = ({ size = "md" }: IconBookmarkProps) => {
  return <BsBookmark size={SIZES[size]} />;
};

export default IconBookmark;

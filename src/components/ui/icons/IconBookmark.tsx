import { BiBookmark } from "react-icons/bi";
import { chooseSize } from "./shared";
import type { IconBaseProps } from "./shared";

interface IconBookmarkProps extends IconBaseProps {}

const IconBookmark = ({ size = "md", className = "", ...props }: IconBookmarkProps) => {
  return <BiBookmark size={chooseSize(size)} className={className} {...props} />;
};

export default IconBookmark;

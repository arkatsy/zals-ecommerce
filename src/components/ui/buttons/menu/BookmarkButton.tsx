import Link from "next/link";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";

interface BookmarkButtonProps {
  active?: boolean;
}

const BookmarkButton = ({ active = false }: BookmarkButtonProps) => {
  return (
    <Link href="/bookmarks" className="flex w-fit">
      <BookmarkIcon active={active} />
    </Link>
  );
};

interface BookmarkIconProps {
  active: boolean;
}

const BookmarkIcon = ({ active }: BookmarkIconProps) => {
  return (
    <>
      {active ? (
        <RiBookmarkFill className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-9" />
      ) : (
        <RiBookmarkLine className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-9" />
      )}
    </>
  );
};

export default BookmarkButton;

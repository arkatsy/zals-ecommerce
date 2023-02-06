import Link from "next/link";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

interface BookmarkButtonProps {
  active?: boolean;
  className?: string;
}

const BookmarkButton = ({ active = false, className }: BookmarkButtonProps) => {
  return (
    <Link
      href="/bookmarks"
      className={`flex w-fit ${className} p-1`}
      aria-label="Go to your bookmarked products"
      title="Go to your bookmarked products"
    >
      <BookmarkIcon active={active} />
      <span className="sr-only">Navigate to your saved products page</span>
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
        <BsBookmarkFill className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8" />
      ) : (
        <BsBookmark className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8" />
      )}
    </>
  );
};

export default BookmarkButton;

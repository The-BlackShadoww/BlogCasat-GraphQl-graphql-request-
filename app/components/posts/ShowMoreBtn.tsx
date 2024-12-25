"use client";

type PageInfoType = {
  hasNextPage: boolean;
  endCursor: string;
};

type ShowMoreBtnProps = {
  pageInfo: PageInfoType;
};

// const ShowMoreBtn = ({ pageInfo }: { pageInfo: ShowMoreBtnProps }) => {
const ShowMoreBtn = (pageInfo: PageInfoType) => {
  const handleShowMore = () => {};
  return (
    <button
      onClick={handleShowMore}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 mt-8"
    >
      Show More Posts
    </button>
  );
};

export default ShowMoreBtn;

import PostCard from "./PostCard";
import LatestPost from "./LatestPost";
import { Edge } from "@/types";
import ShowMoreBtn from "./ShowMoreBtn";
import Link from "next/link";

type PageInfoType = {
  hasNextPage: boolean;
  endCursor: string;
};

export default function PostList({
  posts,
  pageInfo,
}: {
  posts: Edge[];
  pageInfo?: PageInfoType;
}) {
  // posts are sorted by time. Get the latest one.
  const latestPost = posts[0].node;
  // rest of the post to handle separately.
  const restPosts = posts.slice(1);

  return (
    <>
      <div className="px-8 py-8 bg-gray-100">
        <LatestPost post={latestPost} />
      </div>

      {restPosts.length > 0 && (
        <div className="px-8 py-16">
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post) => (
              <PostCard key={post?.node?.slug} post={post?.node} />
            ))}
          </div>
          {/* {pageInfo?.hasNextPage && <ShowMoreBtn {...pageInfo} />} */}
          <Link
            href={`/blog?endCursor=${pageInfo?.endCursor}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2 mt-8"
          >
            Show More Posts
          </Link>
        </div>
      )}
    </>
  );
}

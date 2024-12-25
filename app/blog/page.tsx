// import React from "react";
// import PostList from "../components/posts/PostList";
// import { getAllPosts } from "@/quries/blog-data";

// const BlogPage = async () => {
//   const posts = await getAllPosts();
//   return <PostList posts={posts?.edges} pageInfo={posts.pageInfo} />;
// };

// export default BlogPage;

import React from "react";
import PostList from "../components/posts/PostList";
import { getAllPosts } from "@/quries/blog-data";
import { Edge } from "@/types";

type PageInfoType = {
  hasNextPage: boolean;
  endCursor: string;
};

interface BlogPageProps {
  posts: Edge[];
  pageInfo: PageInfoType;
}

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { endCursor?: string };
}) => {
  const endCursor = searchParams.endCursor;
  const posts = await getAllPosts(null, endCursor);

  return <PostList posts={posts?.edges} pageInfo={posts.pageInfo} />;
};

export default BlogPage;

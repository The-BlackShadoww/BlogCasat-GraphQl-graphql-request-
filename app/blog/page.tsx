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
import style from "./style.module.css";

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

  return (
    <section className="">
      <div className="banner-section-blog z-[1] overflow-hidden relative w-full h-[50vh] bg-[#222434] flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white capitalize z-10">
          Here are all the blogs
        </h1>
        <button className="nav-link d-center box-style btn-box p-0 false">
          See All
        </button>
      </div>
      <div>
        <PostList posts={posts?.edges} pageInfo={posts.pageInfo} />
      </div>
    </section>
  );
};

export default BlogPage;

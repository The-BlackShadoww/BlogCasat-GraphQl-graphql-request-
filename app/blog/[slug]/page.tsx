import PostDetails from "@/app/components/posts/PostDetails";
import { getPost } from "@/quries/blog-data";

import { Post } from "@/types";

interface Params {
  slug: string;
}

const BlogDetailsPage = async ({ params }: { params: Params }) => {
  const { slug } = params; // Destructure slug from params
  console.log(slug);
  const post: Post | undefined = await getPost(slug); // Ensure post can be undefined
  if (!post) {
    // Handle case where post is undefined
    return <div>Post not found</div>;
  }
  return <PostDetails post={post} />;
};

export default BlogDetailsPage;

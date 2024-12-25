interface Post {
  id: string;
  title: string;
  subtitle: string;
  content: {
    html: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  slug: string;
  brief?: string;
  coverImage: {
    url: string;
  };
  tags: {
    name: string;
    slug: string;
    id: string;
  }[];
  author: {
    name: string;
    profilePicture: string;
  };
}

interface Edge {
  node: Post;
}

interface Posts {
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
  edges: Edge[];
}

interface Publication {
  posts: Posts;
  post?: Post;
}

interface Data {
  publication: Publication;
}

interface TagProps {
  tag: {
    id: string;
    name: string;
  };
}

export type { Post, Edge, Posts, Publication, Data, TagProps };

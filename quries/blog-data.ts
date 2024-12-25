import { gql } from "graphql-request";
import { getClient } from "@/lib/graphQlClient";
import { Data } from "@/types";

export const getAllPosts = async (tags?: string[], endCursor?: string) => {
  const client = getClient();
  const data: Data = await client.request(
    gql`
      query allPosts($tags: [ObjectId!], $endCursor: String) {
        publication(host: "blog.greenroots.info") {
          title
          posts(first: 20, filter: { tags: $tags }, after: $endCursor) {
            # totalDocuments
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                author {
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
    { tags, endCursor }
  );
  // return data.publication.posts.edges;
  return data.publication.posts;
};

export const getPost = async (slug: string) => {
  const client = getClient();
  const data: Data = await client.request(
    gql`
      query postDetails($slug: String!) {
        publication(host: "blog.greenroots.info") {
          post(slug: $slug) {
            author {
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content {
              html
            }
            tags {
              name
              slug
              id
            }
            coverImage {
              url
            }
          }
        }
      }
    `,
    { slug: slug }
  );

  return data.publication.post;
};

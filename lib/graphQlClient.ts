import { GraphQLClient } from "graphql-request";

export const getClient = () => {
  const endpoint = "https://gql.hashnode.com";

  const graphqlClient = new GraphQLClient(endpoint, {
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  return graphqlClient;
};

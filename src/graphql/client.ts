import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
    headers: {
      "apollo-client-name": "SpaceX Explorer",
      "apollo-client-version": "1.0",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
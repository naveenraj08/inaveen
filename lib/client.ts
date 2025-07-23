// app/lib/graphqlClient.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.CONTENTFUL_GRAPHQL_API_ENDPOINT!;

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
});

export default graphQLClient;

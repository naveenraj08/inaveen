import { gql } from "graphql-request";

export const getBannerContent = gql`
  query getBannerContent {
    heroBanner(id: "3ZT4W9oZIRhXX6LJPSUoOq") {
      title
      description {
        json
      }
      heroStatsCollection {
        items {
          ... on HeroStats {
            label
            value
          }
        }
      }
      action
    }
  }
`;
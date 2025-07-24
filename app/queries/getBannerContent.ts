import { gql } from "graphql-request";

export const getBannerContent = gql`
  query HeroBanner {
    heroBanner(id: "6Le9zXnbdXZUm4IHRM8x6V") {
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
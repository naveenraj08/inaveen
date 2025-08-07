import { gql } from "graphql-request";

export const getServiceContent = gql`
  query getServiceContent(
    $collection: ServicesFilter
    $listCollection: ServiceItemFilter
  ) {
    servicesCollection(where: $collection) {
      items {
        title
        serviceListCollection(where: $listCollection) {
          items {
            ... on ServiceItem {
              serviceName
              serviceDescription
              link
              id
            }
          }
        }
      }
    }
  }
`;


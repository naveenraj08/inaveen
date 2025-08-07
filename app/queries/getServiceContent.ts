import { gql } from "graphql-request";

export const getServiceContent = gql`
  query ServicesCollection(
    $collection: ServicesFilter
    $listCollection: ServiceItemFilter
  ) {
    servicesCollection(where: $collection) {
      items {
        title
        serviceListCollection(where: $listCollection) {
          items {
            link
            serviceDescription
            serviceName
            id
          }
        }
      }
    }
  }
`;


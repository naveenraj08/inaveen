import { gql } from "graphql-request";

export const getServiceContent = gql`
  query getServiceContent($where: ServicesFilter, $serviceListCollectionWhere2: ServiceItemFilter) {
    servicesCollection(where: $where) {
      items {
        title
        serviceListCollection(where: $serviceListCollectionWhere2) {
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


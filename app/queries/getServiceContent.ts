import { gql } from "graphql-request";

export const getServiceContent = gql`
    query getServiceContent {
        services(id: "4MnllxnWDfGsloxuWysvZr") {
            title
            serviceListCollection {
                items {
                    ... on ServiceItem {
                        id
                        serviceName
                        serviceDescription
                        link
                    }
                }
            }
        }
    }
`; 
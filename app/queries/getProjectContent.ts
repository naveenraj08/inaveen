import { gql } from "graphql-request";

export const getProjectsContent = gql`
    query Projects {
        projects(id: "78ykm2DMFRJd90ivABW3oO") {
            title
            projectListCollection {
            items {
                ... on ProjectItem {
                title
                link
                sample {
                    url
                    width
                    height
                }
                descriptions
                }
            }
            }
        }
    }
`; 
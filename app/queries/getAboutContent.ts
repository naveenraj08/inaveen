import { gql } from "graphql-request";

export const getAboutContent = gql`
    query getAboutContent {
        aboutMe(id: "3L5atRqG1U5z4qi9OCLkN0") {
            title
            action
            link
            content {
                json
            }
        }
    }
`; 
import { gql } from "graphql-request";

export const getAboutContent = gql`
    query getAboutContent {
        aboutMe(id: "lmMRqbBHJbENZth9i2wZ2") {
            title
            action
            link
            content {
                json
            }
        }
    }
`;
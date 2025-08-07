import { gql } from "graphql-request";

export const getProjectsContent = gql`
  query ProjectsCollection(
    $collection: ProjectsFilter
    $listCollection: ProjectItemFilter
    $limit: Int
  ) {
    projectsCollection(where: $collection) {
      items {
        title
        projectListCollection(where: $listCollection, limit: $limit) {
          items {
            title
            descriptions
            link
            sample {
              url
            }
          }
        }
      }
    }
  }
`; 
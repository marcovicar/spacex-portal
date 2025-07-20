import { gql } from "@apollo/client";

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      launch_date_utc
      launch_success
      upcoming
      launch_site {
        site_id
        site_name
        site_name_long
      }
      links {
        article_link
        video_link
        wikipedia
        mission_patch
        mission_patch_small
        presskit
      }
      ships {
        id
        name
        home_port
        image
        roles
      }
    }
  }
`;

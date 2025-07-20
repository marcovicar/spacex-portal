import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query GetLaunches($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        mission_patch_small
        video_link
      }
    }
  }
`;

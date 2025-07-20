import { gql } from "@apollo/client";

export const GET_ALL_ROCKETS = gql`
  query GetAllRockets {
    rockets {
      id
      name
      type
      active
      stages
      boosters
      cost_per_launch
      success_rate_pct
      first_flight
      country
      company
      description
    }
  }
`;

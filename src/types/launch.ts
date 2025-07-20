export interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean | null;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small?: string | null;
    video_link?: string | null;
  };
}

export interface GetLaunchesCountData {
  launchesPastResult: {
    result: {
      totalCount: number;
    };
  };
}


export interface Ship {
  name: string;
  home_port: string;
  image: string | null;
}

export interface LaunchDetailsData {
  launch: {
    id: string;
    mission_name: string;
    details: string;
    launch_date_utc: string;
    launch_site: {
      site_name_long: string;
    };
    links: {
      article_link?: string;
      wikipedia?: string;
      video_link?: string;
      presskit?: string;
      flickr_images?: string[];
    };
    ships?: (Ship | null)[];
  };
}
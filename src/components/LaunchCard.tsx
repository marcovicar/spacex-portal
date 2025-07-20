'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch_small: string;
  };
}

export default function LaunchCard({ launch }: { launch: Launch }) {
  return (
    <Card className="transition-all duration-300 hover:ring-1 hover:ring-accent/50 shadow-md bg-rocket-gray rounded-xl">
      <CardContent className="p-4 flex gap-4 items-center">
        <img
          src={launch.links.mission_patch_small}
          alt={`Logo da missão ${launch.mission_name}`}
          className="w-16 h-16 object-contain"
        />
        <div className="flex-1">
          <h2 className="text-lg text-white font-semibold">{launch.mission_name}</h2>
          <p className="text-sm text-white">
            🚀 {launch.rocket.rocket_name} •{" "}
            {new Date(launch.launch_date_utc).toLocaleDateString()}
          </p>
          <Badge
            variant={launch.launch_success ? "default" : "destructive"}
            className="mt-2"
          >
            {launch.launch_success ? "Success" : "Fail"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

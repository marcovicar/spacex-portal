import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { format } from "date-fns"
import { Launch } from "@/types/launch"
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface LaunchCardProps {
  launch: Launch;
}

export default function LaunchCard({ launch }: LaunchCardProps) {
  const {
    mission_name,
    launch_date_utc,
    launch_success,
    rocket,
    links,
  } = launch;

  const formattedDate = format(new Date(launch_date_utc), "MMMM d, yyyy");

  const fallbackLetter = mission_name?.charAt(0)?.toUpperCase() || "X";

  const [hasError, setHasError] = useState(false);

  const getYoutubeThumb = (videoUrl?: string | null): string | null => {
    if (!videoUrl) return null;

    try {
      const url = new URL(videoUrl);
      const videoId = url.searchParams.get("v");
      return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
    } catch {
      return null;
    }
  };

  const primaryImage = links?.mission_patch_small || getYoutubeThumb(links?.video_link);
  const fallbackImage = "/assets/images/default_thumb_launch_spacex.webp";
  const imageToShow = hasError || !primaryImage ? fallbackImage : primaryImage;

  const getStatusLabel = (success: boolean | null) => {
    if (success === true) return "Successful launch";
    if (success === false) return "Launch failure";
    return "Status unknown";
  };

  return (
    <Card
      className="bg-black text-white border border-zinc-800 shadow-md rounded-md overflow-hidden transition-transform hover:scale-[1.02] duration-300 animate-in fade-in zoom-in-50"
    >
      {imageToShow ? (
        <Image
          src={imageToShow}
          alt={`Mission logo ${mission_name}`}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-t-lg"
          onError={() => setHasError(true)}
          priority
        />
      ) : (
        <div
          className="w-full h-64 bg-zinc-800 flex items-center justify-center text-6xl font-bold rounded-t-lg"
        >
          {fallbackLetter}
        </div>
      )}

      <CardContent
        className="p-6 space-y-3"
      >
        <p className="text-xs text-white uppercase tracking-wider">
          {formattedDate}
        </p>

        <h2 className="text-2xl font-semibold font-bebas tracking-wide uppercase">
          {mission_name}
        </h2>

        <p className="text-sm text-white flex items-center gap-2">
          <span>🚀</span> {rocket.rocket_name}
        </p>

        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            launch_success === true
              ? "bg-green-600 text-white"
              : launch_success === false
                ? "bg-red-600 text-white"
                : "bg-zinc-700 text-zinc-100"
          }`}
        >
          {getStatusLabel(launch_success)}
        </span>

        <div className="flex items-center gap-2 mt-4">
          <Button asChild
            className="mt-4 border rounded-none cursor-pointer border-white px-4 py-2 text-sm uppercase font-medium text-white hover:bg-white hover:text-black transition-all duration-200"
          >
            <Link data-testid="launch-card" href={`/launches/${launch.id}`}>See Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

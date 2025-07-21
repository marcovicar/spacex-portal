'use client'
import { use } from 'react'
import { useQuery } from '@apollo/client'
import { GET_LAUNCH_DETAILS } from '@/graphql/queries/getLauncheDetails'
import client from '@/graphql/client'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Newspaper, Play } from "lucide-react";
import {LaunchDetailsData} from "@/types/launchDetails";
import LaunchDetailsSkeleton from "@/components/custom/LaunchDetailsSkeleton";
import { BackButton } from '@/components/custom/BackButton';

export default function LaunchDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const { data, loading, error } = useQuery<LaunchDetailsData>(GET_LAUNCH_DETAILS, {
    client,
    variables: { id },
    skip: !id,
  })

  if (loading) return <LaunchDetailsSkeleton />
  if (error) return <p className="text-red-500 p-10">Error: {error.message}</p>

  const launch = data?.launch;

  if (!launch) {
    return <p className="text-white p-10">No launch data available.</p>
  }

  const dateFormatted = format(new Date(launch.launch_date_utc), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-6">
      <BackButton />
      <h1 className="text-4xl font-bebas font-semibold uppercase tracking-widest">{launch?.mission_name || ""}</h1>
      <p className="text-white">{dateFormatted}</p>

      {/* VIDEO COVER */}
      {launch?.links?.video_link && (
        <div className="w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={launch.links.video_link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      <p className="text-lg">{launch?.details || 'No details available for this mission.'}</p>

      {launch && launch.ships && launch?.ships?.filter(Boolean).length > 0 ? (
        <ul className="space-y-4">
          {launch.ships
            .filter(Boolean)
            .map((ship, index) => (
              ship?.name && (
                <li key={index} className="flex items-center gap-4">
                  {ship?.image && (
                    <Image
                      src={ship.image}
                      alt={ship.name}
                      width={100}
                      height={100}
                      className="rounded object-cover w-24 h-24"
                    />
                  )}
                  <div>
                    <p className="font-bold text-white">{ship.name}</p>
                    <p className="text-zinc-400 text-sm">Port: {ship.home_port || "Unknown"}</p>
                  </div>
                </li>
              )
            ))}
        </ul>
      ) : (
        <p className="text-zinc-400">🚀 No Ship information available</p>
      )}

      {launch?.launch_site ? (
        <p>📍 {launch.launch_site.site_name_long}</p>
      ) : (
        <p className="text-zinc-400">📍 Launch site unavailable</p>
      )}

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold mt-6">Links</h2>
        <div className="flex flex-wrap gap-3 mt-6">
          {launch?.links?.article_link && (
            <Link href={launch.links.article_link} target="_blank">
              <Badge variant="outline" className="flex text-white hover:bg-blue-700 hover:border-blue-700 items-center gap-2 px-3 py-2">
                <Newspaper className="w-4 h-4" />
                Article
              </Badge>
            </Link>
          )}
          {launch?.links?.wikipedia && (
            <Link href={launch.links.wikipedia} target="_blank">
              <Badge variant="outline" className="flex text-white hover:bg-gray-600 hover:border-gray-600 items-center gap-2 px-3 py-2">
                <BookOpen className="w-4 h-4" />
                Wikipedia
              </Badge>
            </Link>
          )}
          {launch?.links?.video_link && (
            <Link href={launch.links.video_link} target="_blank">
              <Badge variant="outline" className="flex text-white hover:bg-red-700 hover:border-red-700 items-center gap-2 px-3 py-2">
                <Play className="w-4 h-4" />
                Video
              </Badge>
            </Link>
          )}
          {launch?.links?.presskit && (
            <Link href={launch.links.presskit} target="_blank">
              <Badge variant="outline" className="flex text-white hover:bg-yellow-700 hover:border-yellow-700 items-center gap-2 px-3 py-2">
                <ExternalLink className="w-4 h-4" />
                Presskit
              </Badge>
            </Link>
          )}
        </div>
      </div>

      {(launch?.links?.flickr_images ?? []).length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {launch?.links?.flickr_images?.map((url: string, index: number) => (
            <Image
              key={index}
              src={url}
              alt={`Launch Image ${index + 1}`}
              width={400}
              height={300}
              className="rounded shadow object-cover"
            />
          ))}
        </div>
      )}
    </div>
  )
}

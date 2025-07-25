'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useQuery } from "@apollo/client"
import { GET_LAUNCHES_PAST } from "@/graphql/queries/getLaunches"
import client from "@/graphql/client"
import { Launch } from "@/types/launch"
import SkeletonLaunchCard from "@/components/custom/SkeletonLaunchCard"
import LaunchCard from "@/components/custom/LaunchCard"
import Galaxy from "@/components/custom/BackgroundGalaxy";

export default function HomePage() {
  const { data, loading } = useQuery<{ launchesPast: Launch[] }>(GET_LAUNCHES_PAST, {
    client,
    variables: { limit: 3, offset: 0 },
  })

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-10 pt-24">
      {/* Background animado */}
      <div className="fixed inset-0  h-screen w-screen">
        <Galaxy />
      </div>

      <div className="relative z-10 space-y-16">
        {/* Main section */}
        <section className="text-center space-y-4 pt-16">
          <h1 className="text-5xl font-bold font-bebas uppercase tracking-widest animate-in slide-in-from-bottom fade-in duration-700">
            Welcome to SpaceX Portal
          </h1>
          <p className="text-white max-w-xl mx-auto text-lg">
            Discover the most exciting SpaceX launches and missions ever made.
          </p>
          <Button asChild className="mt-4 border rounded-none cursor-pointer border-white px-4 py-2 text-sm uppercase font-medium text-black bg-white hover:bg-black hover:text-white transition-all duration-200">
            <Link href="/launches">View Launches</Link>
          </Button>
        </section>

        {/* About section */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-8">
          <h2 className="text-3xl font-semibold uppercase font-bebas">About the Portal</h2>
          <p className="text-white text-base">
            {"This portal is a tribute to space exploration powered by the SpaceX API. You can explore previous missions, understand the rocket technology, and dive into humanity's leap toward the stars."}
          </p>
        </section>

        {/* First Launches section */}
        <section className="pt-16">
          <h3 className="text-2xl font-semibold mb-6 uppercase font-bebas">First Launches</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                <li key={index}>
                  <SkeletonLaunchCard />
                </li>
              ))
              : data?.launchesPast.map((launch) => (
                <LaunchCard key={launch.id} launch={launch} />
              ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

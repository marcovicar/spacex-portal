'use client'

import useInfiniteLaunches from '@/hooks/useInfiniteLaunches';
import LaunchCard from "@/components/custom/LaunchCard";
import SkeletonLaunchCard from "@/components/custom/SkeletonLaunchCard";

export default function LaunchesPage() {
  const limit = 40;

  const {
    launches,
    loading,
    error,
    loaderRef,
  } = useInfiniteLaunches(limit);

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="font-bebas font-semibold text-white text-3xl uppercase tracking-widest mb-10 mt-8">
        Launches
      </h1>

      {loading && launches.length === 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <SkeletonLaunchCard />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((launch) => (
            <li key={launch.id}>
              <LaunchCard launch={launch} />
            </li>
          ))}
        </ul>
      )}

      {launches && launches.length > 0 && (
        <div ref={loaderRef} className="mt-12 h-20 flex justify-center items-center text-sm text-zinc-400" />
      )}
    </div>
  );
}

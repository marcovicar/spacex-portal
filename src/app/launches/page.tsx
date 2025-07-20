'use client'

import useInfiniteLaunches from '@/hooks/useInfiniteLaunches';
import LaunchCard from "@/components/custom/LaunchCard";

export default function LaunchesPage() {
  const limit = 10;

  const {
    launches,
    loading,
    error,
    hasMore,
    loaderRef,
  } = useInfiniteLaunches(limit);

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="font-bebas text-white text-5xl uppercase tracking-widest mb-8">
        Launches - SpaceX <span className="text-pink-500 text-2xl">🚀</span>
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {launches.map((launch) => (
          <li key={launch.id}>
            <LaunchCard launch={launch} />
          </li>
        ))}
      </ul>

      {launches && launches.length > 0 && (
        <div ref={loaderRef} className="mt-12 h-10 flex justify-center items-center text-sm text-zinc-400" />
      )}
    </div>
  );
}

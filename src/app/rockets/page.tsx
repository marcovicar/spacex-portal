'use client'
import { useQuery } from '@apollo/client';
import { GET_ALL_ROCKETS } from '@/graphql/queries/getAllRockets';
import { Rocket } from '@/types/rocket';
import client from '@/graphql/client';
import { RocketCard } from '@/components/custom/RocketCard';
import RocketCardSkeleton from "@/components/custom/RocketCardSkeleton";

export default function RocketsPage() {
  const { data, loading, error } = useQuery<{ rockets: Rocket[] }>(GET_ALL_ROCKETS, { client });

  if (error) {
    return <p className="text-red-500 p-10">Error: {error.message}</p>;
  }

  if (!data || !data.rockets || data.rockets.length === 0) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">No rockets found</h2>
        <p className="text-zinc-400">We couldn't retrieve any rocket data from the SpaceX API. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="font-bebas font-semibold text-white text-3xl uppercase tracking-widest mb-10 mt-8">
        Rockets
      </h1>
      <div className="flex flex-col gap-y-6">
        {loading && data.rockets.length === 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <RocketCardSkeleton key={i} />
            ))}
          </div>
        ) : data?.rockets ? (
          data.rockets.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))
        ) : (
          <>
            <p className="font-semibold mb-4">No rockets found</p>
            <p className="text-zinc-400">We couldn't retrieve any rocket data from the SpaceX API. Please try again later.</p>
          </>
        )}
      </div>
    </div>
  );
}

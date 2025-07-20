'use client';
import { Skeleton } from '@/components/ui/skeleton';

export default function LaunchDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-6 animate-pulse">
      {/* Title and Date */}
      <Skeleton className="h-10 w-2/3 bg-zinc-700 rounded" />
      <Skeleton className="h-4 w-1/4 bg-zinc-700 rounded" />

      {/* Video */}
      <div className="w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-lg">
        <Skeleton className="w-full h-full bg-zinc-700" />
      </div>

      {/* Mission details */}
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-full bg-zinc-700" />
        <Skeleton className="h-4 w-5/6 bg-zinc-700" />
        <Skeleton className="h-4 w-2/3 bg-zinc-700" />
      </div>

      {/* Ship Info */}
      <div className="mt-6 space-y-3">
        <Skeleton className="h-8 w-1/3 bg-zinc-700" />
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="w-24 h-24 rounded bg-zinc-700" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 bg-zinc-700" />
              <Skeleton className="h-3 w-24 bg-zinc-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Launch Site */}
      <Skeleton className="h-4 w-1/2 bg-zinc-700" />

      {/* Links */}
      <div className="space-y-2 mt-6">
        <Skeleton className="h-6 w-28 bg-zinc-700 rounded-full" />
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-8 w-24 bg-zinc-700 rounded-full" />
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-60 w-full bg-zinc-700 rounded" />
        ))}
      </div>
    </div>
  );
}

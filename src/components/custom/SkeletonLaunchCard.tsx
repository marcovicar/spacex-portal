import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonLaunchCard() {
  return (
    <div className="bg-black w-full text-white border border-zinc-800 shadow-md rounded-md overflow-hidden animate-pulse">
      <Skeleton className="w-full h-64 rounded-t-lg" />

      <div className="p-6 space-y-4">
        <Skeleton className="w-1/3 h-4" />
        <Skeleton className="w-2/3 h-6" />
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-1/4 h-6 rounded-full" />
        <Skeleton className="w-1/3 h-8 mt-4" />
      </div>
    </div>
  )
}

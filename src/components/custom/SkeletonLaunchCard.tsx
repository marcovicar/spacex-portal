import {Skeleton} from "@/components/ui/skeleton";

export function SkeletonLaunchCard() {
  return (
    <div className="border border-zinc-800 rounded-md shadow-md overflow-hidden">
      <Skeleton className="w-full h-64 rounded-t-md" />

      <div className="p-6 space-y-3">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-2/3 h-6" />
        <Skeleton className="w-1/3 h-4" />
        <Skeleton className="w-28 h-5 rounded-full" />
        <Skeleton className="w-1/2 h-8 mt-4" />
      </div>
    </div>
  );
}
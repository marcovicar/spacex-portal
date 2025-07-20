import React from "react";
import { cn } from "@/lib/utils";

export default function RocketCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-zinc-900 rounded-xl p-6 animate-pulse", className)}>
      <div className="h-6 bg-zinc-700 rounded w-1/3 mb-2" />
      <div className="h-4 bg-zinc-800 rounded w-1/4 mb-4" />

      <div className="space-y-2">
        <div className="h-4 bg-zinc-700 rounded w-full" />
        <div className="h-4 bg-zinc-700 rounded w-5/6" />
        <div className="h-4 bg-zinc-700 rounded w-2/3" />
        <div className="h-4 bg-zinc-700 rounded w-4/5" />
        <div className="h-4 bg-zinc-700 rounded w-3/5" />
        <div className="h-4 bg-zinc-700 rounded w-1/2" />
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { GET_LAUNCHES_PAST } from '@/graphql/queries/getLaunches';
import client from '@/graphql/client';
import type { Launch } from '@/types/launch';

interface GetLaunchesData {
  launchesPast: Launch[];
}

export default function useInfiniteLaunches(limit = 10) {
  const [offset, setOffset] = useState(0);
  const [allLaunches, setAllLaunches] = useState<Launch[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { data, loading, error, fetchMore, networkStatus } = useQuery<GetLaunchesData>(
    GET_LAUNCHES_PAST,
    {
      client,
      variables: { limit, offset: 0 },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
      onCompleted: (initialData) => {
        setAllLaunches(initialData.launchesPast);
      },
    }
  );

  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isFetchingMore && hasMore) {
          const nextOffset = allLaunches.length;

          const { data: moreData } = await fetchMore({
            variables: { limit, offset: nextOffset },
          });

          const newLaunches = moreData?.launchesPast || [];

          if (newLaunches.length < limit) {
            setHasMore(false);
          }

          const existingIds = new Set(allLaunches.map((l) => l.id));
          const filteredNew = newLaunches.filter((l) => !existingIds.has(l.id));
          const merged = [...allLaunches, ...filteredNew,];
          setAllLaunches(merged);
          setOffset(nextOffset);

          if (filteredNew.length === 0) {
            console.log("No new releases found. Closing scroll.");
            setHasMore(false);
            return;
          }
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchMore, isFetchingMore, allLaunches, hasMore, limit, offset, data]);

  return {
    launches: allLaunches,
    loading,
    error,
    hasMore,
    loaderRef,
  };
}

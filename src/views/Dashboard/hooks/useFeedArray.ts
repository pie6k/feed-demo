import { useCallback, useRef, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
interface FeedArrayConfig {
  showCount: number;
}

interface FeedStats {
  totalEvents: number;
  frequencyPerMinute: number;
}

const defaultStats: FeedStats = {
  frequencyPerMinute: 0,
  totalEvents: 0,
};

function calculatePerMinuteFrequency(
  itemsCount: number,
  startDate: Date,
  endDate: Date,
) {
  const passedMs = endDate.getTime() - startDate.getTime();
  const passedMinutes = passedMs / 1000 / 60;

  if (passedMinutes === 0) {
    return 0;
  }

  return itemsCount / passedMinutes;
}

export function useFeedArray<T>({ showCount }: FeedArrayConfig) {
  const startTimeRef = useRef(new Date());
  const totalCountRef = useRef(0);
  const [feed, setFeed] = useState<T[]>([]);

  const [stats, setStats] = useState<FeedStats>(defaultStats);

  const addItem = useCallback(
    (item: T) => {
      totalCountRef.current++;

      const frequencyPerMinute = calculatePerMinuteFrequency(
        totalCountRef.current,
        startTimeRef.current,
        new Date(),
      );

      unstable_batchedUpdates(() => {
        setStats({ totalEvents: totalCountRef.current, frequencyPerMinute });
        setFeed(currentItems => {
          return [item, ...currentItems].slice(0, showCount);
        });
      });
    },
    [showCount],
  );

  return [{ feed, stats }, addItem] as const;
}

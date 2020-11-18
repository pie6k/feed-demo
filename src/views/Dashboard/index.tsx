import { useEffect } from 'react';
import styled from 'styled-components';
import { FeedEvent, feedSocketClient } from '~app/domains/eventsFeed';
import { DashboardFeed } from './Feed';
import { useFeedArray } from './hooks';
import { DashboardStats } from './Stats';

export function DashboardView() {
  const [{ feed: feedEvents, stats }, addEvent] = useFeedArray<FeedEvent>({
    showCount: 10,
  });
  useEffect(() => {
    return feedSocketClient.subscribe(feedEvent => {
      addEvent(feedEvent);
    });
  }, []);

  return (
    <UIHolder>
      <UIFeedHolder>
        <UIFeedHeader>Feed</UIFeedHeader>
        <DashboardFeed events={feedEvents} />
      </UIFeedHolder>
      <UIStatsHolder>
        <UIFeedHeader>Statistics</UIFeedHeader>
        <DashboardStats
          totalCount={stats.totalEvents}
          itemsPerMinute={stats.frequencyPerMinute}
          frequencyCap={350}
        />
      </UIStatsHolder>
    </UIHolder>
  );
}

const UIHolder = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  grid-gap: 40px;
  padding: 60px 20px;
`;

const UIFeedHolder = styled.div`
  max-width: 400px;
  flex-grow: 1;
`;

const UIStatsHolder = styled.div`
  max-width: 800px;
`;

const UIFeedHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

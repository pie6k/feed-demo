import styled from 'styled-components';
import { DashboardFeed } from './Feed';
import { DashboardStats } from './Stats';

export function DashboardView() {
  return (
    <UIHolder>
      <UIFeedHolder>
        <DashboardFeed />
      </UIFeedHolder>
      <UIStatsHolder>
        <DashboardStats />
      </UIStatsHolder>
    </UIHolder>
  );
}

const UIHolder = styled.div``;

const UIFeedHolder = styled.div``;

const UIStatsHolder = styled.div``;

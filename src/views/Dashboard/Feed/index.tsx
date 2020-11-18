import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FeedEvent } from '~app/domains/eventsFeed';
import { FeedEventCard } from './Event';

interface Props {
  events: FeedEvent[];
}

export function DashboardFeed({ events }: Props) {
  return (
    <UIHolder>
      {events.map(event => {
        return (
          <UIEventHolder
            key={event.id}
            layoutId={event.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <FeedEventCard event={event} />
          </UIEventHolder>
        );
      })}
    </UIHolder>
  );
}

const UIHolder = styled.div``;

const UIEventHolder = styled(motion.div)`
  margin-bottom: 20px;
  will-change: opacity, transform;
`;

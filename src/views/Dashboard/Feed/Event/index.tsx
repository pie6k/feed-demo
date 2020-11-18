import { memo } from 'react';
import styled from 'styled-components';
import { FeedEvent } from '~app/domains/eventsFeed';
import { FigureCard } from '~app/ui/cards/FigureCard';

interface Props {
  event: FeedEvent;
}

export const FeedEventCard = memo(({ event }: Props) => {
  const formattedDate = formatDate(event.timestamp);
  return (
    <UIHolder>
      <UIAvatar src={event.user.image_url} />
      <UIMain>
        <UIHead>
          {event.user.name} <UIDate>{formattedDate}</UIDate>
        </UIHead>
        <UIContent>{event.message}</UIContent>
      </UIMain>
    </UIHolder>
  );
});

const UIHolder = styled(FigureCard)`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const UIAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #eee;
  margin-right: 20px;
`;

const UIMain = styled.div``;

const UIContent = styled.div``;

const UIHead = styled.div`
  font-weight: bold;
  margin-bottom: 0.33rem;
`;

const UIDate = styled.span`
  font-weight: normal;
  opacity: 0.4;
`;

function formatDate(timeStamp: number) {
  const date = new Date(timeStamp);

  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}

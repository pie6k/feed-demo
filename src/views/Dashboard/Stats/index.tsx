import styled from 'styled-components';
import { FigureCard } from '~app/ui/cards/FigureCard';
import { PercentageBar } from './PercentageBar';

interface Props {
  totalCount: number;
  itemsPerMinute: number;
  frequencyCap: number;
}

export function DashboardStats({
  totalCount,
  itemsPerMinute,
  frequencyCap,
}: Props) {
  const warningPercentage = itemsPerMinute / frequencyCap;
  const formattedFrequency = Math.floor(itemsPerMinute);
  return (
    <UIHolder>
      <UIBarHolder title={'Events frequency'}>
        <PercentageBar
          progress={warningPercentage}
          progressLabel={`${formattedFrequency}/min`}
          edgesLabels={[`0/min`, '350/min']}
        />
        <UITotalInfo>Total events: {totalCount}</UITotalInfo>
      </UIBarHolder>
    </UIHolder>
  );
}

const UIHolder = styled.div``;

const UIBarHolder = styled(FigureCard)``;

const UITotalInfo = styled.div`
  margin-top: 3rem;
  font-size: 14px;
`;

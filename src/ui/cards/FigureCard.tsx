import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function FigureCard({ title, children, className }: Props) {
  return (
    <UICard className={className}>
      {title && <UITitleHolder>{title}</UITitleHolder>}
      {children}
    </UICard>
  );
}

const UICard = styled.div`
  padding: 20px;
  box-shadow: 0 10px 40px #e3e6ec;
  border-radius: 10px;
`;

const UITitleHolder = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
`;

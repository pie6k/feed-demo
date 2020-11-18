import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
  progress: number;
  progressLabel: string;
  edgesLabels?: [start: string, end: string];
}

export function PercentageBar({ progress, edgesLabels }: Props) {
  return (
    <UIHolder>
      <UIBar>
        <ProgressCover
          style={{
            scaleX: 1 - progress,
          }}
        />
      </UIBar>
      {edgesLabels && (
        <UILimitsInfo>
          <UILimitLabel>{edgesLabels[0]}</UILimitLabel>
          <UILimitLabel>{edgesLabels[1]}</UILimitLabel>
        </UILimitsInfo>
      )}
    </UIHolder>
  );
}

const UIHolder = styled.div``;

const UIBar = styled.div`
  height: 20px;
  background: linear-gradient(0.25turn, #7be4e7, #ff6c8a);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;

/**
 * Instead of animating width in %, let's use a 'cover' div and animate it with transform.
 * It will allow us to avoid re-layouts and also will provide more smooth animations.
 */
const ProgressCover = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  transform-origin: right;
  will-change: transform;
  transition: 0.2s transform;
`;

const UILimitsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.7; ;
`;

const UILimitLabel = styled.div``;

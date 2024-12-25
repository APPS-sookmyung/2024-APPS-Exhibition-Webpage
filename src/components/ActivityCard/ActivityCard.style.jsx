import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const ActivityCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 470px;
  height: 100%;
  aspect-ratio: 47/30;
  flex-shrink: 0;
  border-radius: 20px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ActivityBackBlur = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 30px;

  transition:
    box-shadow 0.5s ease,
    background 0.5s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 0 1px #fff;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 20px;
  }
`;

export const ActivityNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ActivityName = styled.h2`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 13px 43px;
  gap: 10px;
  border-radius: 30px;
  background: var(--orange, #ff5400);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
    padding: 10px 36px;
  }
`;

export const ActivityIntro = styled.p`
  margin: 0;
  color: #fff;
  font-size: 16px;
  word-break: keep-all;
  line-height: 1.2;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }
`;

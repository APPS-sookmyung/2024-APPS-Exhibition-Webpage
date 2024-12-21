import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const ActivityCard = styled.div`
  width: 100%;
  aspect-ratio: 47/30;
  flex-shrink: 0;
  border-radius: 20px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ActivityTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  padding: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 16px;
  }
`;

export const ActivityNameWrapper = styled.div``;

export const ActivityName = styled.h2`
  margin: 0;
  display: inline-flex;
  padding: 13px 43px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--orange, #ff5400);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
    padding: 10px 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
    padding: 8px 24px;
  }
`;

export const ActivityIntroWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const ActivityIntro = styled.p`
  color: #fff;
  font-size: 16px;
  letter-spacing: -0.7px;
  margin: 0;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }
`;

export const ActivityBackBlur = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  transition:
    box-shadow 0.5s ease,
    background 0.5s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 0 1px #fff;
  }
`;

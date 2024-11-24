import styled, { keyframes } from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

const moveLeft = keyframes`
  0% {
    transform: translateX(100%); 
  }
  50% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-100%); 
  }
`;

export const MemberFeedbackCardList = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 30px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ index }) => (index % 2 === 0 ? '' : '100px')};
  gap: 10px;
  animation: ${moveLeft} 5s linear infinite;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 6px;
  }
`;

export const BalloonCard = styled.div`
  display: flex;
  position: relative;
  border-radius: 15px;
  background: #fff;
  padding: 20px;
  min-width: 220px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    min-width: 180px;
    padding: 14px;
  }
`;

export const BalloonCardContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const BalloonCardContent = styled.p`
  margin: 0;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.9px;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const BalloonCardReviewMember = styled.span`
  color: #808080;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

export const BalloonTail = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50px;
  width: 30px;
  height: 20px;
  background: #fff;
  clip-path: polygon(50% 100%, 0% 0%, 100% 0%);

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 24px;
  }
`;

export const Character = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 14px;
  }

  img {
    height: 120px;

    @media (max-width: ${BREAKPOINTS[0]}px) {
      height: 100px;
    }
  }
`;

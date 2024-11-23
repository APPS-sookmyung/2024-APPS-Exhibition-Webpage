import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const AboutAppsCoreValueCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding-bottom: 13px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 60px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 40px;
  }
`;

export const Title = styled.span`
  padding-bottom: 14px;
  color: ${({ color }) => color};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ color }) => color};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  white-space: pre-line;
`;

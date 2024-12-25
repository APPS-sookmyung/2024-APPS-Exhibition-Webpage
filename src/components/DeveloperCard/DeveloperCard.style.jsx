import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const DeveloperCard = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 140px;
  height: 165px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${(props) =>
    props.part === 'frontend'
      ? '#ff88fb'
      : props.part === 'backend'
        ? '#5BFB67'
        : '#3F69FF'};

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /* &:hover {
    background-color: #ff5400;
  } */

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 98px;
    height: 126px;
  }
`;

export const DeveloperImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background-color: #373737;
  margin-top: 20px;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 70px;
    height: 70px;
    margin-top: 14px;
  }
`;

export const DeveloperName = styled.h2`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.6px;
  margin: 11px 0 0 0;
  color: ${(props) => (props.part === 'backend' ? '#000' : '#fff')};

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin: 9px 0 2px 0;
  }
`;

export const DeveloperPosition = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin: 2px 0 0 0;
  color: ${(props) =>
    props.part === 'frontend'
      ? '#FDDEFF'
      : props.part === 'backend'
        ? '#008309'
        : '#B8C7FF'};

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 0px;
  }
`;

export const LeaderBadge = styled.p`
  border-radius: 20px;
  background: var(--orange, #ff5400);
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.6px;
  position: absolute;
  padding: 6px 8px;
  white-space: nowrap;
  top: -14px;
  left: 60px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 9px;
    top: -10px;
    left: 32px;
  }
`;

import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const MemberCard = styled.div`
  position: relative;
  aspect-ratio: 220 / 254;
  border-radius: 18px;
  background-color: ${(props) =>
    props.backgroundColor ||
    (props.index % 8 === 0 ||
    props.index % 8 === 3 ||
    props.index % 8 === 5 ||
    props.index % 8 === 6
      ? '#2051FF'
      : '#3F69FF')};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 220px;
  aspect-ratio: 220/254;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ff5400;
    h3 {
      color: #ffe0b8;
    }
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 10px;
    padding: 12px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const MemberImage = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 100%;
  background-color: #373737;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100px;
    height: 100px;
  }
`;

export const MemberInfoWrapper = styled.div`
  text-align: center;
  gap: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 4px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 2px;
  }
`;

export const NameAndPositionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MemberName = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.9px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberPositionInfo = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 10px;
  }
`;

export const MemberInfo = styled.h3`
  color: #b8c7ff;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-align: center;
  flex-shrink: 0;
  overflow: visible;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 10px;
  }
`;

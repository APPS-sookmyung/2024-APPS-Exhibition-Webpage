import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const ProjectCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

export const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #565656;
  border-radius: 30px;
  background: #323232;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => (props.isActive ? '#ff88fb' : '')};
  margin: 5px;
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff88fb;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 6px 2px;
    font-size: 14px;
  }
`;

export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 14px 0;
  }
`;

export const ProjectCardImage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 20px;
  background: #f1f1f1;
  padding: 16px 18px;
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  gap: 8px;
  flex: 1;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 16px 16px 12px;
  }
`;

export const ProjectTitleBadgeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProjectTitle = styled.strong`
  color: #818181;
  font-family: 'Dolce Vita Heavy';
  font-size: 24px;
  font-weight: 700;
  transition: color 0.3s ease;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 18px;
  }
`;

export const ProjectSubTitle = styled.span`
  color: #818181;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const ProjectBadgeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const ProjectBadge = styled.div`
  left: 0;
  border-radius: 20px;
  background: #818181;
  padding: 5px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    color 0.3s ease,
    border 0.3s ease;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 4px 10px;
    font-size: 13px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:nth-child(odd) {
    justify-self: start;
  }

  &:nth-child(even) {
    justify-self: end;
  }

  &:hover {
    cursor: pointer;

    ${ProjectCardContent} {
      background-color: #ff88fb;
    }

    ${ProjectTitle}, ${ProjectSubTitle} {
      color: #fff;
    }

    ${ProjectBadge} {
      background-color: #fff;
      color: #ff88fb;
    }
  }
`;

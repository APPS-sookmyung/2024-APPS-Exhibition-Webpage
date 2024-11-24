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
  padding: 12px;
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

  @media (max-width: ${BREAKPOINTS[2]}px) {
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 8px;
    font-size: 16px;
  }
`;

export const ProjectCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(402px, 1fr));
  gap: 24px 0;
  justify-items: center;
`;

export const ProjectCardImage = styled.div`
  width: 310px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 20px;

  background-color: orange;
`;

export const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 140px;
  height: 260px;
  border-radius: 20px;
  background: #f1f1f1;
  padding: 24px 20px;
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.strong`
  color: #818181;
  font-family: 'Dolce Vita Heavy';
  font-size: 24px;
  font-weight: 700;
  transition: color 0.3s ease;
`;

export const ProjectSubTitle = styled.span`
  color: #818181;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
`;

export const ProjectBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ProjectBadge = styled.div`
  left: 0;
  border-radius: 20px;
  background: #818181;
  padding: 5px 14px 5px 12px;
  color: #fff;
  font-size: 14px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    color 0.3s ease,
    border 0.3s ease;
`;

export const ProjectCard = styled.div`
  display: flex;

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

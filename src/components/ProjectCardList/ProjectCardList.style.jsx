import styled from 'styled-components';

export const ProjectCardList = styled.div``;

export const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #565656;
  border-radius: 30px;
  background: #323232;
`;

export const Tab = styled.div`
  background: ${(props) => (props.active ? '#ff88fb' : '#333')};
  margin: 5px;
  border-radius: 30px;
  padding: 12px 78px;
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
`;

export const ProjectCardContainer = styled.div``;

export const ProjectCard = styled.div``;

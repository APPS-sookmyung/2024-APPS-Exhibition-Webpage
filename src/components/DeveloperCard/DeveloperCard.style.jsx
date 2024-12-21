import styled from 'styled-components';

export const DeveloperCard = styled.div`
  position: relative;
  width: 140px;
  height: 165px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${(props) =>
    props.part === 'frontend' ? '#ff88fb' : '#5BFB67'};

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /* &:hover {
    background-color: #ff5400;
  } */
`;

export const DeveloperImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background-color: #373737;
  margin-top: 20px;
`;

export const DeveloperName = styled.h2`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.6px;
  margin: 11px 0 0 0;
  color: ${(props) => (props.part === 'frontend' ? '#fff' : '#000')};
`;

export const DeveloperPosition = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin: 2px 0 0 0;
  color: ${(props) => (props.part === 'frontend' ? '#FDDEFF' : '#008309')};
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
  top: -24px;
  left: 60px;
`;

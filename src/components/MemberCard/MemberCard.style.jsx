import styled from 'styled-components';

export const MemberCard = styled.div`
  position: relative;
  width: 220px;
  height: 254px;
  flex-shrink: 0;
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
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ff5400;
  }
`;

export const MemberImage = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 100%;
  background-color: #373737;
  margin-top: 32px;
`;

export const MemberInfoWrapper = styled.div`
  text-align: center;
  margin-top: 148px;
`;

export const NameAndPositionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
`;

export const MemberName = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.9px;
`;

export const MemberInfo = styled.h3`
  color: #b8c7ff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  margin-top: 6px;
`;

export const MemberPositionInfo = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
`;

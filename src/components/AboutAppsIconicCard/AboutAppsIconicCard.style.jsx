import styled from 'styled-components';

export const AboutAppsIconicCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding-bottom: 13px;
`;

export const Title = styled.span`
  padding-bottom: 14px;
  color: ${({ color }) => color};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ color }) => color};
  text-align: center;
  font-size: 14px;
  letter-spacing: -0.7px;
  white-space: pre-line;
`;

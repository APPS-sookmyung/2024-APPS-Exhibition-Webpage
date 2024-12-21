import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const ReviewContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const ReviewBox = styled.div`
  box-sizing: border-box;
  gap: 8px;
  width: 100%;
  border: ${(props) =>
    props.part === 'frontend' ? '1px solid #ff88fb' : '1px solid #5BFB67'};
  border-radius: 12px;
  padding: 27px 25px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.8px;

  p {
    margin: 0;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
    padding: 20px 18px;

    div {
      float: left;
      margin-right: 13px;
      margin-bottom: 6px;
    }
  }
`;

import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const FallingBlocksLine = styled.div`
  position: relative;
  top: ${(props) => props.ypos}px;
  width: 961px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 724px;
    height: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 470px;
    height: 25px;
  }
`;

export const SquaresFragment = styled.div``;

export const StyledSquares = styled.div`
  display: flex;
  height: 50px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 25px;
  }
`;

export const StyledSquare = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${(props) => props.color || ''};

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 25px;
    height: 25px;
    border-radius: 6px;
  }
`;

export const StyledSquare2 = styled.div`
  width: 50px;
  height: 34px;
  border-radius: 12px;
  background: #2051ff;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 40px;
    height: 27px;
    border-radius: 10px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 25px;
    height: 17px;
    border-radius: 6px;
  }
`;

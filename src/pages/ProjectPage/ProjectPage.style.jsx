import styled from 'styled-components';
import x_pink from '../../images/icons/x_pink.svg';
import background from '../../images/background/projects_background.svg';
import share from '../../images/icons/share.svg';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 1300px; */
  padding: 62px 70px 0 70px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 50px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 24px;
  }
`;

export const CloseBtn = styled.img.attrs({
  src: x_pink,
  alt: 'Close',
})`
  align-self: flex-end;
  width: 36px;
  height: 36px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 65px;
  margin: 0;
  margin-bottom: 4px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 45px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
  margin: 0 0 22px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 24px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const TopBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ShareBtn = styled.div`
  background-color: #ff88fb;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 43px;
  margin: 0 10px 0 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 4px 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 2px 16px;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -1px;
    margin: 0;
    white-space: nowrap;

    @media (max-width: ${BREAKPOINTS[1]}px) {
      font-size: 18px;
    }
    @media (max-width: ${BREAKPOINTS[0]}px) {
      font-size: 14px;
    }
  }
`;

export const ShareIcon = styled.img.attrs({
  src: share,
  alt: 'Share',
})`
  width: 20px;
  height: 24px;
  margin-right: 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 14px;
    height: 28px;
  }
`;

export const LinkBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 10px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const LinkBtn = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 30px;
    height: 30px;
  }
`;

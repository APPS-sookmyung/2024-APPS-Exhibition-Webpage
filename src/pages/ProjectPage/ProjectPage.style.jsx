import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  background-image: url('/images/background/projects_background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  padding: 62px 70px 0 70px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 50px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 24px;
  }
`;

export const CloseBtn = styled.img`
  align-self: flex-end;
  width: 36px;
  height: 36px;
  padding: 10px;
  margin: -10px -10px -10px 0;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  row-gap: 10px;
  flex-wrap: wrap;
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
`;

export const ShareIcon = styled.img`
  width: 20px;
  height: 24px;
  margin-right: 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 14px;
    height: 28px;
  }
`;

export const ShareText = styled.p`
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

export const YoutubeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
`;

export const Youtube = styled.div`
  width: 100%;
  margin-top: 64px;
  padding-top: 56.25%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Line = styled.img`
  width: 100%;
  margin: 40px 0;
`;

export const Center = styled.div``;

export const Content = styled.div`
  color: #fff;
`;

export const ServiceIntro = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1px;
  padding-bottom: 12px;
  margin: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const ServiceDetail = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.8px;
  padding-bottom: 40px;
  margin: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const StackList = styled.ul`
  display: flex;
  justify-content: baseline;
  padding-left: 0;
  margin: 0;

  &:not(:first-child) {
    gap: 20px;

    @media (max-width: ${BREAKPOINTS[1]}px) {
      gap: 14px;
    }
    @media (max-width: ${BREAKPOINTS[0]}px) {
      gap: 8px;
    }
  }
`;

export const StackItem = styled.li`
  list-style: none;
  display: inline-flex;
  padding: 5px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #fff;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 4px 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 3px 10px;
  }
`;

export const StackIcon = styled.img`
  max-height: 24px;
  min-height: 21px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    max-height: 22px;
    min-height: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    max-height: 18px;
    min-height: 14px;
  }
`;

export const StackText = styled.p`
  color: var(--pink, #ff88fb);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.8px;
  margin: 0;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 12px;
  }
`;

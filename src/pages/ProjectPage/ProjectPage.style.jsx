import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const Root = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url('/images/background/projects_background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
  padding-bottom: 120px;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  padding: 50px 70px 0 70px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 50px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 24px;
  }
`;

export const CloseBtn = styled.div`
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 56px;
  height: 56px;
  padding: 10px;
  margin: -10px -10px -10px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 51px;
    height: 51px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 46px;
    height: 46px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-family: 'Dolce Vita Heavy';
  font-size: 65px;
  margin: 0;
  margin-bottom: 4px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 45px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

export const Summary = styled.p`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1.6px;
  line-height: 1.2;
  margin: 0 0 22px 0;
  color: #cccccc;
  word-break: keep-all;

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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 16px 0;
  background: #fff;
  color: #000;
  padding: 13px 43px;
  height: 50px;
  cursor: pointer;
  border-radius: 32px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: var(--pink, #ff88fb);
    color: #fff;
  }

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
  transition: filter 0.3s ease;
  filter: brightness(0) invert(0);

  ${ShareBtn}:hover & {
    filter: brightness(0) invert(1); // changes the icon color to black on hover
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 14px;
    height: 28px;
  }
`;

export const ShareText = styled.p`
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

  a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    font-size: 12px;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 10px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const LinkBtn = styled.div`
  p {
    margin: 4px 0 0 0;
  }
`;

export const LinkIcon = styled.img`
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

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-top: 46px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 40px;
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

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  padding-bottom: 12px;
  margin: 0;
  color: #fff;
  word-break: keep-all;

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
  color: #cccccc;
  letter-spacing: -0.8px;
  line-height: 140%;
  padding-bottom: 40px;
  margin: 0;
  word-break: keep-all;

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
  margin: 0;
  padding: 10px 0 40px 0;
  flex-wrap: wrap;

  &:not(:first-child) {
    gap: 10px;

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
  background: #e5e5e5;

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

export const Bottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

export const DeveloperCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  padding-bottom: 40px;
  padding-top: 10px;
  flex-wrap: wrap;
`;

export const DesignerCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  padding-bottom: 40px;
  padding-top: 10px;
  flex-wrap: wrap;
`;

export const ReviewContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-bottom: 40px;
`;

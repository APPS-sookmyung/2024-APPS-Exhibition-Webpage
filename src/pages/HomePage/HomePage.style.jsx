import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

const smoothGradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const HomePageTopBackground = styled.div`
  background-image: url('/images/background/home-background-top.svg');
  background-repeat: no-repeat;
  background-position: center -30px;
  background-size: 1100px auto;
  overflow: hidden;
  height: 100%;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    background-position: center 0;
    background-size: 900px auto;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    background-position: center 20px;
    background-size: 760px auto;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    background-position: center 60px;
    background-size: 460px auto;
  }
`;

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  gap: 113px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 80px;
  }
`;

export const HomeMainWrapper = styled.section`
  position: relative;
  padding: 220px 0 360px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    padding: 200px 0 300px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 160px 0 300px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 160px 0 240px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 70px;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding-right: 40px;
    gap: 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding-right: 30px;
    gap: 8px;
  }
`;

export const ExhibitionTitleWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 17px;
  width: 100%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const ImageWrapper1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    height: 100%;
    width: auto;
    max-width: 97px;
    max-height: 67px;

    @media (max-width: ${BREAKPOINTS[2]}px) {
      max-height: 60px;
    }
    @media (max-width: ${BREAKPOINTS[1]}px) {
      max-height: 50px;
    }
    @media (max-width: ${BREAKPOINTS[0]}px) {
      max-height: 30px;
    }
  }
`;

export const ImageWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    height: 100%;
    width: auto;
    max-width: 67px;
    max-height: 67px;

    @media (max-width: ${BREAKPOINTS[2]}px) {
      max-height: 60px;
    }
    @media (max-width: ${BREAKPOINTS[1]}px) {
      max-height: 50px;
    }
    @media (max-width: ${BREAKPOINTS[0]}px) {
      max-height: 30px;
    }
  }
`;

export const ExhibitionTitleText = styled.h3`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    font-size: 52px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 28px;
  }
`;

export const APPSTitleWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 17px;
  width: 100%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 8px;
  }
`;

export const APPSTitleText = styled.h1`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 100px;
  font-weight: 700;
  letter-spacing: -5px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    font-size: 80px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 60px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 44px;
  }
`;

export const APPSSubTitle = styled.span`
  color: #c7c7c7;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1.2px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SectionTitleImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 14px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 12px;
  }

  img {
    @media (max-width: ${BREAKPOINTS[1]}px) {
      height: 60px;
    }
    @media (max-width: ${BREAKPOINTS[0]}px) {
      height: 40px;
    }
  }
`;

export const SectionTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    font-size: 52px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 28px;
  }
`;

export const SmallSectionTitle = styled(SectionTitle)`
  font-size: 50px;

  @media (max-width: ${BREAKPOINTS[2]}px) {
    font-size: 40px;
  }
  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const SectionSubTitle = styled.h4`
  margin: 0;
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 70px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 0 50px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 0 20px;
  }
`;

export const SectionContent = styled.div`
  display: flex;

  &:first-child {
    justify-content: flex-start;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        to right,
        #ff88fb,
        #5bfb67 38%,
        #ff5400 62.7%,
        #3f69ff 88.6%
      );
      background-size: 200% 100%;
      animation: ${smoothGradientAnimation} 3s linear infinite;
    }
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const SectionContentInnerBox = styled.div`
  display: flex;
  padding: 30px;
  gap: 60px;
  position: relative;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px;
    gap: 40px;
  }
`;

export const SectionContentInnerBox1 = styled(SectionContentInnerBox)`
  &:first-child::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #ff88fb, #5bfb67);
    background-size: 200% 100%;
    animation: ${smoothGradientAnimation} 3s linear infinite;
  }
`;

export const SectionContentInnerBox2 = styled(SectionContentInnerBox)`
  &:last-child::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #ff5400, #3f69ff);
    background-size: 200% 100%;
    animation: ${smoothGradientAnimation} 3s linear infinite;
  }
`;

export const SocialLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 60px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 40px;
  }
`;

export const SocialLinksTitle = styled.h5`
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 28px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const SocialLinksContent = styled.div`
  display: flex;
  gap: 112px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 60px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 30px;
  }
`;

export const ProjectList = styled.section`
  padding: 0 70px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 0 50px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 0 20px;
  }
`;

export const HomePageBottomBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/background/home-background-bottom.svg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  overflow: hidden;
  height: 100%;
  min-height: 700px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    min-height: 600px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    min-height: 400px;
  }
`;

export const ShareLinks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 80px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 60px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 40px;
  }
`;

export const ShareLinksTitle = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 28px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const ShareLinksContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 50px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 30px;
  }
`;

export const LinkButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  background: #fff;
  padding: 13px 0;
  width: 200px;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.9px;
  cursor: pointer;
  gap: 8px;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: var(--pink, #ff88fb);
    color: #fff;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 170px;
    font-size: 14px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 150px;
    padding: 10px 0;
    font-size: 14px;
  }
`;

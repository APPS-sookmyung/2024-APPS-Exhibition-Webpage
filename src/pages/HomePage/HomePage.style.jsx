import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto 200px;
  padding-top: 60px;
  gap: 113px;
`;

export const HomeMainWrapper = styled.section`
  position: relative;
  background-image: url('/images/background/home-background1.svg');
  background-repeat: no-repeat;
  background-position: -57px -93px;
  padding: 200px 0 360px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 70px;
`;

export const ExhibitionTitle = styled.h3`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;
`;

export const APPSTitle = styled.h1`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 100px;
  font-weight: 700;
  letter-spacing: -5px;
`;

export const APPSSubTitle = styled.span`
  color: #c7c7c7;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1.2px;
`;

// About
export const AboutAPPSWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SectionTitleImageWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;
`;

export const SectionSubTitle = styled.h4`
  margin: 0;
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
`;

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 70px;
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
  padding: 30px 31px;
  gap: 60px;
  position: relative;
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

export const MemberFeedback = styled.section``;

export const SocialLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

export const SocialLinksTitle = styled.h5`
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  /* letter-spacing: -1.6px; */
`;

export const SocialLinksContent = styled.div`
  display: flex;
  gap: 112px;
`;

export const ProjectList = styled.section``;

export const ShareLinks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 80px;
`;

export const ShareLinksTitle = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  /* letter-spacing: -1.6px; */
`;

export const ShareLinksContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;

export const LinkButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: none;
  background: #fff;
  padding: 13px 0;
  width: 180px;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.9px;
  cursor: pointer;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: var(--pink, #ff88fb);
    color: #fff;
  }
`;

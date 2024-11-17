import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
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
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.2px;
`;

export const AboutAPPS = styled.section``;

export const MemberFeedback = styled.section``;

export const SocialLinks = styled.section``;

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

export const LinkBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #fff;
  padding: 13px 43px;
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

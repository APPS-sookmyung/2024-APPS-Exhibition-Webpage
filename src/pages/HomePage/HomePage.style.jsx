import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 200px;
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

  &:first-child::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #ff88fb, #5bfb67);
  }

  &:last-child::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #ff5400, #3f69ff);
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

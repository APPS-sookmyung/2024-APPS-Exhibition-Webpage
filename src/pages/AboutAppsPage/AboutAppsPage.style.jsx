import styled from 'styled-components';
import background from '../../images/background/about_background.svg';
import titleIcon from '../../images/icons/about_APPS.svg';
import activeback from '../../images//activities/about_active_sample.png';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: 100% 785px;
  background-repeat: no-repeat;
  background-color: #000;
`;

export const TopToIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Top = styled.div`
  width: 100%;
  min-height: 234px;
  background-color: #3f69ff;
  justify-content: center;
  display: flex;
`;

export const PageTitleWrapper = styled.div`
  margin-top: 66px;
  width: 330px;
  height: 98.4px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;
export const PageTitle = styled.h1`
  color: #fff;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;
  margin: -6px 8.8px;
`;
export const IconTitle = styled.div`
  width: 136px;
  height: 94px;
  background-image: url(${titleIcon});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 4.6px;
  background-color: #3f69ff;
`;

export const IntroAPPSTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.2px;
  margin: 45px 0 31px 0;
`;

export const IntroAPPSContent = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
  margin: 0 0 53px 0;
`;

export const IntroToActLine = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(90deg, #ff5400, #3f69ff);
  background-size: 962px 2px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ActivitesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ActivitesTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 40px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -2px;
  margin: 113px 0 16px 0;
`;

export const ActivitesContent = styled.div`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0 0 80px 0;
`;

export const Activites = styled.div`
  display: flex;
  width: 100%;
  height: 1200px;
  justify-content: center;
`;

export const ActiveCard = styled.div`
  width: 470px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 20px;
   background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 27.33%
    ),
    url(${activeback}) lightgray 50% / cover no-repeat;
  background-size: cover;
}
`;

export const ActiveTextWrapper = styled.div`
  z-index: 2;
  position: absolute;
  width: 470px;
  justify-content: center;
`;

export const ActiveName = styled.h2`
  margin: 30px 0 133px 30px;
  display: inline-flex;
  padding: 13px 43px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--orange, #ff5400);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const ActiveIntroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 36px 0;
`;

export const ActiveIntro = styled.p`
  color: #fff;
  width: 410px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.7px;
  margin: 0;
  white-space: pre-line;
`;

export const ActiveBackBlur = styled.div`
  position: absolute;
  width: 470px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TeamIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 140px;
`;

export const TeamIntroTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;
  margin: 0;
`;

export const TeamIntroContent = styled.p`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0;
`;

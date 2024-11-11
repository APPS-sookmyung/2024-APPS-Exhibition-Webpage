import styled from 'styled-components';
import background from '../../images/background/about_background.svg';
import titleIcon from '../../images/icons/about_APPS.svg';

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

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ActivitiesTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 113px;
  gap: 16px;
`;

export const ActivitiesTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 40px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -2px;
`;

export const ActivitiesDescription = styled.div`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0 0 80px 0;
`;

export const ActivitiesCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  gap: 28px 20px;
  margin: auto;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CalendarTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 113px;
  gap: 16px;
`;

export const CalendarTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;
`;

export const CalendarDescription = styled.div`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0 0 108px 0;
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

export const MemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px 0;
  max-width: 880px;
  margin: 0 auto;
  margin-top: 32px;
  & > div:nth-child(even) {
    margin-top: 32px;
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`;

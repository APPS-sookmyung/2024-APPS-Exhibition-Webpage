import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto 200px;
  padding-top: 60px;
  background-image: url('./images/background/about_background.svg');
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
  height: 250px;
  justify-content: center;
  display: flex;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 200px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 125px;
  }
`;

export const PageTitleWrapper = styled.div`
  margin-top: 66px;
  width: 330px;
  height: 98px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 3;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin-top: 53px;
    height: 78px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 33px;
    height: 49px;
  }
`;

export const PageTitle = styled.h1`
  color: #fff;
  font-family: 'Dolce Vita Heavy';
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.2px;
  margin: 0px 9px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 45px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 32px;
  }
`;

export const PageSubTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  position: absolute;
  padding: 75px 0 0 100px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 14px;
    font-weight: 400;
    padding: 60px 0 0 72px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 10px;
    font-weight: 300;
    padding: 38px 0 0 56px;
  }
`;

export const IconTitle = styled.div`
  width: 136px;
  height: 94px;
  background-image: url('./images/icons/about_APPS.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: -5px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 108px;
    height: 75px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 68px;
    height: 47px;
  }
`;

export const SquareContainer = styled.div`
  z-index: 2;
  width: 100%;
  min-height: 234px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const TopBackgroundColor = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 234px;
  background-color: #3f69ff;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 187px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 117px;
  }
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

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
    margin: 36px 0 25px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 18px;
    margin: 27px 0 15px 0;
  }
`;

export const IntroAPPSContent = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
  margin: 0 0 53px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
    margin: 0 0 42px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
    margin: 0 0 26px 0;
  }
`;

export const IntroToActLineWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 1px;
  }
`;

export const IntroToActLine = styled.div`
  display: flex;
  width: 100%;
  max-width: 962px;
  background-image: linear-gradient(90deg, #ff5400, #3f69ff);
  background-size: 90% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
`;

export const ActivitiesTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 113px;
`;

export const ActivitiesTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 40px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -2px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 28px;
  }
`;

export const ActivitiesDescription = styled.div`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0 0 80px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
    margin: 0 0 64px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
    margin: 0 0 40px 0;
  }
`;

export const ActivitiesCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  gap: 28px 20px;
  margin: auto;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 22px 16px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  gap: 16px;
  margin-top: 113px;
`;

export const CalendarTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1.6px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 28px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const CalendarDescription = styled.div`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  padding-bottom: 40px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
    padding-bottom: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
    padding-bottom: 0px;
  }
`;

export const CalendarCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  gap: 0;
  margin: auto;
  padding: 30px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 30px;
  }
`;

export const RegularCalendarCard = styled.div`
  width: 330px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 18px;
  background: var(--blue, #3f69ff);
  margin: 138px 0 0 110px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 297px;
    margin: 112px 0 0 103px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    min-height: 130px;
    margin: 72px 0 0 0;
  }
`;

export const RegularCalendarWrapper = styled.div`
  display: flex;
  padding: 20px 0 0 26px;
  align-items: center;
  gap: 12px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 18px 0 0 23px;
    gap: 10px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 15px 0 0 20px;
    gap: 6px;
  }
`;

export const RegularCalendarDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  background-image: url('/images/icons/about_calendar_white_dot.svg');
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 9px;
    height: 9px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 5px;
    height: 5px;
  }
`;

export const RegularCalendarName = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  margin: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const RegularScheduleWrapper = styled.div`
  padding: 14px 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 9px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 12px 22px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px 14px 17px;
    gap: 7px;
  }
`;

export const RegularSchedule = styled.div`
  display: inline-flex;
  width: fit-content;
  height: 17px;
  padding: 12px 15px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 18px;
  background: #fff;
  color: var(--blue, #3f69ff);
  font-size: 14px;
  font-weight: 600;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: auto;
    font-size: 10px;
    padding: 5px 10px;
  }
`;

export const CalendarCardSpace = styled.div`
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 160px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 100px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 60px;
  }
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

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 26px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 22px;
  }
`;

export const TeamIntroContent = styled.p`
  color: #c7c7c7;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const MemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 220px));
  row-gap: 40px;
  column-gap: 0;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  & > div:nth-child(even) {
    margin-top: 20px;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    grid-template-columns: repeat(3, minmax(150px, 190px));
    row-gap: 36px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(2, minmax(120px, 160px));
    row-gap: 24px;
  }
`;

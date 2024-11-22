import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  margin: 0 auto;
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
  min-height: 234px;
  background-color: #3f69ff;
  justify-content: center;
  display: flex;
`;

export const PageTitleWrapper = styled.div`
  margin-top: 66px;
  width: 330px;
  height: 98px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;

export const PageTitle = styled.h1`
  color: #fff;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.2px;
  margin: -6px 9px;
`;

export const IconTitle = styled.div`
  width: 136px;
  height: 94px;
  background-image: url('./images/icons/about_APPS.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 5px;
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

export const CalendarCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  gap: 0;
  margin: auto;
`;

export const RegularCalendarCard = styled.div`
  width: 331px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 18px;
  background: var(--blue, #3f69ff);
  margin: 82px 0 0 110px;
`;

export const RegularCalendarWrapper = styled.div`
  display: flex;
  padding: 20px 0 0 26px;
  align-items: center;
  gap: 12px;
`;

export const RegularCalendarDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  background-image: url('/images/icons/about_calendar_white_dot.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const RegularCalendarName = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  margin: 0;
`;

export const RegularScheduleWrapper = styled.div`
  padding: 14px 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 9px;
`;

export const RegularSchedule = styled.div`
  display: inline-flex;
  height: 17px;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 18px;
  background: #fff;
  color: var(--blue, #3f69ff);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.7px;
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
    font-size: 16px;
  }
`;

export const MemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px 0;
  margin: 0 auto;
  margin-top: 32px;
  & > div:nth-child(even) {
    margin-top: 32px;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 44px 0;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;

    & > div:nth-child(even) {
      margin-top: 0px;
    }
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`;

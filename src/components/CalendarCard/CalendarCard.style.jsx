import styled from 'styled-components';

export const CalendarCard = styled.div`
  width: 221px;
  height: 221px;
  flex-shrink: 0;
  border-radius: 18px;
  border: 1px solid #fff;

  &:hover {
    width: 222px;
    height: 222px;
    border: 0;
    background: var(--orange, #ff5400);
  }

  &:hover ${() => CalendarMonthDot} {
    background-image: url('/images/icons/about_calendar_white_dot.svg');
  }

  &:hover ${() => Schedule} {
    background: #fff;
    color: var(--orange, #ff5400);
  }
`;

export const CalendarMonthWrapper = styled.div`
  display: flex;
  padding: 20px 0 0 26px;
  align-items: center;
  gap: 12px;
`;

export const CalendarMonthDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  background-image: url('/images/icons/about_calendar_blue_dot.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CalendarMonth = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  margin: 0;
`;

export const ScheduleWrapper = styled.div`
  padding: 14px 26px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Schedule = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 18px;
  background: var(--blue, #3f69ff);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.7px;
  white-space: pre-line;
`;

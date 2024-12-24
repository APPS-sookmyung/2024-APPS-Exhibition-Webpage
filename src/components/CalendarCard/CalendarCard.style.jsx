import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const CalendarCard = styled.div`
  width: 220px;
  min-height: 180px;
  border-radius: 18px;
  border: 1px solid #fff;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid var(--orange, #ff5400);
    background: var(--orange, #ff5400);
  }

  &:hover ${() => CalendarMonthDot} {
    background-image: url('/images/icons/about_calendar_white_dot.svg');
    transition: background-image 0.2s ease;
  }

  &:hover ${() => Schedule} {
    background: #fff;
    color: var(--orange, #ff5400);
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 198px;
    min-height: 160px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    min-height: 130px;
  }
`;

export const CalendarMonthWrapper = styled.div`
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

export const CalendarMonthDot = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  background-image: url('/images/icons/about_calendar_blue_dot.svg');
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

export const CalendarMonth = styled.h3`
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

export const ScheduleWrapper = styled.div`
  padding: 14px 20px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 12px 18px 22px;
    gap: 9px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px 14px 17px;
    gap: 7px;
  }
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
  word-break: keep-all;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 10px;
    padding: 5px 10px;
  }
`;

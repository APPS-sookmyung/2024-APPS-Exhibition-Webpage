import * as S from './CalendarCard.style';

export default function CalendarCard({ month, schedule, regular }) {
  return (
    <S.CalendarCard className={regular ? 'regular' : ''}>
      <S.CalendarMonthWrapper>
        <S.CalendarMonthDot></S.CalendarMonthDot>
        <S.CalendarMonth>{month}</S.CalendarMonth>
      </S.CalendarMonthWrapper>
      <S.ScheduleWrapper>
        {schedule.map((activity) => {
          return <S.Schedule>{activity}</S.Schedule>;
        })}
      </S.ScheduleWrapper>
    </S.CalendarCard>
  );
}

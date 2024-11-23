import * as S from './CalendarCard.style';

export default function CalendarCard({ month, schedule }) {
  return (
    <S.CalendarCard>
      <S.CalendarMonthWrapper>
        <S.CalendarMonthDot></S.CalendarMonthDot>
        <S.CalendarMonth>{month}월</S.CalendarMonth>
      </S.CalendarMonthWrapper>
      <S.ScheduleWrapper>
        {schedule.map((activity) => (
          <S.Schedule>{activity}</S.Schedule>
        ))}
      </S.ScheduleWrapper>
    </S.CalendarCard>
  );
}

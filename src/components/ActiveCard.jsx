import React from 'react';
import * as S from '../pages/AboutAppsPage/AboutAppsPage.style';

export default function ActiveCard() {
  return (
    <S.ActiveCard>
      <S.ActiveTextWrapper>
        <S.ActiveName>정기 세미나</S.ActiveName>
        <S.ActiveIntroWrapper>
          <S.ActiveIntro>
            "매주 목요일 저녁 6시에 모여 약 1시간 동안 정기 세미나를
            진행합니다.\n이 시간에는 각 팀별 스터디와 프로젝트의 진행 상황을
            발표하고, 10-15분 정도 DevTalk을 진행합니다."
          </S.ActiveIntro>
        </S.ActiveIntroWrapper>
      </S.ActiveTextWrapper>
      <S.ActiveBackBlur></S.ActiveBackBlur>
    </S.ActiveCard>
  );
}

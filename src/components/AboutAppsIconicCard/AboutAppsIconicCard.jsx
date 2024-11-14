import * as S from './AboutAppsIconicCard.style';

export default function AboutAppsIconicCard() {
  return (
    <S.AboutAppsIconicCard>
      <S.ImageWrapper>
        <img src="/images/icons/icon-with-A.svg" alt="Icon with A" />
      </S.ImageWrapper>
      <S.Title>탐구</S.Title>
      <S.Description>
        다양한 분야와 주제에 대한 탐색
        <br />
        #DevTalk #스터디 #컨퍼런스참여
      </S.Description>
    </S.AboutAppsIconicCard>
  );
}

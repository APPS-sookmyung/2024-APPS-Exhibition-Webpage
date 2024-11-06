import * as S from './AboutAppsPage.style';

export default function AboutAppsPage() {
  return (
    <S.Root>
      <S.Container>
        <S.Top>
          <S.PageTitleWrapper>
            <S.PageTitle>ABOUT</S.PageTitle>
            <S.IconTitle></S.IconTitle>
          </S.PageTitleWrapper>
        </S.Top>
        <S.IntroAPPSTitle>INTRODUCTION</S.IntroAPPSTitle>
        <S.IntroAPPSContent>
          APPS는 모바일 앱&웹 프로그래밍 동아리로,
          <br />
          기술과 아이디어를 통해 프로젝트를 진행하며
          <br />
          개발 능력을 향상시키고 커뮤니티 내에서 성장합니다.
          <br />
          활발한 소통과 피드백을 통해 개인과 공동체 발전을 촉진합니다.
        </S.IntroAPPSContent>
        <S.IntroToActLine></S.IntroToActLine>
      </S.Container>
      {/* 지민 */}
    </S.Root>
  );
}

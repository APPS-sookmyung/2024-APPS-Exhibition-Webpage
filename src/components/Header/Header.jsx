import * as S from './Header.style';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.StyledLink to="/">
          <S.Logo>
            <img src="/images/logo/logo-white.svg" alt="APPS 로고" />
          </S.Logo>
        </S.StyledLink>

        <S.Menu>
          <S.StyledLink to="/about">
            <S.AboutApps>APPS 소개</S.AboutApps>
          </S.StyledLink>
          <S.StyledLink
            to="https://forms.gle/1GHnyxAjrC2WKj7g7"
            target="_blank"
          >
            <S.RecruitmentAlertLink>
              12기 신입부원 지원하기
            </S.RecruitmentAlertLink>
          </S.StyledLink>
        </S.Menu>
      </S.Header>
    </S.HeaderWrapper>
  );
}

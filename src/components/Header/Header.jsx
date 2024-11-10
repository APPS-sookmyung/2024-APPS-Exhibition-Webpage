import * as S from './Header.style';
import logo from '../../images/logo/logo-white.svg';

export default function Header() {
  return (
    <S.Header>
      <S.StyledLink to="/">
        <S.Logo>
          <img src={logo} alt="APPS 로고" />
        </S.Logo>
      </S.StyledLink>

      <S.Menu>
        <S.StyledLink to="https://forms.gle/k14eA7Kk9bxD7aTm6" target="_blank">
          <S.RecruitmentAlertLink>모집 알림 받기</S.RecruitmentAlertLink>
        </S.StyledLink>
        <S.StyledLink to="/about">
          <S.AboutApps>APPS 소개</S.AboutApps>
        </S.StyledLink>
      </S.Menu>
    </S.Header>
  );
}

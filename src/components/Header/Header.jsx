import * as S from './Header.style';
import logo from '../../images/logo/logo-white.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo>
          <img src={logo} alt="APPS 로고" />
        </S.Logo>
      </Link>
      <S.Menu>
        <Link to="https://forms.gle/k14eA7Kk9bxD7aTm6" target="_blank">
          <S.RecruitmentAlertLink>모집 알림 받기</S.RecruitmentAlertLink>
        </Link>
        <Link to="/about">
          <S.AboutApps>APPS 소개</S.AboutApps>
        </Link>
      </S.Menu>
    </S.Header>
  );
}

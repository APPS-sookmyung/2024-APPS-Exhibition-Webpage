import * as S from './HomePage.style';
import { Header, PageLayout, Footer } from '../../components';

export default function HomePage() {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.HomePage>
        <S.HomeMainWrapper>
          <S.TitleWrapper>
            <S.ExhibitionTitle>Exhibition 2024</S.ExhibitionTitle>
            <S.APPSTitle>Sookmyung APPS</S.APPSTitle>
            <S.APPSSubTitle>WEB & APP PROGRAMMING CLUB</S.APPSSubTitle>
          </S.TitleWrapper>
        </S.HomeMainWrapper>
        <S.AboutAPPS></S.AboutAPPS>
        <S.MemberFeedback></S.MemberFeedback>
        <S.SocialLinks></S.SocialLinks>
        <S.ProjectList></S.ProjectList>
      </S.HomePage>
    </PageLayout>
  );
}

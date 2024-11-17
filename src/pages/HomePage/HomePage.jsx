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

        <S.ShareLinks>
          <S.ShareLinksTitle>함께 여정을 떠나볼까요?</S.ShareLinksTitle>
          <S.ShareLinksContent>
            <S.LinkBox>링크 공유하기</S.LinkBox>
            <S.LinkBox>12기 알림 신청하기</S.LinkBox>
          </S.ShareLinksContent>
        </S.ShareLinks>
      </S.HomePage>
    </PageLayout>
  );
}

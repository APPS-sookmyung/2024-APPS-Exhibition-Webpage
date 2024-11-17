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

        <S.SocialLinks>
          <S.SocialLinksTitle>
            APPS 소식을 더 빨리 알고 싶다면
          </S.SocialLinksTitle>
          <S.SocialLinksContent>
            <S.StyledLink to="https://www.linkedin.com/company/sookmyung-apps/">
              <S.SocialLinksCard>
                <S.SocialLinksCardImage>
                  <img
                    src="/images/socials/linkedin-active.svg"
                    alt="Linkedin"
                  />
                </S.SocialLinksCardImage>
                <S.SocialLinksCardDescription>
                  <S.SocialLinksCardTitle>LinkedIn</S.SocialLinksCardTitle>
                  <S.SocialLinksCardAccount>
                    @sookmyung-apps
                  </S.SocialLinksCardAccount>
                </S.SocialLinksCardDescription>
              </S.SocialLinksCard>
            </S.StyledLink>

            <S.StyledLink to="https://www.instagram.com/sookmyung_apps/">
              <S.SocialLinksCard>
                <S.SocialLinksCardImage>
                  <img
                    src="/images/socials/instagram-deactivate.svg"
                    alt="Instagram"
                  />
                </S.SocialLinksCardImage>
                <S.SocialLinksCardDescription>
                  <S.SocialLinksCardTitle>Instagram</S.SocialLinksCardTitle>
                  <S.SocialLinksCardAccount>
                    @sookmyung_apps
                  </S.SocialLinksCardAccount>
                </S.SocialLinksCardDescription>
              </S.SocialLinksCard>
            </S.StyledLink>
          </S.SocialLinksContent>
        </S.SocialLinks>
        <S.ProjectList></S.ProjectList>
      </S.HomePage>
    </PageLayout>
  );
}

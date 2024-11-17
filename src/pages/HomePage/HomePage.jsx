import * as S from './HomePage.style';
import { Header, PageLayout, Footer } from '../../components';
import { SOCIAL_MEDIA_LINKS } from '../../database/socialMediaLinks';

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
            {SOCIAL_MEDIA_LINKS.map((social) => (
              <S.StyledLink key={social.platform} to={social.link}>
                <S.SocialLinksCard>
                  <S.SocialLinksCardImage>
                    <img src={social.icon} alt={social.platform} />
                  </S.SocialLinksCardImage>
                  <S.SocialLinksCardDescription>
                    <S.SocialLinksCardTitle>
                      {social.platform}
                    </S.SocialLinksCardTitle>
                    <S.SocialLinksCardAccount>
                      {social.accountName}
                    </S.SocialLinksCardAccount>
                  </S.SocialLinksCardDescription>
                </S.SocialLinksCard>
              </S.StyledLink>
            ))}
          </S.SocialLinksContent>
        </S.SocialLinks>
        <S.ProjectList></S.ProjectList>
      </S.HomePage>
    </PageLayout>
  );
}

import * as S from './HomePage.style';
import {
  Header,
  PageLayout,
  Footer,
  SocialMediaLinkCards,
} from '../../components';
import { SOCIAL_MEDIA_LINKS_CARD } from '../../database/socialMediaLinkCards.js';

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
            {SOCIAL_MEDIA_LINKS_CARD.map((social) => (
              <SocialMediaLinkCards
                key={social.platform}
                platform={social.platform}
                link={social.link}
                icon={social.icon}
                accountName={social.accountName}
              />
            ))}
          </S.SocialLinksContent>
        </S.SocialLinks>

        <S.ProjectList></S.ProjectList>
      </S.HomePage>
    </PageLayout>
  );
}

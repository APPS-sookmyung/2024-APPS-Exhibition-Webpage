import * as S from './HomePage.style';
import {
  Header,
  PageLayout,
  Footer,
  SocialMediaLinkCards,
} from '../../components';
import { SOCIAL_MEDIA_LINKS_CARD } from '../../database/socialMediaLinkCards.js';
  AboutAppsIconicCard,
} from '../../components';
import { APPS_CORE_VALUE_CARDS } from '../../database';

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

        <S.AboutAPPSWrapper>
          <S.SectionTitleWrapper>
            <S.SectionTitleImageWrapper>
              <S.SectionTitle>About</S.SectionTitle>
              <img src="/images/logo/logo-gradation.svg" alt="앱스 로고" />
            </S.SectionTitleImageWrapper>
            <S.SectionSubTitle>
              숙명여자대학교 소프트웨어학부 웹 앱 개발 학회
            </S.SectionSubTitle>
          </S.SectionTitleWrapper>
          <S.SectionContentWrapper>
            <S.SectionContent>
              <S.SectionContentInnerBox>
                {APPS_CORE_VALUE_CARDS.slice(0, 2).map((card, index) => (
                  <AboutAppsIconicCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    color={card.color}
                  />
                ))}
              </S.SectionContentInnerBox>
            </S.SectionContent>
            <S.SectionContent>
              <S.SectionContentInnerBox>
                {APPS_CORE_VALUE_CARDS.slice(2, 4).map((card, index) => (
                  <AboutAppsIconicCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    color={card.color}
                  />
                ))}
              </S.SectionContentInnerBox>
            </S.SectionContent>
          </S.SectionContentWrapper>
        </S.AboutAPPSWrapper>

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

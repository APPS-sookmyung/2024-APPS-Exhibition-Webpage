import * as S from './HomePage.style';
import {
  Header,
  PageLayout,
  Footer,
  SocialMediaLinkCards,
  AboutAppsCoreValueCard,
  MemberFeedbackCards,
} from '../../components';
import { SOCIAL_MEDIA_LINKS_CARD, APPS_CORE_VALUE_CARDS } from '../../database';

export default function HomePage() {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.HomePageBackground>
        <S.HomePage>
          <S.HomeMainWrapper>
            <S.TitleWrapper>
              <S.ExhibitionTitle>EXHIBITION 2024</S.ExhibitionTitle>
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
                숙명여자대학교 소프트웨어학부 웹·앱 개발 학회
              </S.SectionSubTitle>
            </S.SectionTitleWrapper>
            <S.SectionContentWrapper>
              <S.SectionContent>
                <S.SectionContentInnerBox1>
                  {APPS_CORE_VALUE_CARDS.slice(0, 2).map((card, index) => (
                    <AboutAppsCoreValueCard
                      key={index}
                      imageSrc={card.imageSrc}
                      title={card.title}
                      description={card.description}
                      color={card.color}
                    />
                  ))}
                </S.SectionContentInnerBox1>
              </S.SectionContent>
              <S.SectionContent>
                <S.SectionContentInnerBox2>
                  {APPS_CORE_VALUE_CARDS.slice(2, 4).map((card, index) => (
                    <AboutAppsCoreValueCard
                      key={index}
                      imageSrc={card.imageSrc}
                      title={card.title}
                      description={card.description}
                      color={card.color}
                    />
                  ))}
                </S.SectionContentInnerBox2>
              </S.SectionContent>
            </S.SectionContentWrapper>
          </S.AboutAPPSWrapper>

          <S.MemberFeedback>
            <MemberFeedbackCards />
          </S.MemberFeedback>

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

          <S.ShareLinks>
            <S.ShareLinksTitle>함께 여정을 떠나볼까요?</S.ShareLinksTitle>
            <S.ShareLinksContent>
              <S.StyledLink to="/">
                <S.LinkButton>링크 공유하기</S.LinkButton>
              </S.StyledLink>
              <S.StyledLink
                to="https://forms.gle/k14eA7Kk9bxD7aTm6"
                target="_blank"
              >
                <S.LinkButton>12기 알림 신청하기</S.LinkButton>
              </S.StyledLink>
            </S.ShareLinksContent>
          </S.ShareLinks>
        </S.HomePage>
      </S.HomePageBackground>
    </PageLayout>
  );
}

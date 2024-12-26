import * as S from './HomePage.style';
import {
  Header,
  PageLayout,
  Footer,
  SocialMediaLinkCards,
  AboutAppsCoreValueCard,
  MemberFeedbackCardList,
  ProjectCardList,
} from '../../components';
import { SOCIAL_MEDIA_LINKS_CARD, APPS_CORE_VALUE_CARDS } from '../../database';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const handleCopyClipBoard = async () => {
  try {
    await navigator.clipboard.writeText('https://2024-apps.netlify.app/');
  } catch (err) {
    console.log(err);
  }
};

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.HomePageTopBackground>
        <S.HomePage>
          <S.HomeMainWrapper>
            <S.TitleWrapper>
              <S.ExhibitionTitleWrapper>
                <S.ImageWrapper1>
                  <img src="/images/logo/logo-pink.svg" alt="APPS 핑크 로고" />
                </S.ImageWrapper1>
                <S.ExhibitionTitleText>EXHIBITION 2024</S.ExhibitionTitleText>
              </S.ExhibitionTitleWrapper>
              <S.APPSTitleWrapper>
                <S.ImageWrapper2>
                  <img
                    src="/images/icons/icon-arrow-top-right.svg"
                    alt="좌상향 화살표"
                  />
                </S.ImageWrapper2>
                <S.APPSTitleText>Sookmyung APPS</S.APPSTitleText>
              </S.APPSTitleWrapper>
              <S.APPSSubTitle>WEB & APP PROGRAMMING CLUB</S.APPSSubTitle>
            </S.TitleWrapper>
          </S.HomeMainWrapper>

          <S.SectionWrapper>
            <S.SectionTitleWrapper>
              <S.SectionTitleImageWrapper>
                <S.SectionTitle>ABOUT</S.SectionTitle>
                <img
                  src="/images/logo/logo-gradation-motion.svg"
                  alt="앱스 로고"
                />
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
                      keywords={card.keywords}
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
                      keywords={card.keywords}
                      color={card.color}
                    />
                  ))}
                </S.SectionContentInnerBox2>
              </S.SectionContent>
            </S.SectionContentWrapper>
          </S.SectionWrapper>

          <S.SectionWrapper>
            <S.SectionTitleWrapper>
              <S.SectionTitleImageWrapper>
                <S.SmallSectionTitle>부원들이 말하는</S.SmallSectionTitle>
                <img
                  src="/images/logo/logo-gradation-motion.svg"
                  alt="앱스 로고"
                />
              </S.SectionTitleImageWrapper>
              <S.SectionSubTitle>
                서로가 갖고 있는 다양한 경험과 지식의 공유를 통해 동반성장을
                지향합니다
              </S.SectionSubTitle>
            </S.SectionTitleWrapper>
            <S.SectionContentWrapper>
              <MemberFeedbackCardList />
            </S.SectionContentWrapper>
          </S.SectionWrapper>

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
                  activeIcon={social.activeIcon}
                  deActiveIcon={social.deActiveIcon}
                />
              ))}
            </S.SocialLinksContent>
          </S.SocialLinks>

          <div id="project-section"></div>
          <S.ProjectList>
            <S.ProjectList>
              <ProjectCardList />
            </S.ProjectList>
          </S.ProjectList>
        </S.HomePage>
      </S.HomePageTopBackground>

      <S.HomePage>
        <S.HomePageBottomBackground>
          <S.ShareLinks>
            <S.ShareLinksTitle>함께 여정을 떠나볼까요?</S.ShareLinksTitle>
            <S.ShareLinksContent>
              <S.StyledLink to="/">
                <S.LinkButton
                  onClick={() =>
                    handleCopyClipBoard('https://2024-apps.netlify.app/')
                  }
                >
                  링크 복사하기
                </S.LinkButton>
              </S.StyledLink>
              <S.StyledLink
                to="https://forms.gle/k14eA7Kk9bxD7aTm6"
                target="_blank"
              >
                <S.LinkButton>12기 알림 신청하기</S.LinkButton>
              </S.StyledLink>
            </S.ShareLinksContent>
          </S.ShareLinks>
        </S.HomePageBottomBackground>
      </S.HomePage>
    </PageLayout>
  );
}

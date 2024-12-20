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

const handleCopyClipBoard = async () => {
  try {
    await navigator.clipboard.writeText('https://2024-apps.netlify.app/');
    alert('클립보드에 링크가 복사되었어요.');
  } catch (err) {
    console.log(err);
  }
};

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

          <S.ProjectList>
            <ProjectCardList />
          </S.ProjectList>

          <S.ShareLinks>
            <S.ShareLinksTitle>함께 여정을 떠나볼까요?</S.ShareLinksTitle>
            <S.ShareLinksContent>
              <S.StyledLink to="/">
                <S.LinkButton
                  onClick={() =>
                    handleCopyClipBoard('https://2024-apps.netlify.app/')
                  }
                >
                  링크 공유하기
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
        </S.HomePage>
      </S.HomePageBackground>
    </PageLayout>
  );
}

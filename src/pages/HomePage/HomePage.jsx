import * as S from './HomePage.style';
import {
  Header,
  PageLayout,
  Footer,
  AboutAppsIconicCard,
} from '../../components';

const CARD_DATA = [
  {
    imageSrc: '/images/icons/icon-with-A.svg',
    title: '탐구',
    description:
      '다양한 분야와 주제에 대한 탐색\n#DevTalk #스터디 #컨퍼런스참여',
    color: '#FF88FB',
  },
  {
    imageSrc: '/images/icons/icon-with-P-green.svg',
    title: '혁신',
    description:
      '개발자가 되기 위한 끝없는 도전\n#신입부원 웹 프로젝트 #서브스터디',
    color: '#5BFB67',
  },
  {
    imageSrc: '/images/icons/icon-with-P-orange.svg',
    title: '협력',
    description:
      '스터디와 프로젝트를 통한 개발 실력 향상\n#스터디 #프로젝트 #대외활동',
    color: '#FF5400',
  },
  {
    imageSrc: '/images/icons/icon-with-S.svg',
    title: '성장',
    description:
      '기수간 꾸준한 소통 및 정보 공유\n#정기세미나 #멘토링 #친목활동',
    color: '#3F69FF',
  },
];

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
              {' '}
              <S.SectionContentInnerBox>
                {CARD_DATA.slice(0, 2).map((card, index) => (
                  <AboutAppsIconicCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    color={card.color}
                  />
                ))}{' '}
              </S.SectionContentInnerBox>
            </S.SectionContent>
            <S.SectionContent>
              <S.SectionContentInnerBox>
                {CARD_DATA.slice(2, 4).map((card, index) => (
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

        <S.SocialLinks></S.SocialLinks>

        <S.ProjectList></S.ProjectList>
      </S.HomePage>
    </PageLayout>
  );
}

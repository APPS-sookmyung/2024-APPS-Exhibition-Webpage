import * as S from './AboutAppsPage.style';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import { activitiesArr } from '../../database/activity_list';
import MemberCard from '../../components/MemberCard';
import Footer from '../../components/Footer';

export default function AboutAppsPage() {
  const members = [
    {
      name: '경민서',
      title: '컴퓨터과학 21',
      position: '회장',
      image: 'ryumisung.png',
    },
    {
      name: '정지원',
      title: '컴퓨터과학 21',
      position: '부회장',
      image: 'ryumisung.png',
    },
    {
      name: '류미성',
      title: '컴퓨터과학 21',
      position: '프론트엔드장',
      image: 'ryumisung.png',
    },
    {
      name: '주아정',
      title: '컴퓨터과학 21',
      position: '백엔드장',
      image: 'ryumisung.png',
    },
    {
      name: '윤현서',
      title: '컴퓨터과학 21',
      position: '10기',
      image: 'ryumisung.png',
    },
    {
      name: '이지은',
      title: '컴퓨터과학 21',
      position: '10기',
      image: 'ryumisung.png',
    },
    {
      name: '이해림',
      title: '컴퓨터과학 21',
      position: '10기',
      image: 'ryumisung.png',
    },
    {
      name: '정서연',
      title: '컴퓨터과학 21',
      position: '10기',
      image: 'ryumisung.png',
    },
    {
      name: '김혜림',
      title: '컴퓨터과학 21',
      position: '10.5기',
      image: 'ryumisung.png',
    },
    {
      name: '하예영',
      title: '컴퓨터과학 21',
      position: '10.5기',
      image: 'ryumisung.png',
    },
    {
      name: '권유진',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '김준희',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '김지민',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '방지희',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '백수민',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '신정은',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '유하연',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '윤서빈',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '윤정란',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '윤지원',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '이다빈',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '하지민',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
    {
      name: '홍연주',
      title: '컴퓨터과학 21',
      position: '11기',
      image: 'ryumisung.png',
    },
  ];

  return (
    <S.Root>
      <S.TopToIntroContainer>
        <S.Top>
          <S.PageTitleWrapper>
            <S.PageTitle>ABOUT</S.PageTitle>
            <S.IconTitle></S.IconTitle>
          </S.PageTitleWrapper>
        </S.Top>
        <S.IntroAPPSTitle>INTRODUCTION</S.IntroAPPSTitle>
        <S.IntroAPPSContent>
          APPS는 모바일 앱&웹 프로그래밍 동아리로,
          <br />
          기술과 아이디어를 통해 프로젝트를 진행하며
          <br />
          개발 능력을 향상시키고 커뮤니티 내에서 성장합니다.
          <br />
          활발한 소통과 피드백을 통해 개인과 공동체 발전을 촉진합니다.
        </S.IntroAPPSContent>
        <S.IntroToActLine></S.IntroToActLine>
      </S.TopToIntroContainer>

      <S.ActivitiesContainer>
        <S.ActivitiesTitleWrapper>
          <S.ActivitiesTitle>ACTIVITIES</S.ActivitiesTitle>
          <S.ActivitiesDescription>
            APPS에서 정기적으로 진행하는 다양한 활동들이 있어요
          </S.ActivitiesDescription>
        </S.ActivitiesTitleWrapper>
        <S.ActivitiesCardWrapper>
          {activitiesArr.map((activity) => {
            return (
              <ActivityCard
                activityName={activity.name}
                activityIntro={activity.intro}
                activityImg={activity.img}
              />
            );
          })}
        </S.ActivitiesCardWrapper>
      </S.ActivitiesContainer>
      {/* 지민 */}
      <S.TeamContainer>
        <S.TeamIntroWrapper>
          <S.TeamIntroTitle>APPS와 함께하는 사람들</S.TeamIntroTitle>
          <S.TeamIntroContent>
            APPS 동아리 내 동아리 부원들을 소개할게요
            <br />
            카드를 클릭하여 APPS 부원들의 인터뷰를 만나보세요!
          </S.TeamIntroContent>
        </S.TeamIntroWrapper>
        <S.MemberList>
          {members.map((member, index) => (
            <MemberCard
              key={index}
              image={require(`../../images/memberProfiles/${member.image}`)}
              name={member.name}
              title={member.title}
              position={member.position}
              backgroundColor={
                index % 8 === 0 ||
                index % 8 === 3 ||
                index % 8 === 5 ||
                index % 8 === 6
                  ? '#2051FF'
                  : '#3F69FF'
              }
            />
          ))}
        </S.MemberList>
      </S.TeamContainer>
      <div>
        <Footer />
      </div>
    </S.Root>
  );
}

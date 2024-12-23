import { useState } from 'react';
import * as S from './AboutAppsPage.style';
import {
  MEMBERS,
  ACTIVITY_CARD_LIST,
  MONTHLY_ACTIVITY_LIST,
  STYLED_SQUARE_COLOR_CARDS,
  WEEKLY_ACTIVITY_LIST,
} from '../../database';
import {
  MemberCard,
  Modal,
  Footer,
  ActivityCard,
  CalendarCard,
  Header,
  PageLayout,
  FallingBlocks,
} from '../../components';

export default function AboutAppsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    console.log('Opening modal for:', member);
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.Root>
        <S.TopToIntroContainer>
          <S.Top>
            <S.PageTitleWrapper>
              <S.PageTitle>ABOUT</S.PageTitle>
              <S.PageSubTitle>APPS 소개</S.PageSubTitle>
              <S.IconTitle></S.IconTitle>
            </S.PageTitleWrapper>
            <S.SquareContainer>
              {STYLED_SQUARE_COLOR_CARDS.map((blocks, index) => (
                <FallingBlocks
                  key={index}
                  delay={blocks.delay}
                  fromY={blocks.fromY}
                  toY={blocks.toY}
                  time={blocks.time}
                  colors={blocks.colors}
                />
              ))}
            </S.SquareContainer>
            <S.TopBackgroundColor></S.TopBackgroundColor>
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
          <S.IntroToActLineWrapper>
            <S.IntroToActLine></S.IntroToActLine>
          </S.IntroToActLineWrapper>
        </S.TopToIntroContainer>
        <S.ActivitiesContainer>
          <S.ActivitiesTitleWrapper>
            <S.ActivitiesTitle>ACTIVITIES</S.ActivitiesTitle>
            <S.ActivitiesDescription>
              APPS에서 정기적으로 진행하는 다양한 활동들이 있어요
            </S.ActivitiesDescription>
          </S.ActivitiesTitleWrapper>
          <S.ActivitiesCardWrapper>
            {ACTIVITY_CARD_LIST.map((activity, index) => (
              <ActivityCard
                key={index}
                activityName={activity.name}
                activityIntro={activity.intro}
                activityImg={activity.img}
              />
            ))}
          </S.ActivitiesCardWrapper>
        </S.ActivitiesContainer>
        <S.CalendarContainer>
          <S.CalendarTitleWrapper>
            <S.CalendarTitle>11기는 어떤 활동을 하였나요?</S.CalendarTitle>
            <S.CalendarDescription>
              매달 진행된 다양한 활동들을 살펴보세요
            </S.CalendarDescription>
          </S.CalendarTitleWrapper>
          <S.CalendarCardWrapper>
            <S.RegularCalendarCard>
              <S.RegularCalendarWrapper>
                <S.RegularCalendarDot></S.RegularCalendarDot>
                <S.RegularCalendarName>매주 정기 활동</S.RegularCalendarName>
              </S.RegularCalendarWrapper>
              <S.RegularScheduleWrapper>
                {WEEKLY_ACTIVITY_LIST.map((activity, index) => (
                  <S.RegularSchedule key={index}>{activity}</S.RegularSchedule>
                ))}
              </S.RegularScheduleWrapper>
            </S.RegularCalendarCard>
            <S.CalendarCardSpace></S.CalendarCardSpace>
            {MONTHLY_ACTIVITY_LIST.map((calendar, index) => (
              <CalendarCard
                key={index}
                month={calendar.month}
                schedule={calendar.schedule}
              />
            ))}
          </S.CalendarCardWrapper>
        </S.CalendarContainer>
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
            {MEMBERS.map((member, index) => (
              <MemberCard
                key={index}
                image={require(`../../images/memberProfiles/${member.image}`)}
                name={member.name}
                title={member.title}
                position={member.position}
                index={index}
                onClick={() => openModal(member)}
              />
            ))}
          </S.MemberList>
        </S.TeamContainer>
        {isModalOpen && (
          <Modal member={selectedMember} closeModal={closeModal} />
        )}
        console.log('isModalOpen:', isModalOpen);
      </S.Root>
    </PageLayout>
  );
}

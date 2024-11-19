import React, { useState } from 'react';
import * as S from './AboutAppsPage.style';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import { activitiesArr } from '../../database/activity_list';
import MemberCard from '../../components/MemberCard/MemberCard';
import members from '../../database/members';
import Modal from '../../components/Modal/Modal';

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
              index={index} // index를 props로 전달
              onClick={() => openModal(member)}
            />
          ))}
        </S.MemberList>
      </S.TeamContainer>
      {isModalOpen && <Modal member={selectedMember} closeModal={closeModal} />}
      console.log('isModalOpen:', isModalOpen);
    </S.Root>
  );
}

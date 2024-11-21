import * as S from './ProjectCardList.style';
import { PROJECT_LIST } from '../../database';
import { useState } from 'react';

const TAB_BAR_LIST = ['All', 'App', 'Web', '신입부원'];

const ProjectCardList = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <S.ProjectCardList>
      <S.TabBar>
        {TAB_BAR_LIST.map((tab) => (
          <S.Tab
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={selectedTab === tab ? 'selected' : ''}
          >
            {tab}
          </S.Tab>
        ))}
      </S.TabBar>

      <S.ProjectCardContainer>
        {PROJECT_LIST.map((project) => {
          <S.ProjectCard></S.ProjectCard>;
        })}
      </S.ProjectCardContainer>
    </S.ProjectCardList>
  );
};

export default ProjectCardList;

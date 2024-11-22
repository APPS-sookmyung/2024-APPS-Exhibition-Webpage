import * as S from './ProjectCardList.style';
import {
  PROJECT_CATEGORIES,
  PROJECT_CATEGORY_LIST,
  PROJECT_LIST,
} from '../../database';
import { useState } from 'react';

const ProjectCardList = () => {
  const [selectedTab, setSelectedTab] = useState(PROJECT_CATEGORIES.ALL);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <S.ProjectCardList>
      <S.TabBar>
        {Object.values(PROJECT_CATEGORIES).map((tab) => (
          <S.Tab
            key={tab}
            onClick={() => handleTabClick(tab)}
            isActive={selectedTab === tab}
          >
            {tab}
          </S.Tab>
        ))}
      </S.TabBar>

      <S.ProjectCardContainer>
        {PROJECT_LIST.filter(
          (project) =>
            selectedTab === PROJECT_CATEGORIES.ALL ||
            project.category === selectedTab,
        ).map((project) => (
          <S.ProjectCard key={project.id}>
            <S.ProjectCardImage>임시</S.ProjectCardImage>
            <S.ProjectCardContent>
              <S.ProjectTitleWrapper>
                <S.ProjectTitle>{project.name}</S.ProjectTitle>
                <S.ProjectSubTitle>{project.summary}</S.ProjectSubTitle>
              </S.ProjectTitleWrapper>
              <S.ProjectBadgeWrapper>
                <S.ProjectBadge>
                  #
                  {PROJECT_CATEGORY_LIST.find(
                    (item) => item.category === project.category,
                  )?.label || ''}
                </S.ProjectBadge>
                <S.ProjectBadge>
                  {project.generation.map((gen) => `#${gen}`).join(' ')}
                </S.ProjectBadge>
              </S.ProjectBadgeWrapper>
            </S.ProjectCardContent>
          </S.ProjectCard>
        ))}
      </S.ProjectCardContainer>
    </S.ProjectCardList>
  );
};

export default ProjectCardList;

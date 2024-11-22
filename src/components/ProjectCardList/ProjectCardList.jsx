import { PROJECT_LIST } from '../../database/projectList';
import * as S from './ProjectCardList.style';

const TAB_BAR_LIST = ['All', 'App', 'Web', '신입부원'];

const ProjectCardList = () => (
  <S.ProjectCardList>
    <S.TabBar>
      {TAB_BAR_LIST.map((tab) => (
        <S.Tab key={tab}>{tab}</S.Tab>
      ))}
    </S.TabBar>

    <S.ProjectCardContainer>
      {PROJECT_LIST.map((project) => {
        <S.ProjectCard></S.ProjectCard>;
      })}
    </S.ProjectCardContainer>
  </S.ProjectCardList>
);

export default ProjectCardList;

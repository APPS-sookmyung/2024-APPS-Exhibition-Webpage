import * as S from './ProjectRecommend.style';
import { PROJECT_LIST } from '../../database';

// 랜덤으로 배열에서 3개 항목을 선택하는 함수
const getRandomProjects = (projects, numberOfProjects) => {
  const shuffled = [...projects].sort(() => Math.random() - 0.5); // 배열을 무작위로 섞기
  return shuffled.slice(0, numberOfProjects); // 첫 3개 항목을 반환
};

const ProjectRecommend = () => {
  const randomProjects = getRandomProjects(PROJECT_LIST, 3); // 랜덤으로 3개 프로젝트 선택

  return (
    <S.ProjectCardList>
      <S.ProjectCardContainer>
        {randomProjects.map((project) => (
          <S.ProjectCard key={project.id}>
            <S.ProjectCardImage>
              <img src={`../.${project.imageUrl}`} alt={project.name} />
            </S.ProjectCardImage>
          </S.ProjectCard>
        ))}
      </S.ProjectCardContainer>
    </S.ProjectCardList>
  );
};

export default ProjectRecommend;

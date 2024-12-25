import { useNavigate, useParams } from 'react-router-dom';
import { DeveloperCard, ProjectRecommend, ReviewCard } from '../../components';
import { developers } from '../../database/developers';
import * as S from './ProjectPage.style';
import { PROJECT_LIST } from '../../database';

export default function ProjectPage() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const lineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <S.Root>
      <S.Container>
        {PROJECT_LIST.map(
          (project) =>
            project.id === projectId && (
              <>
                <S.CloseBtn
                  src="images/icons/x_pink.svg"
                  onClick={() => navigate(-1)}
                />
                <S.Top>
                  <S.Title>{project.name}</S.Title>
                  <S.Description>{project.summary}</S.Description>
                  <S.TopBtnContainer>
                    <S.ShareBtn>
                      <S.ShareIcon src="images/icons/share.svg" alt="" />
                      <S.ShareText>프로젝트 공유하기</S.ShareText>
                    </S.ShareBtn>
                  </S.TopBtnContainer>
                </S.Top>
                <S.Center>
                  <S.Content>
                    <S.SubTitle>서비스 소개</S.SubTitle>
                    <S.ServiceDetail>
                      {lineBreaks(project.introduction)}
                    </S.ServiceDetail>
                  </S.Content>
                </S.Center>
                <S.Bottom>
                  <S.SubTitle>개발자</S.SubTitle>
                  <S.DeveloperCardContainer>
                    {project.memberList.map((developer, index) => (
                      <DeveloperCard
                        key={index}
                        image={developer.image}
                        name={developer.name}
                        part={developer.part}
                        position={developer.position}
                        isLeader={developer.isLeader}
                      />
                    ))}
                  </S.DeveloperCardContainer>
                  <S.SubTitle>회고</S.SubTitle>
                  <S.ReviewContainer>
                    {project.memberList.map((developer, index) => (
                      <ReviewCard
                        key={index}
                        image={developer.image}
                        name={developer.name}
                        part={developer.part}
                        position={developer.position}
                        review={developer.review}
                      />
                    ))}
                  </S.ReviewContainer>
                  <ProjectRecommend />
                </S.Bottom>
              </>
            ),
        )}
      </S.Container>
    </S.Root>
  );
}

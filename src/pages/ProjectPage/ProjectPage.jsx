import { useNavigate, useParams } from 'react-router-dom';
import { DeveloperCard, ProjectRecommend, ReviewCard } from '../../components';
import * as S from './ProjectPage.style';
import { PROJECT_LIST } from '../../database';

const handleCopyClipBoard = async (copyLink) => {
  try {
    await navigator.clipboard.writeText(copyLink);
  } catch (err) {
    console.log(err);
  }
};

export default function ProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectData = PROJECT_LIST.find(
    ({ id: projectId }) => projectId === Number(id),
  );
  console.log(projectData);

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
        <S.CloseBtn
          src="../../images/icons/x_pink.svg"
          onClick={() => navigate('/?scrollTo=project-section')}
        />
        <S.Top>
          <S.Title>{projectData.name}</S.Title>
          <S.Summary>{projectData.summary}</S.Summary>
          <S.TopBtnContainer>
            <S.ShareBtn
              onClick={() => handleCopyClipBoard(projectData.webpageLinkUrl)}
            >
              <S.ShareIcon src="../../images/icons/share.svg" alt="공유하기" />
              <S.ShareText>프로젝트 공유하기</S.ShareText>
            </S.ShareBtn>
            <S.LinkBtns>
              {projectData.githubUrls.clientUrl && (
                <a
                  href={projectData.githubUrls.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.LinkBtn>
                    <S.LinkIcon
                      src="../../images/socials/github.svg"
                      alt="github"
                    />
                    <p>Client</p>
                  </S.LinkBtn>
                </a>
              )}
              {projectData.githubUrls.serverUrl && (
                <a
                  href={projectData.githubUrls.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.LinkBtn>
                    <S.LinkIcon
                      src="../../images/socials/github.svg"
                      alt="github"
                    />
                    <p>Server</p>
                  </S.LinkBtn>
                </a>
              )}
              {projectData.webpageLinkUrl && (
                <a
                  href={projectData.webpageLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.LinkBtn>
                    <S.LinkIcon
                      src="../../images/socials/webpage-link.svg"
                      alt="link"
                    />
                    <p>Link</p>
                  </S.LinkBtn>
                </a>
              )}
              {projectData.downloadLinkUrl && (
                <a
                  href={projectData.downloadLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.LinkBtn>
                    <S.LinkIcon
                      src="../../images/socials/app-store.svg"
                      alt="appstore"
                    />
                    <p>AppStore</p>
                  </S.LinkBtn>
                </a>
              )}
            </S.LinkBtns>
          </S.TopBtnContainer>
          <S.YoutubeContainer>
            <S.Youtube>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${projectData.youtubeVideoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.Youtube>
          </S.YoutubeContainer>
        </S.Top>
        <S.Line src="../../images/background/projects_line.svg" alt="" />
        <S.Center>
          <S.Content>
            <S.SubTitle>서비스 소개</S.SubTitle>
            <S.ServiceDetail>
              {lineBreaks(projectData.introduction)}
            </S.ServiceDetail>
            <S.SubTitle>기능 설명</S.SubTitle>
            <S.ServiceDetail>
              {lineBreaks(projectData.description)}
            </S.ServiceDetail>
            <S.SubTitle>기술 스택</S.SubTitle>
            <S.StackList>
              {projectData.techStackList.map((stack) => (
                <S.StackItem>
                  <S.StackIcon src={stack.imageUrl} alt="" />
                  <S.StackText>{stack.name}</S.StackText>
                </S.StackItem>
              ))}
            </S.StackList>
          </S.Content>
        </S.Center>
        <S.Bottom>
          <S.SubTitle>개발자</S.SubTitle>
          <S.DeveloperCardContainer>
            {projectData.memberList
              .filter((developer) => developer.part !== 'design') // part가 'design'이 아닌 경우만 필터링
              .map((developer) => (
                <DeveloperCard
                  key={developer.index}
                  image={developer.image}
                  name={developer.name}
                  part={developer.part}
                  position={developer.position}
                  isLeader={developer.isLeader}
                />
              ))}
          </S.DeveloperCardContainer>
          {projectData.memberList.some((member) => member.part === 'design') ? (
            <>
              <S.SubTitle>디자인</S.SubTitle>
              <S.DesignerCardContainer>
                {projectData.memberList
                  .filter((developer) => developer.part === 'design') // part가 'design'이 아닌 경우만 필터링
                  .map((developer) => (
                    <DeveloperCard
                      key={developer.index}
                      image={developer.image}
                      name={developer.name}
                      part={developer.part}
                      position={developer.position}
                      isLeader={developer.isLeader}
                    />
                  ))}
              </S.DesignerCardContainer>
            </>
          ) : null}
          <S.SubTitle>회고</S.SubTitle>
          <S.ReviewContainer>
            {projectData.memberList.map((developer) => (
              <ReviewCard
                key={developer.index}
                image={developer.image}
                name={developer.name}
                part={developer.part}
                position={developer.position}
                review={developer.review}
              />
            ))}
          </S.ReviewContainer>
          <S.SubTitle>프로젝트 더보기</S.SubTitle>
          <ProjectRecommend />
        </S.Bottom>
      </S.Container>
    </S.Root>
  );
}

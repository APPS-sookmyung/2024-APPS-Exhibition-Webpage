import { useNavigate } from 'react-router-dom';
import { DeveloperCard } from '../../components';
import { developers } from '../../database/developers';
import * as S from './ProjectPage.style';

export default function ProjectPage() {
  const navigate = useNavigate();

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
          src="images/icons/x_pink.svg"
          onClick={() => navigate(-1)}
        />
        <S.Top>
          <S.Title>COOKIEE-</S.Title>
          <S.Description>하루하루의 쿠키를 모아보세요!</S.Description>
          <S.TopBtnContainer>
            <S.ShareBtn>
              <S.ShareIcon src="images/icons/share.svg" alt="" />
              <S.ShareText>프로젝트 공유하기</S.ShareText>
            </S.ShareBtn>
            <S.LinkBtns>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.LinkBtn src="images/socials/github.svg" alt="github" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.LinkBtn src="images/socials/github.svg" alt="github" />
              </a>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.LinkBtn src="images/socials/webpage-link.svg" alt="link" />
              </a>
              <a
                href="https://appstore.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.LinkBtn src="images/socials/app-store.svg" alt="appstore" />
              </a>
            </S.LinkBtns>
          </S.TopBtnContainer>
          <S.YoutubeContainer>
            <S.Youtube>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/4j7LGMc9ZGU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.Youtube>
          </S.YoutubeContainer>
        </S.Top>
        <S.Line src="images/background/projects_line.svg" alt="" />
        <S.Center>
          <S.Content>
            <S.SubTitle>서비스 소개</S.SubTitle>
            <S.ServiceDetail>
              {lineBreaks(
                'Cookiee- 앱으로 여러분의 하루하루를 아름답게 기록해보세요!\n사진으로 나만의 캘린더를 꾸미고, 그 날 누구와 무엇을 했는지 기록하세요.\n일상을 캘린더로 디자인하는 색다른 경험을 누려보세요!',
              )}
            </S.ServiceDetail>
            <S.SubTitle>기능 설명</S.SubTitle>
            <S.ServiceDetail>
              {lineBreaks(
                '🍪 캘린더로 한 달의 쿠키 모아보기\n 하루하루의 쿠키를 모아 한 달의 일상을 캘린더로 한눈에 보여줍니다.\n\n 🍪 그 날의 쿠키 조각을 모아보기\n 하루동안의 쿠키 조각들을 보면서 누구와 어떤 시간을 보냈는지 리스트할 수 있습니다. 🍪\n\n 카테고리 별 나의 일상 찾기\n 나의 쿠키들을 카테고리 별로 정리하여 한눈에 볼 수 있습니다.',
              )}
            </S.ServiceDetail>
            <S.SubTitle>기술 스택</S.SubTitle>

            <S.StackList>
              <S.StackItem>
                <S.StackIcon src="images/techStacks/firebase.svg" alt="" />
                <S.StackText>Google Firebase</S.StackText>
              </S.StackItem>
              <S.StackItem>
                <S.StackIcon src="images/techStacks/nextjS.svg" alt="" />
                <S.StackText>NextJS</S.StackText>
              </S.StackItem>
            </S.StackList>
          </S.Content>
        </S.Center>
        <S.Bottom>
          <S.SubTitle>개발자</S.SubTitle>
          <S.DeveloperCardContainer>
            {developers.map((developer) => (
              <DeveloperCard
                image={developer.image}
                name={developer.name}
                part={developer.part}
                position={developer.position}
                isLeader={developer.isLeader}
                index={developer.index}
              />
            ))}
          </S.DeveloperCardContainer>
          <S.SubTitle>회고</S.SubTitle>
          <S.ReviewContainer>
            {/* <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard /> */}
          </S.ReviewContainer>
        </S.Bottom>
      </S.Container>
    </S.Root>
  );
}

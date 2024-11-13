import * as s from './ProjectPage.style';
import {
  githubIcon,
  webPageLinkIcon,
  appStoreIcon,
} from '../../images/socials';

export default function ProjectPage() {
  return (
    <s.Root>
      <s.Container>
        <s.CloseBtn />
        <s.Top>
          <s.Title>COOKIEE-</s.Title>
          <s.Description>하루하루의 쿠키를 모아보세요!</s.Description>
          <s.TopBtnContainer>
            <s.ShareBtn>
              <s.ShareIcon />
              <p>프로젝트 공유하기</p>
            </s.ShareBtn>
            <s.LinkBtns>
              <s.LinkBtn src={githubIcon} />
              <s.LinkBtn src={githubIcon} />
              <s.LinkBtn src={webPageLinkIcon} />
              <s.LinkBtn src={appStoreIcon} />
            </s.LinkBtns>
          </s.TopBtnContainer>
        </s.Top>
      </s.Container>
    </s.Root>
  );
}

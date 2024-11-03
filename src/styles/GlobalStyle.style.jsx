import { createGlobalStyle } from 'styled-components';
import { resetStyles } from './resetStyles.style';
import { pretendardFont } from './PretendardFont.style';
import { exhibitionStyles } from './exhibitionStyles.style';

export const GlobalStyle = createGlobalStyle`
  // 덮어쓰기를 고려하여 배치 순서 고려
  ${resetStyles}
  ${pretendardFont}
  ${exhibitionStyles}
`;

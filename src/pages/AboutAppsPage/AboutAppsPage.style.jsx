import styled from 'styled-components';
import background from '../../images/background/about_background.svg';
import titleIcon from '../../images/icons/about_APPS.svg';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: 100% 785px;
  // background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Top = styled.div`
  width: 100%;
  min-height: 234px;
  background-color: #3f69ff;
  justify-content: center;
  display: flex;
`;

export const PageTitleWrapper = styled.div`
  margin-top: 66px;
  width: 329.599px;
  height: 98.4px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  // background-color: #000;
`;
export const PageTitle = styled.h1`
  color: #fff;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;
  margin: -6px 8.8px;
`;
export const IconTitle = styled.div`
  width: 135.799px;
  height: 93.8px;
  background-image: url(${titleIcon});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 4.6px;
  background-color: #3f69ff;
`;

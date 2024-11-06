import styled from 'styled-components';
import background from '../../images/background/about_background.svg';
import titleIcon from '../../images/icons/about_APPS.svg';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: 100% 785px;
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
  width: 330px;
  height: 98.4px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;
export const PageTitle = styled.h1`
  color: #fff;
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -3.25px;
  margin: -6px 8.8px;
`;
export const IconTitle = styled.div`
  width: 136px;
  height: 94px;
  background-image: url(${titleIcon});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 4.6px;
  background-color: #3f69ff;
`;

export const IntroAPPSTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: 'Dolce Vita Heavy';
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1.2px;
  margin: 45px 0 31px 0;
`;

export const IntroAPPSContent = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
  margin: 0 0 53px 0;
`;

export const IntroToActLine = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(90deg, #ff5400, #3f69ff);
  background-size: 962px 2px;
  background-position: center;
  background-repeat: no-repeat;
`;

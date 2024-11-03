import styled from 'styled-components';
import x_pink from '../../images/icons/x_pink.svg';
import background from '../../images/background/projects_background.svg';
import share from '../../images/icons/share.svg';

export const Root = styled.div`
  width: 100%;
  min-height: 5000px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 1300px; */
  padding: 62px 70px 0 70px;
`;

export const CloseBtn = styled.img.attrs({
  src: x_pink,
  alt: 'Close',
})`
  align-self: flex-end;
  width: 36px;
  height: 36px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 65px;
  margin: 0;
  margin-bottom: 4px;
`;

export const Description = styled.p`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
  margin: 0 0 22px 0;
`;

export const TopBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ShareBtn = styled.div`
  background-color: #ff88fb;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 43px;
  margin: 0;

  p {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -1px;
    max-height: 24px;
    margin: 0;
  }
`;

export const ShareIcon = styled.img.attrs({
  src: share,
  alt: 'Share',
})`
  width: 20px;
  height: 24px;
  margin-right: 10px;
`;

export const LinkBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const LinkBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
`;

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 22px;
  margin: 0 30px;
`;

export const Menu = styled.div`
  margin: 0 50px;
`;

export const MenuStyle = styled.span`
  color: #fff;
  font-size: 14px;
  padding: 22px;
  cursor: pointer;
`;

export const RecruitmentAlertLink = styled(MenuStyle)``;

export const AboutApps = styled(MenuStyle)``;

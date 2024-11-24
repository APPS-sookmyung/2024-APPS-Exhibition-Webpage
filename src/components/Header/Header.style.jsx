import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderWrapper = styled.div`
  background: #212121;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  height: 60px;
`;

export const Logo = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 22px;
  margin: 0 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin: 0 10px;
    padding: 14px;
  }
`;

export const Menu = styled.div`
  margin: 0 50px;
  text-decoration: none;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    margin: 0 40px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin: 0 10px;
  }
`;

export const MenuStyle = styled.span`
  display: inline-block;
  width: max-content;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 22px;
  cursor: pointer;
  transition:
    font-weight 0.2s ease,
    color 0.2s ease;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 14px;
  }
`;

export const RecruitmentAlertLink = styled(MenuStyle)``;

export const AboutApps = styled(MenuStyle)``;

import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #212121;
  padding: 22px 0 30px;
  text-align: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  text-align: center;
  gap: 16px;
`;

export const Logo = styled.div`
  color: #fff;
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CategoryTitle = styled.strong`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 4px;
  }
`;

export const TeamMember = styled.span`
  color: #fff;
  font-size: 12px;
`;

export const AddressSection = styled.div`
  color: #c3c3c3;
  font-size: 12px;
  padding: 20px;
  word-break: keep-all;
`;

export const Address = styled.p`
  margin: 0;
  opacity: 0.7;
`;

export const Copyright = styled.p`
  margin: 0;
  opacity: 0.7;
`;

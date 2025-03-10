import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles/mediaQueries.style';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const SocialLinksCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const SocialLinksCardImage = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 80px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 60px;
  }
`;

export const SocialLinksCardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialLinksCardTitle = styled.span`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.9px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

export const SocialLinksCardAccount = styled.span`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.9px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 14px;
  }
`;

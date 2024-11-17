import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const SocialLinksCardImage = styled.div``;

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
`;

export const SocialLinksCardAccount = styled.span`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.9px;
`;

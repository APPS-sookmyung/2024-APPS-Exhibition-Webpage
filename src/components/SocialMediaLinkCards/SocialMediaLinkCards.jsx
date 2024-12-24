import { useState } from 'react';
import * as S from './SocialMediaLinkCards.style';

const SocialMediaLinkCards = ({
  platform,
  link,
  activeIcon,
  deActiveIcon,
  accountName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.StyledLink
      to={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
    >
      <S.SocialLinksCard>
        <S.SocialLinksCardImage>
          <img src={isHovered ? activeIcon : deActiveIcon} alt={platform} />
        </S.SocialLinksCardImage>
        <S.SocialLinksCardDescription>
          <S.SocialLinksCardTitle>{platform}</S.SocialLinksCardTitle>
          <S.SocialLinksCardAccount>{accountName}</S.SocialLinksCardAccount>
        </S.SocialLinksCardDescription>
      </S.SocialLinksCard>
    </S.StyledLink>
  );
};

export default SocialMediaLinkCards;

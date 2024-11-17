import * as S from './SocialMediaLinkCards.style';

const SocialMediaLinkCards = ({ platform, link, icon, accountName }) => (
  <S.StyledLink to={link}>
    <S.SocialLinksCard>
      <S.SocialLinksCardImage>
        <img src={icon} alt={platform} />
      </S.SocialLinksCardImage>
      <S.SocialLinksCardDescription>
        <S.SocialLinksCardTitle>{platform}</S.SocialLinksCardTitle>
        <S.SocialLinksCardAccount>{accountName}</S.SocialLinksCardAccount>
      </S.SocialLinksCardDescription>
    </S.SocialLinksCard>
  </S.StyledLink>
);

export default SocialMediaLinkCards;

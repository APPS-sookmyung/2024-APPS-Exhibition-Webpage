import * as S from './AboutAppsIconicCard.style';

export default function AboutAppsIconicCard({ imageSrc, title, description }) {
  return (
    <S.AboutAppsIconicCard>
      <S.ImageWrapper>
        <img src={imageSrc} alt={title} />
      </S.ImageWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.AboutAppsIconicCard>
  );
}

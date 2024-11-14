import * as S from './AboutAppsIconicCard.style';

export default function AboutAppsIconicCard({
  imageSrc,
  title,
  description,
  color,
}) {
  return (
    <S.AboutAppsIconicCard>
      <S.ImageWrapper>
        <img src={imageSrc} alt={title} />
      </S.ImageWrapper>
      <S.Title color={color}>{title}</S.Title>
      <S.Description color={color}>{description}</S.Description>
    </S.AboutAppsIconicCard>
  );
}

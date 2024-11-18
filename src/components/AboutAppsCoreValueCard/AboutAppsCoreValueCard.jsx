import * as S from './AboutAppsCoreValueCard.style';

export default function AboutAppsCoreValueCard({
  imageSrc,
  title,
  description,
  color,
}) {
  return (
    <S.AboutAppsCoreValueCard>
      <S.ImageWrapper>
        <img src={imageSrc} alt={title} />
      </S.ImageWrapper>
      <S.Title color={color}>{title}</S.Title>
      <S.Description color={color}>{description}</S.Description>
    </S.AboutAppsCoreValueCard>
  );
}

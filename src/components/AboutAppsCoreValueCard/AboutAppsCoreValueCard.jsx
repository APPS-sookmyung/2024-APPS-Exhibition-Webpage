import * as S from './AboutAppsCoreValueCard.style';

export default function AboutAppsCoreValueCard({
  imageSrc,
  title,
  description,
  keywords,
  color,
}) {
  return (
    <S.AboutAppsCoreValueCard>
      <S.ImageWrapper>
        <img src={imageSrc} alt={title} />
      </S.ImageWrapper>
      <S.Title color={color}>{title}</S.Title>
      <S.Description color={color}>{description}</S.Description>
      <S.Description color={color}>
        {keywords.map((keyword, index) => (
          <S.Hashtag key={index}>{keyword}&nbsp;</S.Hashtag>
        ))}
      </S.Description>
    </S.AboutAppsCoreValueCard>
  );
}

import React from 'react';
import * as S from './MemberCard.style';

export default function MemberCard({
  image,
  name,
  title,
  position,
  backgroundColor,
  onClick,
}) {
  return (
    <S.MemberCard backgroundColor={backgroundColor} onClick={onClick}>
      <S.MemberImage src={image} alt={`${name} 프로필 이미지`} />
      <S.NameAndPositionWrapper>
        <S.MemberName>{name}</S.MemberName>
        <S.MemberPositionInfo>{position}</S.MemberPositionInfo>
      </S.NameAndPositionWrapper>
      <S.MemberInfo>{title}</S.MemberInfo>
    </S.MemberCard>
  );
}

import React from 'react';
import * as S from './DeveloperCard.style';

export default function DeveloperCard({
  index,
  image,
  name,
  part,
  position,
  isLeader,
}) {
  const handleDeveloperClick = () => {
    console.log('개발자 클릭');
  };
  return (
    <S.DeveloperCard part={part} index={index} onClick={handleDeveloperClick}>
      <S.DeveloperImage src={image} alt={`${name} 프로필 이미지`} />
      <S.DeveloperName part={part}>{name}</S.DeveloperName>
      <S.DeveloperPosition part={part}>{position}</S.DeveloperPosition>
      {isLeader && <S.LeaderBadge>TEAM LEADER</S.LeaderBadge>}
    </S.DeveloperCard>
  );
}

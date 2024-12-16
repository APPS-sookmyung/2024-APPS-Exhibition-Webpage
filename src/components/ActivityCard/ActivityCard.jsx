import { useState } from 'react';
import * as S from './ActivityCard.style';

export default function ActivityCard({
  activityName,
  activityIntro,
  activityImg,
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const linearGradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 27.33%), ';

  const Blur = 'linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.5)), ';

  return (
    <S.ActivityCard
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      style={
        isHovering
          ? {
              backgroundImage: Blur + linearGradient + `url(${activityImg})`,
            }
          : {
              backgroundImage: linearGradient + `url(${activityImg})`,
            }
      }
    >
      <S.ActivityTextWrapper>
        <S.ActivityName>{activityName}</S.ActivityName>
        <S.ActivityIntroWrapper>
          {isHovering ? <S.ActivityIntro>{activityIntro}</S.ActivityIntro> : ''}
        </S.ActivityIntroWrapper>
      </S.ActivityTextWrapper>
    </S.ActivityCard>
  );
}
